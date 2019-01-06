---
title: Render Browser Specific Content
published: true
description: Render browser specific components with a one-liner

tags: react, javascript, webdev, opensource
date: '2018-05-27'
---

![Browser Banner](https://image.ibb.co/c8WZ2d/browser_banner.png)
_**TL;DR** - You can render browser specific content in React with a one-liner._

Have you ever wanted to put up a banner for all your IE users and ask them to try your site in Chrome/Firefox?

With [RenderInBrowser](https://github.com/flexdinesh/react-render-in-browser) component you can **render content specific to browsers**.

As promised in my [post](https://dev.to/flexdinesh/i-re-wrote-my-portfolio-and-added-some-magic-22n7) a few weeks back, I've ported the code from my other project, wrote thorough tests and created a **standalone React library** to render content only in specified browsers.

The syntax is too simple.

If you want to render something only in Chrome,

```jsx
<RenderInBrowser only chrome>
  <div>Whoa! This super duper text line will be rendered only in Chrome!</div>
</RenderInBrowser>
```

If you want to render something in all browsers except IE,

```jsx
<RenderInBrowser except ie>
  <div>Darn, this stuff doesn't work in IE :(</div>
</RenderInBrowser>
```

This library is available as an [NPM package](https://www.npmjs.com/package/react-render-in-browser) and is still in beta stage (v0.2.0) 'coz I'd like to take feedback and improve on it before publishing **v1.0.0**.

Here's the link to the [GitHub repo](https://github.com/flexdinesh/react-render-in-browser).

If you find something that could be improved, pl drop a feedback note and I'd very much welcome it. **If you don't find anything that could be improved, you could still drop a _Hi_ and I'll _Hi_ you back :)**

You are amazing! Have a good day! ⚡️
