<a href="#top" id="top">
  <img src="https://user-images.githubusercontent.com/441546/56710875-00e00e00-66dd-11e9-8d71-8cbfb70b5a01.png" style="max-width: 100%;">
</a>
<p align="center">
  <a href="https://www.npmjs.com/package/@darkobits/dot-dot-dot"><img src="https://img.shields.io/npm/v/@darkobits/dot-dot-dot.svg?style=flat-square"></a>
  <a href="https://github.com/darkobits/dot-dot-dot/actions"><img src="https://img.shields.io/endpoint?url=https://aws.frontlawn.net/ga-shields/darkobits/dot-dot-dot&style=flat-square"></a>
  <a href="https://www.codacy.com/app/darkobits/dot-dot-dot"><img src="https://img.shields.io/codacy/coverage/2d2325ceb82b4ea0bdda20478924d53b.svg?style=flat-square"></a>
  <a href="https://david-dm.org/darkobits/dot-dot-dot"><img src="https://img.shields.io/david/darkobits/dot-dot-dot.svg?style=flat-square"></a>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/conventional%20commits-1.0.0-FB5E85.svg?style=flat-square"></a>
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
  <img src="https://user-images.githubusercontent.com/441546/69777002-41ac7380-1153-11ea-85a4-88184f8c9975.png" style="max-width: 100%;">
</a>
