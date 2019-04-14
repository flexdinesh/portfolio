---
title: Don't build your portfolio with just React
published: true
description: Don't build your portfolio with just React. Use Gatsby.
tags: #webdev #javascript #gatsby #react
date: '2019-02-01'
---

This article is also cross-posted in —

DEV - [Don't build your portfolio with just React](https://dev.to/flexdinesh/dont-build-your-portfolio-with-just-react-11a9)

---

**TL;DR** - Use React along with [Gatsby](https://www.gatsbyjs.org/) or [Next](https://nextjs.org/) to build static public sites.

React is all the rage these days and IMHO developing websites feels a lot easier with React. Of course, you can use and favor other frameworks too but I'm gonna limit the context of this post to React affictionados.

# Why you should use React

- Component based
- Pre-configured (for most part) starter with [create-react-app](https://facebook.github.io/create-react-app/)
- Faster development
- React is AWESOME 🎉

# Why you shouldn't use just React

- DOM is constructed in the browser (client-side)
- SEO implications
- Higher [Time to Interactive (TTI)](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive)

Let's get a little more into why all these things happen.

**React loads the site into DOM after this line is invoked**.

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

What this means it, the whole DOM, styles and behavior of the site is initialized only after the `bundle.js` is loaded and executed.

**If you turn off JavaScript in your browser settings and open a React site, nothing will load and you will see only an empty page**.

Unfortunately that's how **search engines** look at your site during **indexing**. So if you create your site with just React, only your page title will be indexed and nothing else inside your React code will be indexed.

_Edit: Google executes JavaScript during indexing to a limited extent, meaning if you don't have content in first render or if render takes more than N secs, it skips the content. Also DuckDuckGo is becoming the de-facto search engine to a lot of folks in recent times and it's been my only search engine for more than a year now. And DuckDuckGo doesn't execute JavaScript during indexing. So **relying on search engines to execute JavaScript is not a safe bet**._

Other than SEO implications, loading your site without the DOM in the first load (paint) increases your TTI metric. If you could load the DOM in the first load before loading your scripts, you'll drastically improve the UX.

# SSR and Static Site Generation for the Rescue

> **SSR Websites** and **Static Websites** are two different things. SSR pages are rendered from a server on each request where as static pages are generated during build time. 

If you use frameworks like [Gatsby](https://www.gatsbyjs.org/) or [Next](https://nextjs.org/), you can either generate static sites or create SSR pages.

In other words, if you turn off your JavaScript and load these sites, the whole DOM will be loaded as the pages are already rendered.

Ideally, only event handlers and complementary data should be loaded and attached after the first render. 

# Gatsby or Next?

- If you are building a static public website, Gatsby will be the right tool.
- If you are building a website that has a login and a lot of server side logic, Next will be the right tool.

Of course there are a lot other options and reasons to choose your right tool but personally these two will be enough for most preliminary requirements.

Other points to argue
- You can create SSR pages with React but you will need to setup your server and everything manually. Next.js makes this whole process easier.
- Google claims that it executes JavaScript recently while indexing, but I tried and it didn't work for me. We're not sure of the nuances of it.

## Gatsby is ❤️

In other news, I'm totally smitten and unfathomably in love with [Gatsby](https://www.gatsbyjs.org/) ❤️

I migrated my [old portfolio](https://portfoliov2.dineshpandiyan.com) from React to Gatsby exactly for the reasons discussed in this post. This is my new portfolio in Gatsby - [Dinesh Pandiyan](https://dineshpandiyan.com).

Going forward, I'm planning to build all my side projects in Gatsby this year. I created a Gatsby starter boilerplate with added configurations over default Gatsby starter - [Gatsby Boilerplate](https://github.com/flexdinesh/gatsby-boilerplate).

My Gatsby based sites so far
- [Dinesh Pandiyan](https://dineshpandiyan.com)
- [tweetfancy.io](https://tweetfancy.io)
- Another pet project in WIP stage. I'll probably launch it in a month.

You are amazing! ✨