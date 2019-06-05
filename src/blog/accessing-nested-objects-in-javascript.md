---
title: Accessing Nested Objects in JavaScript
published: true
description: Dealing with 'cannot read property of undefined' error
tags: javascript, webdev, tutorial
date: '2018-02-10'
canonicalURL: 'https://dev.to/flexdinesh/accessing-nested-objects-in-javascript--9m4'
---

This article is also cross-posted in —

DEV - [Accessing Nested Objects in JavaScript](https://dev.to/flexdinesh/accessing-nested-objects-in-javascript--9m4)

HackerNoon - [Accessing Nested Objects in JavaScript](https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f)

codeburst - [Accessing Nested Objects in JavaScript](https://codeburst.io/accessing-nested-objects-in-javascript-c2ed249fe576)

It has been featured in —

DEV - [The 7 Most Popular DEV Posts from the Past Week](https://dev.to/thepracticaldev/the-7-most-popular-dev-posts-from-the-past-week--31m3)

codeburst - [Top Web & Software Development Articles — March 1, 2018](https://codeburst.io/top-web-software-development-articles-march-1-2018-51ed35890abd)

---

![undefined error in JavaScript](https://image.ibb.co/i3ybGS/undefined_access.jpg)

**tldr;** _safely access nested objects in JavaScript in a super cool way._

JavaScript is amazing, we all know that already. But a few things in JavaScript are really weird and they make us scratch our heads a lot. One of those things is the confrontation with this error when you try to access a nested object,

**_Cannot read property 'foo' of undefined_**

Most of the times when we're working with JavaScript, we'll be dealing with nested objects and often we'll be needing to access the innermost nested values safely.

Let's take this nested object as an example.

```js
const user = {
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
    name: 'Jack',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX',
    },
  },
}
```

To access the name of the our user, we'll write

```js
const name = user.personalInfo.name
const userCity = user.personalInfo.address.city
```

This is easy and straight-forward.

But, for some reason, if our user's personal info is not available, the object structure will be like this,

```js
const user = {
  id: 101,
  email: 'jack@dev.com',
}
```

Now if you try you access the name, you'll be thrown _Cannot read property 'name' of undefined_.

```js
const name = user.personalInfo.name // Cannot read property 'name' of undefined
```

This is because we're trying to access `name` key from an object that does not exist.

The usual way how most devs deal with this scenario is,

```js
const name = user && user.personalInfo ? user.personalInfo.name : null
// undefined error will NOT be thrown as we check for existence before access
```

This is okay if your nested structure is simple, but if you have your data nested 5 or 6 levels deep, then your code will look really messy like this,

```js
let city
if (
  data &&
  data.user &&
  data.user.personalInfo &&
  data.user.personalInfo.addressDetails &&
  data.user.personalInfo.addressDetails.primaryAddress
) {
  city = data.user.personalInfo.addressDetails.primaryAddress
}
```

There are a few tricks to deal with this messy object structures.

## Oliver Steele's Nested Object Access Pattern

This is my personal favorite as it makes the code look _clean_ and _simple_. I picked this style from stackoverflow a while back and it is pretty catchy once you understand how it works.

```js
const name = ((user || {}).personalInfo || {}).name
```

With this notation, you'll never run into _Cannot read property 'name' of undefined_. You basically check if user exists, if not, you create an empty object on the fly. This way, the next level key will **always be accessed from an object that exists or an empty object**, but never from undefined.

Unfortunately, **you cannot access nested arrays with this trick**

## Access Nested Objects Using Array Reduce

Array reduce method is very powerful and it can be used to safely access nested objects.

```js
const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    nestedObj
  )
}

// pass in your object structure as array elements
const name = getNestedObject(user, ['personalInfo', 'name'])

// to access nested array, just pass in array index as an element the path array.
const city = getNestedObject(user, ['personalInfo', 'addresses', 0, 'city'])
// this will return the city from the first address item.
```

## Typy

If you think the above methods are a lil' too mainstream, then you should try [Typy](https://github.com/flexdinesh/typy) library that I've written. In addition to safely accessing nested objects, it does many more awesome things. 🎉

It is available as an npm package - [Typy](https://www.npmjs.com/package/typy)

If you use **Typy**, your code will look like this,

```js
import t from 'typy'

const name = t(user, 'personalInfo.name').safeObject
const city = t(user, 'personalInfo.addresses[0].city').safeObject
// address is an array
```

_Edit: There a few other libraries like Lodash and Ramda that can do this. But in light-weight front-end projects, especially if you're going to need only one or two methods from those libs, it's a good idea to opt for an alternative light-weight lib, or better, write your own._

Happy 'safely accessing nested objects in JavaScript'! 💥
