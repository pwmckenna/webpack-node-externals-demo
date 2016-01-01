# Webpack node external demo

This demos a simple configuration that tells webpack to treat `external.js` as an external dependency (load dynamically rather than bundling via webpack).

- `internal.js` is bundled in, and will output `index.js` when logging `__filename`
- `external.js` is set as an external commonjs dependency, and will correctly report `external.js` as its `__filename`.

```bash
❯ npm start

> externals@1.0.0 start /Users/pwmckenna/git/externals
> webpack && node dist

   Asset     Size  Chunks             Chunk Names
index.js  1.87 kB       0  [emitted]  main
   [0] ./index.js 45 bytes {0} [built]
   [1] ./internal.js 134 bytes {0} [built]
    + 1 hidden modules

__internal__
__filename /index.js
__dirname /


__external__
__filename /Users/pwmckenna/git/externals/external.js
__dirname /Users/pwmckenna/git/externals
```

__Note__: `external.js` was not loaded by webpack, but was still executed.

# Gotta see it to believe it?

`npm install && npm start`

This will just run webpack then the bundled file, which should print the output from above.

# Path resolution

It is way simpler if you're requiring something from `node_modules`...this example builds into the dist folder, so the relative path is different. If you're requiring something like `react`, you don't need relative paths, so your config will look like:

```js
  ...
  externals: {
    'react': 'commonjs react'
  }
  ...
```
