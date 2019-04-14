---
title: Deploy Gatsby sites to GitHub Pages
published: true
description: Deploy Gatsby sites to GitHub Pages - Tutorial
tags: #webdev #javascript #gatsby #react
date: '2019-01-23'
---

This article is also cross-posted in —

DEV - [Deploy Gatsby sites to GitHub Pages](https://dev.to/flexdinesh/deploy-gatsby-sites-to-github-pages-eed)

codeburst - [Deploy Gatsby sites to GitHub Pages](https://codeburst.io/deploy-gatsby-sites-to-github-pages-625a9978e7cd)

---

[Gatsby](https://www.gatsbyjs.org/) is all the rage now, thanks to the amazing team behind the fancy and easy-to-use framework. I'm not going to go into the details of why you **should use Gatsby** if you're **building a static website**. There are a ton of posts out there that say just that.

Here's an excellent article on why - [Why you should use GatsbyJS to build static sites](https://medium.freecodecamp.org/why-you-should-use-gatsbyjs-to-build-static-sites-4f90eb6d1a7b)

These are my top reasons

- Amazing Dev Experience
- Pre-baked optimizations
- Generated site is super fast
- Out of the box support for GraphQL

## Deploy Gatsby sites anywhere 

Since Gatsby generates static files, you can deploy it anywhere.
But the easiest and quickest option would be to deploy your site to [GitHub Pages](https://pages.github.com/).

### GitHub Pages

You can host static websites for free with GitHub Pages. You can have two types of websites hosted in GitHub Pages.

1. Personal Website - Repo name should be `username.github.io` and the site can be accessed at `https://username.github.io`
2. Project Website - Repo name can be anything and the site can be accessed at `https://username.github.io/repo-name`

All you gotta do is to push the static site to the repo with `index.html` at the root dir.

More info here - [GitHub Pages](https://pages.github.com/)

## Deploy Gatsby sites to GitHub Pages

Gatsby generates your static site when you run the command `gatsby build`.

Only catch here is that GitHub Pages expect your site files to be in the root dir but Gatsby generates the site files in a dir called `public`. So we cannot host the source code and the public files in the same repo. 

[gh-pages](https://www.npmjs.com/package/gh-pages) is a really nice package that helps you push static sites to a GitHub repo from anywhere.

### Steps

- `yarn add gh-pages --dev`
- Create a new dir `scripts` at project root and create a file `deploy-github.js` in `scripts` dir
- Add this code to `deploy-github.js`

```js
const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/flexdinesh/flexdinesh.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
```

- Add a new npm script `deploy:github` in `package.json`

```json
"deploy:github": "npm run build && node ./scripts/deploy-github"
```

- Run the script and your static site will be up and running in a few seconds

_Note: When you run the command, you will be asked to enter your GitHub creds in the command line before publish._

If you need further materials, you could take a look at the source code of my personal website [Dinesh Pandiyan - Portfolio](https://github.com/flexdinesh/portfolio). It is deployed in both Netlify and Github Pages.

If you're looking for a good Gatsby starter template, I maintain a boilerplate with my pre-baked web setup - [Gatsby Boilerplate](https://github.com/flexdinesh/gatsby-boilerplate). I usually fork this repo if I want to start with a new Gatsby site.

Happy Gatsbying! 🔥
