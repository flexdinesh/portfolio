---
title: Publish your own NPM package
published: true
description: Step by step tutorial to build npm libraries
tags: javascript, node, howto, tutorial
date: '2018-03-05'
---

This article is also cross-posted in —

DEV - [Publish your own NPM package](https://dev.to/flexdinesh/publish-your-own-npm-package---5b71)

HackerNoon - [Publish your own NPM package](https://hackernoon.com/publish-your-own-npm-package-946b19df577e)

codeburst - [Publish your own NPM package](https://codeburst.io/publish-your-own-npm-package-ff918698d450)

It has been featured in —

JSK Weekly - March 14, 2018 (Email Newsletter)

---

![Publish your own NPM package](https://i.ytimg.com/vi/rTsz09zRuTU/maxresdefault.jpg)

**_Note: There's an amazing boilerplate for [npm modules](https://github.com/flexdinesh/npm-module-boilerplate). This post is based on what I learned from setting it up._**


NPM has been become the de-facto registry for javascript libraries these days.  Especially with React, Angular and other front-end libraries ruling the web and node.js taking over the server side, _NPM packages are more popular than ever now_. Often we import amazing utilities like [typy](https://github.com/flexdinesh/typy), [sugar](https://github.com/andrewplummer/Sugar) in our code and use them without any hassle.

But have you ever wondered about writing your **own utility/library** and publishing it to NPM so you, along with the entire world can re-use it anywhere? If yes, then keep reading. ✨

We'll go through the following sections in this post.
1. Why?
2. Steps to Publish
3. Boilerplate

## Why?

When you're working across multiple projects, you'll often find yourself repeating simple things in more than one project. An example would be, parsing a date in your preferred way and formatting it. Most devs just copy the code from one project and use it in another as it's just a few lines of code. But the better approach would be to extract that code and put it in a common place so you can access it from any project. NPM is a ideal and ever-growing ecosystem and it's free to use. So publishing all your reusable code as npm packages will help you in the long run. 

_No matter how small the code is, be it one line or a thousand lines, publish it as a package so it can be easily consumed in more than one codebase._

Also, you get to become an **author** of a library. How cool is that! 😎

## Steps to Publish

Publishing usually is a simple process.

`code => test => publish => revise code => test => publish new version ...`

### Entry

Create a new directory and enter the following command from terminal.

```js
npm init
```

Enter meaningful name and appropriate details for your package. This will create the `package.json` for you. All NPM packages need `main` key. This defines the **entry point** to our library. By default this will be `index.js` but you can change it whatever you want your entry point to be.

_For Babel or bundle based libraries, the entry point will usually be in the build dir._

### Source

If you are writing a small library, you can put all your code into `index.js`. But more often, we will abstract our code and put it into separate files. So the ideal approach is to keep all your source code in `src` dir.

This is the most widely used and recommended setup for source code nowadays, although it varies from one library to other.
- **ES6** - [Babel](https://github.com/gotwarlost/istanbul)
- **Linting** - [ESLint](https://eslint.org/)
- **Code formatting** - Beautify/[Prettier](https://github.com/prettier/prettier)
- **Bundling** - [Webpack](https://webpack.js.org)

Most of you already know about these things, so I am going to leave it out for you to figure out. 

### Test

You need to have thorough tests to make sure your code works as expected. There are various testing setups. You can use whichever suits your need best. Although, widely used test setups are

- JavaScript Utility - [Mocha](https://mochajs.org/)
- React Library - [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme)
- Angular Library - [Karma](https://karma-runner.github.io/2.0/index.html) with [Jasmine](https://jasmine.github.io/)

... and much more

If you also need **code coverage**, _which I am a huge fan of_, _[Istanbul](https://github.com/gotwarlost/istanbul)_ is one of the best coverage tools for any JavaScript project. I absolutely love it.

### Publish

Once your code is thoroughly tested, it is ready to be published.

1. Create an account in [npmjs.com](https://www.npmjs.com).
2. Run this command from the terminal

```js
npm login
```

Enter your username and password. This will store the credentials so you don't have to enter it for every publish.

_Edit: Pl ensure using [npm's 2FA](https://docs.npmjs.com/getting-started/using-two-factor-authentication) to secure your packages from being hacked as mentioned by [Nick Taylor](https://dev.to/nickytonline) in the [comments](https://dev.to/nickytonline/comment/2fo1)._

3. Now to publish, run

```js
npm publish
```

This will publish your package to NPM registry. Once publish completes(in less than a minute), you can go check your package in the link `https://www.npmjs.com/~{username}/{package-name}`.

If you want to make changes to your package, you have to change the version number and publish again.

Remember to use npm commands `npm version patch`, `npm version minor` and `npm version major` to update the version automatically rather than manually updating them. These commands are based on [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning).


## Boilerplate

I have a few npm packages of my own and researched enough online on all the **best practices** for creating NPM packages and created a **boilerplate** specifically for this. It has everything pre-setup and you can **get started in seconds**. If you're looking to write JavaScript util packages, it might just be the boilerplate for you.

Link to Boilerplate - [npm-module-boilerplate](https://github.com/flexdinesh/npm-module-boilerplate)

You are amazing! Have a fantastic day! 🎉