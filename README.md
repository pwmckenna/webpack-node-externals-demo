# Webpack node external demo

This demos a simple configuration that tells webpack to treat external.js as an external dependency. `internal.js` is bundled in, and will output `index.js` when logging `__filename`, however `external.js` is not, and will correctly report `external.js` as its `__filename`.

```bs
externals ❯ npm start

> externals@1.0.0 start /Users/pwmckenna/git/externals
> webpack && node dist

Hash: b8828608130014238bb3
Version: webpack 1.12.9
Time: 42ms
   Asset     Size  Chunks             Chunk Names
index.js  1.78 kB       0  [emitted]  main
   [0] ./index.js 45 bytes {0} [built]
   [1] ./internal.js 47 bytes {0} [built]
    + 1 hidden modules
internal /index.js /
external /Users/pwmckenna/git/externals/external.js /Users/pwmckenna/git/externals
```