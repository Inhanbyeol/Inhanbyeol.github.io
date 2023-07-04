---
title: var, let, const
categories: [Today I Learned, Javascript]
tags: [Javascript] # TAG names should always be lowercase
---

## 변수 선언 방식
---

### var

> 중복 변수선언을 진행하여도, **이전에 선언된 변수를 무시하고** 새로 선언하는 방식으로, 다소 유동적
{: .prompt-tip }
> **구형 선언 방식**으로써 변수의 변형을 방지하고자 거의 사용하지 않는 편
{: .prompt-danger }

```js
var a = "test";
console.log(a); //test

var a = "user";
console.log(a); //user
```
<br>

### let
> var 선언 방식과는 다르게 **중복 변수선언 불가**하여 선언 시 오류 발생, 재할당 가능
{: .prompt-tip }
> 변수의 값을 **재할당이 필요한 경우**에 사용
{: .prompt-info }

```js
let a = 'test'
console.log(a) //test

a = 'user'
console.log(a) //user
```
```js
let a = 'user'
console.log(a) //error : Identifier 'a' has already been declared
```
<br>
### const
> **중복 변수선언 불가**하여 선언 시 오류 발생, **재할당 불가**
{: .prompt-tip }
> 최초 할당 후 재할당이 불필요한 경우에만 사용
{: .prompt-info }

```js
let a = 'test'

console.log(a) //test

---
let a = 'user'
console.log(a) //error : Identifier 'a' has already been declared

---
a = 'user'
console.log(a) //Assignment to constant variable

```

<br>

## var, let, const 차이
---
> **let, const**는 ES6 이후 스펙에서 새롭게 등장한 변수이다.
{: .prompt-tip}
> ES6 이전 브라우저 배포용 코드같은 경우는 아직도 **var**만 사용되는 경우도 있다고 한다.
{: .prompt-tip}

### 우선 순위
1. const
2. let
3. var

### 값 변경 가능 유무
`var`와 `let`을 값이 선언된 이후에도 값을 변경할 수 있지만, `const`는 생성할 때 선언된 초기값을 변경할 수 없습니다.

### 스코프 범위
`var`은 함수 스코프를 가지지만, `let`과 `const` 변수는 블록 스코프를 가지게 됩니다.

### 호이스팅 가능 유무
`var`는 호이스팅이 가능하지만, `let`과 `const`는 호이스팅이 불가능합니다.
