---
title: Short Circuit Assignment in JavaScript
published: true
description: Default values with short-circuit evaluation
tags: javascript, webdev, tutorial
date: '2018-02-17'
---

This article is also cross-posted in —

DEV - [Short Circuit Assignment in JavaScript](https://dev.to/flexdinesh/short-circuit-assignment-in-javascript--4k80)

---

![JS short circuit assignment](https://image.ibb.co/c9duVn/short_circuit_alt.jpg)

**tldr;** _Assign default value to a variable using short circuit evaluation, when expected value is not found._

JavaScript is amazing. But most of the times we end up scratching our heads for accomplishing a simple task, like, _assigning a default value to a variable when the expected value is not found (probably null/undefined)._

Let's take this example,

```js
const person = {
    name: 'Jack'
};

const name = person.name;
const greetings = 'Hello' + ', ' + name + '!';
console.log(greetings) // => 'Hello, Jack!'
```

Now if the name key is not available in person object,

```js
const person = {};

const name = person.name; // name is undefined here
const greetings = 'Hello' + ', ' + name + '!';
console.log(greetings) // => 'Hello, undefined!'
```

This problem is very common in JavaScript world. We usually tackle scenarios like this by assigning default values.

```js
// we either use if case
let name = 'Sunshine'; // default value
if (person && person.name) {
    name = person.name;
}

// or we use ternary operator
const name = person && person.name ? person.name : 'Sunshine';

const greetings = 'Hello' + ', ' + name + '!'; // name will never be undefined now
console.log(greetings) // => 'Hello, Jack!'
```

The above case was a simple scenario because we had to check only one variable. But if we need to assign based on multiple variables, then we end up writing messy _not-easy-to-read_ code.

```js
let foo, bar, baz;

// if case mess
let name;
if (foo) name = foo;
else if (bar) name = bar;
else if (baz) name = baz;
else name = 'Sunshine';

// ternary operator nightmare
const name = foo ? foo : (bar ? bar : (baz ? baz : 'Sunshine'));

``` 

To save the world from messy code, **there's one more _sweeter_ trick to assign default values.**

## Short Circuit Assignment ✨

This is a shorter and cleaner way of assigning default values in JavaScript. This works based on short-circuit evaluation of logical operators where the **first _truthy_ value is returned**.

```js
const name = person.name || 'Sunshine';

// if you're not sure if person object is defined
const name = (person && person.name) || 'Sunshine';

// can be used with as many variables as needed
let foo, bar, baz;
bar = 'Bar-da-Jack';
// first truthy value will be assigned to name
const name = foo || bar || baz || 'John'; // => name = 'Bar-da-Jack'
```

The evaluation circuit breaks when a truthy value is found, and is returned to the assignment. 

Any value which is not `false`, `0`, `''`, `""`, `null`, `undefined` and `NaN` is considered to be truthy in JavaScript.

**Note:** _Keep in mind, if you're expecting `0` as a value in a variable, this trick might not work as expected, as `0` is considered falsy in JavaScript._

So, fellow comrades, short-circuit and save the JavaScript world from messy code structures, one line at a time! 🎉
