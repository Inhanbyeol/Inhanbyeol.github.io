---
title: JSON.parse()와 JSON.stringify()
categories: [Today I Learned, Javascript]
tags: [JSON.parse, JSON.stringify] # TAG names should always be lowercase
---

## JSON.parse()

> JSON 문자열을 JavaScript 객체로 변환
{: .prompt-info }

```js
const str = `{
  "name": "홍길동",
  "age": 25,
  "married": false,
  "family": { "father": "홍판서", "mother": "춘섬" },
  "hobbies": ["독서", "도술"],
  "jobs": null
}`;

const obj = JSON.parse(str);

console.log(obj);

/* {
    name: "홍길동",
    age: 25,
    married: false,
    family: {
        father: "홍판서",
        mother: "춘섬"
    },
    hobbies: [
        "독서",
        "도술"
    ],
    jobs: null
} */
```

<br>

## JSON.stringify()

> JavaScript 객체를 JSON 문자열로 변환
{: .prompt-info }

```js
const obj = {
  name: "홍길동",
  age: 25,
  married: false,
  family: {
    father: "홍판서",
    mother: "춘섬",
  },
  hobbies: ["독서", "도술"],
  jobs: null,
};

const str = JSON.stringify(obj);

console.log(str);

// '{"name":"홍길동","age":25,"married":false,"family":{"father":"홍판서","mother":"춘섬"},"hobbies":["독서","도술"],"jobs":null}'
```