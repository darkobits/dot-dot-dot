<a href="#top" id="top">
  <img src="https://user-images.githubusercontent.com/441546/102313801-23fca880-3f26-11eb-962b-ecab387c78d0.png" style="max-width: 100%;">
</a>
<p align="center">
  <a href="https://www.npmjs.com/package/@darkobits/dot-dot-dot"><img src="https://img.shields.io/npm/v/@darkobits/dot-dot-dot.svg?style=flat-square"></a>
  <a href="https://travis-ci.com/darkobits/dot-dot-dot"><img src="https://img.shields.io/travis/com/darkobits/dot-dot-dot/master?style=flat-square"></a>
  <a href="https://www.codacy.com/app/darkobits/dot-dot-dot"><img src="https://img.shields.io/codacy/coverage/2d2325ceb82b4ea0bdda20478924d53b.svg?style=flat-square"></a>
  <a href="https://david-dm.org/darkobits/dot-dot-dot"><img src="https://img.shields.io/david/darkobits/dot-dot-dot.svg?style=flat-square"></a>
  <a href="https://github.com/conventional-changelog/standard-version"><img src="https://img.shields.io/badge/conventional%20commits-1.0.0-027dc6.svg?style=flat-square"></a>
</p>

Get a random loading message.

## Install

```
npm i @darkobits/dot-dot-dot
```

## Use

This package's default export is a function that returns a random message each time it is called.

```ts
import getMessage from '@darkobits/dot-dot-dot';

getMessage() //=> 'Reticulating splines...'
```

### `getMessageEvery`

This package additionally exports a function, `getMessageEvery`, which accepts an interval and returns a function that, when invoked, will return a random message that updates every `interval` milliseconds.

```ts
import {getMessageEvery} from '@darkobits/dot-dot-dot';

const getMessageEveryTenSeconds = getMessageEvery(10000);

// T = 0ms
getMessageEveryTenSeconds(); // => 'Reticulating splines...';

// T = 1000ms
getMessageEveryTenSeconds(); // => 'Reticulating splines...';

// T = 1100ms
getMessageEveryTenSeconds(); // => 'Gathering particle sources...';
```

<a href="#top">
  <img src="https://user-images.githubusercontent.com/441546/102314102-b56c1a80-3f26-11eb-9331-bdeb0f958c94.png" style="max-width: 100%;">
</a>
