---
title: startsWith
categories: [Today I Learned, Javascript]
tags: [Javascript] # TAG names should always be lowercase
---

> 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환합니다.
{: .prompt-info }

```js
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false

```