---
templateKey: blog-post
title: What's the difference between Dependencies and Dev Dependencies?
date: 2020-06-22T15:14:00Z
description: 'There''s some major confusion around what are Dependencies are Dev Dependencies
  in a NPM package.json file. Let''s try to demystify that. '
featuredpost: true
featuredimage: static/img/packagejson.png
tags:
- Programming

---
First let's look at a sample package.json file
```Javascript
    {
      "name": "test-project",
      "version": "1.0.0",
      "description": "A Vue.js project",
      "main": "src/main.js",
      "private": true,
      "scripts": {
        "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
        "start": "npm run dev",
        "build": "node build/build.js"
      },
      "dependencies": {
        "vue": "^2.5.2"
      },
      "devDependencies": {
        "autoprefixer": "^7.1.2",
        "babel-core": "^6.22.1",
        "babel-eslint": "^8.2.1",
        "babel-helper-vue-jsx-merge-props": "^2.0.3",
        "babel-loader": "^7.1.1",
        "webpack": "^3.6.0",
        "webpack-dev-server": "^2.9.1",
        "webpack-merge": "^4.1.0"
      },
      "engines": {
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0"
      },
      "browserslist": [
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
      ]
    }
```

If you look at the above file you will see two types of dependencies listed :

dependencies and devDependencies.

A lot of developers are not aware that whether they should to put their project dependencies in Dev Dependencies or just Dependencies.

In general:

**Dev Dependencies** - should be all of the dependencies needed only if you will be working on that codebase (e.g. testing, typing, etc.). (Example: webpack-server, typescript, postcss-loader, Testing libraries etc).

**Dependencies** - All dependencies needed for the actual running of your project or that are supposed to end up in the final build files should be in dependencies. (Example: React, Angular, Lodash, etc)

But this may not hold true with most modern Web Framework CLI tools like `create-react-app`  because the end result is a static bundle. So in a sense, _all_ dependencies are "development dependencies", even React or libraries you use. They're used only at the build time.

One the other hand the distinction is meaningful for Node apps because they actually are deployed as runtime. So you might not want to deploy development dependencies.

Two practical cases where this come into play are if you just need to spin up a project locally to see how it runs or something, you can run `npm install --production` and it will install only your `dependencies`, not `devDependencies`.

Similarly, let's say someone is listing your package as a dependency for their own project. They will not actually be working on YOUR codebase so they don't need YOUR `devDependencies`, therefore when they `npm install` from their own project root, it will not install your `devDependencies`. The `devDependencies` only get installed when you run `npm install` (without the production flag) in that project's own root.

The end results is basically just faster install times and smaller `node_modules` folder when you skip `devDependencies`. Ultimately your bundle size will be the same.

So when in doubt, add it to dependency as that will reduce most server-side build errors and it doesn't impact bundle size anyways.

Until next time, adios!