---
title: Cache Busting a React App
published: true
description: A simple approach to cache busting in a React application
tags: #react #javascript #webdev #browser
date: '2019-04-14'
---

This article is also cross-posted in —

DEV - [Cache Busting a React App](https://dev.to/flexdinesh/cache-busting-a-react-app-22lk)

---

_**TL;DR** - [SemVer](https://docs.npmjs.com/about-semantic-versioning) your app and generate a `meta.json` file on each build that won't be cached by the browser. Invalidate cache and hard reload the app when there's a version mismatch._

**_Note: The examples and explanations in this post are React based. But the strategy will work with any web application/framework._**

As great as caching is — cache invalidation has been a struggle for a long time now. **Invalidating** the **cache** of a web app that's loaded in the browser **is hard**. But **invalidating** the **cache** of a web app that's saved to the **home screen** is **even harder**. 

A quick intro to caching —

**Server caching:** Web servers cache the resources when they are requested for the first time. Second time onwards, the resources are served from the server cache. There's a lot more to this — CDN, origin servers, edge servers, etc but we'll not go into all that. Invalidating server cache is quite straight forward as we have control over our server and on each new deploy, we could either automatically or manually clear the old cache.

**Browser caching:** Browsers also cache the resources in their own way. When a site is loaded for the first time in the user's browser, the browser decides to cache some resources (mostly assets like images, js and css) locally and the next time the user visits the same site, the browser serves the resources from the local cache. Since we don't have control over the user's browser, clearing cache in the user's browser has always been a bit of a struggle in the past. With cache headers and with build tools like webpack generating unique chunks on each build, it's a becoming a bit easier to manage, but still, it's not without pitfalls.

Here are some of the gotchas with browser caching —
1. **Browsers** tend to **ignore cache validation** some times if the site is refreshed in the **same tab** — if the user pins the tab, there's a good chance the site will be loaded from browser cache even if the server cache is cleared. 
2. If your app is registering a **service-worker**, then the service worker **cache** will be **invalidated** only if the user opens the site in a **new tab**. The user will be stuck with the service worker cache forever if the tab is never closed.
3. If the user **adds** the site to **home screen** in mobile/tablet, then the browser **cache** will be **invalidated** only if the user explicitly **quits the app** — it's almost the same as having the same tab open in the browser. I know people who don't quit their home screen apps for months.


Ideally, caching helps to load the site faster. Disabling cache is not the answer. It's also not reliable as you cannot control the behavior of your user's browser. We want to figure out a way to clear the browser or service worker cache every time a new version of our app is deployed to the server.

A simple yet effective approach

- [SemVer](https://docs.npmjs.com/about-semantic-versioning) your deploys
- Bundle the app version into the app
- Generate a `meta.json` file with the app version on each build
- Fetch `meta.json` on load and compare versions
- Force clear cache and hard reload when there's a version mismatch

## [SemVer](https://docs.npmjs.com/about-semantic-versioning) your deploys

Version all your deploys with [SemVer](https://docs.npmjs.com/about-semantic-versioning). I personally use these three npm commands that automatically increments the package version and creates a git commit along with a corresponding version tag.

- `npm version patch` — _for releases with only bug fixes_
- `npm version minor` — _for releases with new features w/ or w/o bug fixes_
- `npm version major` — _for major releases or breaking features_

Remember to push your commit with `--tag` attribute — `git push origin master --tags`

## Bundle the app version into the app

Parse the package version during webpack build (or relevant build tool) and set a global variable in the app so you can conveniently check the version in the browser console as well as use this to compare with the latest version.

```js
import packageJson from '{root-dir}/package.json';
global.appVersion = packageJson.version;
```

Once this is set, you will be able to check the app version in the browser console by typing `appVersion`.

## Generate a `meta.json` file with the app version on each build

Run a script to generate a `meta.json` file in the `public` dir of your app. 

Add a `prebuild` npm script that will generate the `meta.json` file before each `build`.

```js
/* package.json */

{
    "scripts": {
        "generate-build-version": "node generate-build-version",
        "prebuild": "npm run generate-build-version",
        // other scripts
     }
}
```

```js
/* generate-build-version.js */

const fs = require('fs');
const packageJson = require('./package.json');

const appVersion = packageJson.version;

const jsonData = {
  version: appVersion
};

var jsonContent = JSON.stringify(jsonData);

fs.writeFile('./public/meta.json', jsonContent, 'utf8', function(err) {
  if (err) {
    console.log('An error occured while writing JSON Object to meta.json');
    return console.log(err);
  }

  console.log('meta.json file has been saved with latest version number');
});
```

After each build, once you deploy the app, `meta.json` can be accessed using the path `/meta.json` and you can fetch the json like a REST endpoint. It won't be cached by the browser as browsers don't cache XHR requests. So you will always get the latest `meta.json` file even if your bundle files are cached.

So if the `appVersion` in your bundle file is less than the `version` in `meta.json`, then we know that the **browser cache is stale and we will need to invalidate it**.

You can use this script to compare semantic versions —

```js
// version from `meta.json` - first param
// version in bundle file - second param
const semverGreaterThan = (versionA, versionB) => {
  const versionsA = versionA.split(/\./g);

  const versionsB = versionB.split(/\./g);
  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());

    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};
```

You can also find this code in my [GitHub example](https://github.com/flexdinesh/cache-busting-example/blob/ad03c264e2f52c71609726104e38ea3593520e07/src/CacheBuster.js#L6)

## Fetch `meta.json` on load and compare versions

When the `App` is mounted, fetch `meta.json` and compare the current version with the latest version in the server.

When there is a **version mismatch** => force **clear cache** and hard reload
When the versions are the same => Render the rest of the app

I have built a `CacheBuster` component that will force clear cache and reload the site. The logic will work for most of the sites but can be tweaked for custom cases depending on the applications.

```jsx
/* CacheBuster component */
import packageJson from '../package.json';
global.appVersion = packageJson.version;

const semverGreaterThan = (versionA, versionB) => {
    // code from above snippet goes here
}

export default class CacheBuster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLatestVersion: false,
      refreshCacheAndReload: () => {
        console.log('Clearing cache and hard reloading...')
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(function(names) {
            for (let name of names) caches.delete(name);
          });
        }
        // delete browser cache and hard reload
        window.location.reload(true);
      }
    };
  }

  componentDidMount() {
    fetch('/meta.json')
      .then((response) => response.json())
      .then((meta) => {
        const latestVersion = meta.version;
        const currentVersion = global.appVersion;

        const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);
        if (shouldForceRefresh) {
          console.log(`We have a new version - ${latestVersion}. Should force refresh`);
          this.setState({ loading: false, isLatestVersion: false });
        } else {
          console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
          this.setState({ loading: false, isLatestVersion: true });
        }
      });
  }

  render() {
    const { loading, isLatestVersion, refreshCacheAndReload } = this.state;
    return this.props.children({ loading, isLatestVersion, refreshCacheAndReload });
  }
}
```

And we can use this `CacheBuster` component to control the render in `App` component

```jsx
/* App component */
class App extends Component {
  render() {
    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            // You can decide how and when you want to force reload
            refreshCacheAndReload();
          }

          return (
            <div className="App">
              <header className="App-header">
                <h1>Cache Busting - Example</h1>
                <p>
                  Bundle version - <code>v{global.appVersion}</code>
                </p>
              </header>
            </div>
          );
        }}
      </CacheBuster>
    );
  }
}
```

You can also find the code for both these components here —

CacheBuster - [CacheBuster.js](https://github.com/flexdinesh/cache-busting-example/blob/master/src/CacheBuster.js)

App - [App.js](https://github.com/flexdinesh/cache-busting-example/blob/master/src/App.js)

## Force clear cache and hard reload when there's a version mismatch

Every time the app is loaded, we check for the latest version. Depending on whether the app version is stale or not, we can decide to clear cache in different ways.

For instance,

- You can hard-reload before rendering the app
- You can show a modal/popup asking the user to click a button and trigger a hard-reload
- You can hard-reload when the app is idle
- You can hard-reload after a few seconds with `setTimeout()`

You can find the entire code from this post with a working example in this repo — [cache-busting-example](https://github.com/flexdinesh/cache-busting-example)

That's all folks. If you have any feedback for this approach (good and bad), do let me know in the comments.

Cache busting is fun. 🎉