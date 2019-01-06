---
title: Upgrade to Webpack 4
published: true
description: Upgrading your project from Webpack 3 to Webpack 4
tags: webdev, react, javascript, tutorial
date: '2018-03-12'
---

![Upgrade to Webpack 4](https://image.ibb.co/n6oUYS/webpack_upgrade.png)

**Webpack 4** _(codename Legato)_ was released two weeks back. And it is packed with a lot of shiny features. Unlike Webpack 3, which was not a major upgrade over its predecessor, Webpack 4 has a string of compelling features.

Major changes to look out for -

**1. Reduced Build Time**
The build time has gone down massively (more than 60%)

**2. Zero configuration**
You can now start using webpack with any project without any config file (introducing _mode_)

I recently upgraded my [React-Redux Boilerplate](https://github.com/flexdinesh/react-redux-boilerplate) to Webpack 4. There are no clear docs out there for migration yet, so it took me quite some time and struggle to complete the upgrade. I am writing down everything I figured so it can help anyone who wants to upgrade.

The following are the config changes that need to be done.

- Mode
- Plugins
- Dependencies

## Mode

Webpack 4 has two modes - _development_ and _production_.

Previously we passed the flag `-p` to the webpack command to run a production build. With Webpack 4, you should always pass in `mode` option. You have two ways to pass in mode,

### 1. Pass through npm script

In your `package.json` -

```js
"build": "webpack --config config/webpack.dev.config.js --mode development"
"build:prod": "webpack --config config/webpack.prod.config.js --mode production"
```

### 2. Pass through config file

In your `webpack.dev.config.js`

```js
mode: 'development'
```

In your `webpack.prod.config.js`

```js
mode: 'production'
```

## Plugins

The following plugins have been removed from Webpack 4 which were extensively used in previous versions.

- NoEmitOnErrorsPlugin
- ModuleConcatenationPlugin
- NamedModulesPlugin
- CommonsChunkPlugin

Now instead, the configuration of these plugins should go inside the key `optimization` in the `config file` with their corresponding options.

This snippet might give you more info

```js
plugins: [
    // new webpack.NamedModulesPlugin(), => not used like this anymore
    // new webpack.NoEmitOnErrorsPlugin(), => not used like this anymore
    // new webpack.optimize.CommonsChunkPlugin({ => not used like this anymore
        // name: 'vendor',
        // children: true,
        // minChunks: 2,
        // async: true,
    // }),
    // new webpack.optimize.ModuleConcatenationPlugin(), => not used like this anymore
],

optimization: {
    namedModules: true, // NamedModulesPlugin()
    splitChunks: { // CommonsChunkPlugin()
        name: 'vendor',
        minChunks: 2
    },
    noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    concatenateModules: true //ModuleConcatenationPlugin
}
```

## Dependencies

If you're using dependencies like `webpack-hot-middleware` and `image-webpack-loader`, make sure you upgrade them as well. I ran into a weird issue with `webpack-hot-middleware` but once I upgraded it to the latest version, it got resolved automatically.

You can refer to this [commit](https://github.com/flexdinesh/react-redux-boilerplate/commit/69dc839ad84c37b170e4c3d6f1f8ecb735fc2791) in [React-Redux Boilerplate](https://github.com/flexdinesh/react-redux-boilerplate) for reference.

Webpack 4 is great in so many ways. But the lack of docs for upgrade is a bummer. But then, we're all amazing problem solvers, so we don't mind.

If you're planning to upgrade to Webpack 4, don't think twice, your dev experience will definitely multifold. God Speed!

Have a nice day! ✨
