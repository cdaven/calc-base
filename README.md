# Basic template for TypeScript and SCSS with Semantic-UI and Pug

This template is intended for use for my own websites.

It contains npm scripts for building TypeScript, SASS/SCSS and Pug files,
and is based on Semantic-UI with jQuery and Lodash, and core-js for ES2015 compatibility.

Edit the files in the `src` folder, and the transpiled files will be created in the `dist` folder.

## Build

Build the project with this command,

    npm run build

And build only Pug files like so,

    npm run build:pug

You can also clear (and recreate) the dist folder with

    npm run clean

## Watch

Instead of building on-demand, you can start a watcher to build on every save,

    npm run watch

or,

    npm run watch:styles

## Re-build Semantic-UI

Semantic-UI can be customized in the semantic folder, and then rebuilt:

    npm run rebuild:semantic

## Requirements

This template works on both Windows and Linux.

- [NodeJS and npm](http://blog.teamtreehouse.com/install-node-js-npm-windows)

## Quick install

1. Clone this repository
2. Go to the folder
3. Run `npm install`
4. Run `npm install -g typescript gulp`

You probably have to manually install every package in devDependencies in package.json, unless you know how to do this automatically with npm install.
