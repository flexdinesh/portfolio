---
title: I Created My Portfolio with React and Some Magic
published: true
description: Awesome Portfolio written in React
tags: css, react, javascript, webdev
date: '2018-04-01'
---

This article is also cross-posted in —

DEV - [I Created My Portfolio with React and Some Magic](https://dev.to/flexdinesh/i-re-wrote-my-portfolio-and-added-some-magic-22n7)

HackerNoon - [I Created My Portfolio with React and Some Magic](https://hackernoon.com/i-created-my-portfolio-with-react-and-some-magic-fda27ba06a06)

codeburst - [I Created My Portfolio with React and Some Magic](https://codeburst.io/i-created-my-portfolio-with-react-and-some-magic-fe661302ce4c)

---

![Dinesh Pandiyan - Dev Landing Page](https://image.ibb.co/erwyaS/portfolio.png)

_**TL;DR** - I re-wrote my [portfolio](https://flexdinesh.github.io) in React and added some niche tricks to make it look all shiny and rad. Everytime you refresh the page, a new look will be loaded._

This whole write-up is based off this site - [Dinesh Pandiyan | Full Stack Dev](https://flexdinesh.github.io/)

A few weeks back I created [Dev Landing Page](https://github.com/flexdinesh/dev-landing-page) and wrote a [blog post](https://dev.to/flexdinesh/create-your-developer-landing-page-with-github-pages---42jk) about it. In less than a week, the repo got over **150 stars** and got featured in various articles. I guess people liked it. I created my portfolio on top of it.

I am no UI expert but in recent times I've took a liking towards **responsive design**, **animations**, **flexbox**, and other fancy CSS features. So I thought I'd take my UI skills for a spin and build my portfolio along the way. While looking for inspiration, I stumbled across [Ali Spittel's](https://dev.to/aspittel) post [How I Re-Wrote my Portfolio Site](https://dev.to/aspittel/how-i-re-wrote-my-portfolio-site-cg). [Her portfolio](https://www.alispit.tel) looks pretty darn awesome and gives you the _'wow'_ feel. I, then, embarked on a journey to build something that gives a similar vibe and a **magical feel**.

I wanted to build everything **from scratch without the help of any UI libraries/frameworks**, except **React** though, because I love how React simplifies the whole web development process. I had so much fun building every single piece of my portfolio alongside learning so many new things. I'm gonna list down a few of my favorite parts of the site and what I learnt from them.

- Flexbox Layout
- Theme and React's context API
- Responsive Design
- Parallax Background
- Animations
- Browser Specific Code

## Flexbox Layout

The whole website is laid out with **Flexbox**.

> Flexbox makes putting things in place so much easier

CSS Grid and Flexbox have been the talk of the town lately. Still the support for CSS Grid is not very good but almost all the _de-facto_ browsers today support flexbox. So I think it's pretty safe to implement the layout with Flexbox rather than Grid.

Flexbox is all about containers and children. I used this [flex-cheatsheet](http://yoksel.github.io/flex-cheatsheet/) as a reference while building the layout and things seem pretty straight forward.

One thing what bugs me about Flexbox is the `flex` property. I have used,

`flex: 1 0 auto;`

`flex: auto;`

`flex: 1;`

in a lot of places in the site but still couldn't figure out how it exactly behaves. Most of the times, it's a trial and error usage. Need to pick up on these properties and maybe I'll write a post about it soon.

## Theme and React's Context API

While deciding on the theme for the site, I kept _juggling_ between two themes constantly. One day I'd have one, then the other day I'll replace my Sass theme definitions with the other theme. Turns out, I couldn't pick one and wanted to have them both.

**Then a crazy idea popped in my head** - _Why not have both and alternate between them?_

I explored on ways to do it with React and settled on **React's Context API**. We could easily argue to have Redux instead, but I have worked way too much with Redux and wanted to get my hands dirty with **React without Redux**. Context API is a bit of a _non-ideal way to do things_ but it got the job done for me and I'm happy with it. I will probably rewrite this with React 16.3's new Context API soon.

After playing around for a while, I ended up with **16 awesome themes** - **10 light themes** and **6 dark themes**.

Of all these, **1 of my 3 favorite themes will be applied when the site loads**. And when you click the **magic wand**, **1 of the 16 themes will be applied**.

Try and see if you could tell all 16 themes apart. Trust me, it's not that easy : )

**_Everytime you refresh the page, a new look will be loaded. I gotta say, theme magic is my most favorite feature of the site_** ✨

## Responsive Design

**Sass** could be a powerful tool if you know how to use it right. I recently started exploring **Sass mixins** and it helped me design and refactor responsive layouts without breaking a sweat.

I have come up with standard, re-usable sass breakpoint mixins. You can find the entire mixin code here - [Sass breakpoint mixins](https://github.com/flexdinesh/flexdinesh.github.io/blob/dev/src/styles/_breakpoints.scss)

Writing media queries are a lot easier with these mixins.

```scss
.content-grid {
  margin: 0 auto;
  width: calc(100% - 5rem);

  @include breakpoint-medium-up {
    width: calc(100% - 5rem);
  }

  @include breakpoint-large-up {
    width: calc(100% - 10rem);
  }

  @include breakpoint-xlarge-up {
    width: calc(100% - 20rem);
  }
}
```

## Parallax Background

I've seen _parallax_ tagged posts and codepens quite a bit but never tried my hand at it. I got inspired from one of the codepens and ended up with my own version - [Parallax Star background](https://codepen.io/flexdinesh/full/GxNazP/)

This is not exactly _'Parallax'_ but more or less serves the purpose and creates a snowfall effect in the background.

## Animations

I added a few animations to the site as well. You'll find the **Scroll to next page** arrow bouncing up and down. You'll also find the **Social Icons** _(GitHub, Twitter, LinkedIn, etc)_ bounce when you hover over them.

Somehow, bounce seems to be my favorite animation. _'Parallax snowfall'_ is also an animation but most of it is inspired work.

## Browser Specific Code

While working with animations, I figured out that **Safari does not support smooth scroll** and **FireFox has glitches rendering the snowfall**. So I needed browser specific behavior and ended up creating a react component that renders code for specific browsers.

You can find the code for the component here - [Browser Component](https://github.com/flexdinesh/flexdinesh.github.io/tree/dev/src/components/Browser). I'm thinking about writing thorough test cases and open-sourcing this component sometime soon.

It's pretty neat to use the component like this.

```html
<Browser except firefox chrome mobile>
  <span>All the magic tricks in this site work best in <b>Chrome!</b></span>
</Browser>
<Browser only firefox>
  <span>Magic background is disabled in FireFox. Try in <b>Chrome!</b></span>
</Browser>
```

## Site is Up and Running

I recently re-wrote my portfolio with GatsbyJS - [Portfolio v3](https://dineshpandiyan.com)
I moved the portfolio mentioned in this post here - [Portfolio v2](https://portfoliov2.dineshpandiyan.com/)

Link to source code - [React Codebase](https://github.com/flexdinesh/flexdinesh.github.io/tree/dev)

I'm still tweaking here and there. The portfolio section clearly needs an upgrade. But most of the design part is done. Feel free to drop a comment on what you think about the site and if there are things that could be improved.

You are amazing! Have a good day! ✨
