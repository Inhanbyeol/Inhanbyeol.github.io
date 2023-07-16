---
title: Object.isExtensible()
categories: [Today I Learned, Javascript]
tags: [Javascript] # TAG names should always be lowercase
---

> 객체가 확장 가능한지(객체에 새 속성을 추가할 수 있는지 여부)를 결정합니다.
{: .prompt-info }

```js
const object1 = {};

console.log(Object.isExtensible(object1));
// Expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// Expected output: false

```