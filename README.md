grunt-citare-scriptum
================

> A simple grunt task to generate a project's documentation using [citare-scriptum](http://druide.github.io/citare-scriptum/)

[![Build Status](https://travis-ci.org/naganowl/grunt-citare-scriptum.png?branch=master)](https://travis-ci.org/naganowl/grunt-citare-scriptum)

This is pretty much [grunt-groc](https://github.com/jdcataldo/grunt-groc), with some variables/strings referencing `groc` renamed to `citare-scriptum`.

### Usage
Install this plugin with the following command:

```js
npm install grunt-citare-scriptum --save-dev
```

Load the plugin in your Gruntfile.js:

```js
grunt.loadNpmTasks('grunt-citare-scriptum');
```

Running `grunt citare-scriptum:javascript` (or `grunt citare-scriptum` since citare-scriptum is a multitask) will generate documentation for the specified files.

```js
// Project configuration.
grunt.initConfig({
  citare-scriptum: {
    javascript: [
      "tasks/*.js", "README.md"
    ],
    options: {
      "out": "doc/"
    }
  }
});
```

See [citare-scriptum's cli](http://druide.github.io/citare-scriptum/lib/cli.html) for all available options
