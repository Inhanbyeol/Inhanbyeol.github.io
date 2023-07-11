---
title: trimStart
categories: [Today I Learned, Javascript]
tags: [Javascript] # TAG names should always be lowercase
---

> 문자열 시작부분의 공백을 제거합니다. 또한 trimLeft()라는 별칭으로 호출이 가능합니다.
{: .prompt-info }

```js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
```