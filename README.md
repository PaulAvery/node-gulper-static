Passthrough gulper plugin
=========================

A basic [gulper](https://github.com/PaulAvery/node-gulper) plugin to simply pass through files like this:

``` js
var stat = require('gulper-static');
var gulper = new require('gulper')(config)

gulper.plugin(stat.js(glob1, base));
gulper.plugin(stat.css(glob2, base));
gulper.plugin(stat.assets(glob3, base));
```

This module exposes the `js`, `css` and `assets` functions which each take a `glob` and a `base` argument and return a gulper plugin.