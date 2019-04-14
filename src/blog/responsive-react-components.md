---
title: Responsive React Components
published: true
description: Render viewport specific components with a one-liner
tags: react, javascript, webdev, npm
date: '2018-11-20'
---

This article is also cross-posted in —

DEV - [Introducing Responsive React Components](https://dev.to/flexdinesh/introducing-responsive-react-components--1a6a)

HackerNoon - [Introducing Responsive React Components](https://hackernoon.com/introducing-responsive-react-components-f6cd14976570)

codeburst - [Introducing Responsive React Components](https://codeburst.io/introducing-responsive-react-components-93524b02601e)

---

![Responsive React Components](https://image.ibb.co/hXCL70/responsive-react-banner.png)

**TL;DR** - _You can render viewport specific components in React with a one-liner_

React is awesome and the whole world agrees to it unanimously. Development is a whole lot faster and easier when we look at everything as components. Since everything is JavaScript driven, **React renders only the code that is necessary based on application's state**. It doesn't matter if you have over a thousand components and tens of thousands of lines of code. **If you [lazy load](https://medium.freecodecamp.org/how-to-use-react-lazy-and-suspense-for-components-lazy-loading-8d420ecac58) your components, you load only what's necessary for the user and I think that is the biggest win with using React**.

That being said, have you ever wondered what happens when you write media queries in your React codebase?

**You render elements that's not supposed to be in a particular viewport and hide it using css**.

In this example

```jsx
import React from 'react'
import './Example.style.scss'

const Example = () => {
  return (
    <div className="example">
      <div className="mobile-only">I'm a fancy mobile div</div>
      <div className="desktop-only">I'm a heavy desktop div</div>
    </div>
  )
}
```

`Example.style.scss` file

```scss
.example {
  .mobile-only {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .desktop-only {
    @media (max-width: 767px) {
      display: none;
    }
  }
}
```

When `Example` component renders, **both** `.mobile-only` and `.desktop-only` elements **will be rendered** in the DOM but `.mobile-only` div will be hidden in bigger viewports and `.desktop-only` div will be hidden in smaller viewports with css `display: none`.

This is okay if this is small. But in one of the projects I worked, we had a heavy desktop menu and a heavy mobile menu both rendered in all the viewports. **Just the `Menu` alone should be around `20Kb` in size** each and we easily had an unwanted `20Kb` being loaded into the browser for each user. If you have more viewport specific elements, this size is going to keep increasing.

## Introducing React Socks

[React Socks](https://github.com/flexdinesh/react-socks) is a **minimal React library** to **render components based on viewport**.

Say goodbye to media-queries. Here's how you can render viewport specific components with an uber-cool syntax.

```jsx
const Example = () => {
  return (
    <Breakpoint small down>
      <MyAwesomeMobileMenu>
        This component will render only in mobile devices
      </MyAwesomeMobileMenu>
    </Breakpoint>
  )
}
```

```jsx
const Example = () => {
  return (
    <div>
      <Breakpoint small down>
        <div>I will render only in mobile devices</div>
      </Breakpoint>

      <Breakpoint medium only>
        <div>I will render only in tablets (iPad, etc...)</div>
      </Breakpoint>

      <Breakpoint large up>
        <div>I will render in laptops, desktops and everything bigger</div>
      </Breakpoint>
    </div>
  )
}
```

And that's not just it. **You can specify your own breakpoints** (as many as you want **wow!**) and use them **according to your project needs**. Also, you will have to `setDefaultBreakpoints` only once in your project 😎

```jsx
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 },
])
```

These are my favourite breakpoints

```jsx
setDefaultBreakpoints([{ cats: 0 }, { dinosaurs: 900 }])

<Breakpoint cats only>
  Only cats can render me 🐈
</Breakpoint>
```

#### Reasons why you should use [React Socks](https://github.com/flexdinesh/react-socks)

- **Render viewport specific** components without hassle
- You can define your **own breakpoints** (Eg. xs, ipad, bigmonitors) and use them
- You can **improve your app performance** if you lazy load your viewport specific components
- Simpler and sweeter **syntax** for ease of use

The library has been published to [npm](https://www.npmjs.com/package/react-socks) and is in alpha version. I'd love to get your feedback and improve it before releasing the first stable version.

_Edit: The first stable version has been released on Dec 9, 2018 with performance improvements and SSR support._ 🎉

If you're wondering **why the name React Socks** 🤷‍♂️

**[React Socks](https://github.com/flexdinesh/react-socks)** wraps your components comfortably to prevent unnecessary render in various viewports, just like how you wrap your feet with socks to prevent cold feet 🎉

Let's put some fancy [React Socks](https://github.com/flexdinesh/react-socks) on and wrap all the components 🔥

You are amazing! Have a great day! ⚡️
