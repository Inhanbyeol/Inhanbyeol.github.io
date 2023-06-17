---
title: undefined, null 차이점
categories: [Today I Learned, Javascript]
tags: [undefined, "null"] # TAG names should always be lowercase
---

> **null**과 **undefined**를 보이는 그대로 해석하면 ‘빈 값’과 ‘없는 값’을 의미하는 것처럼 보이지만 사실 큰 차이점이 있다.
{: .prompt-info }

> 개발자들의 의도적으로 비어있는 값을 만드는 경우 **null**을 사용한다
{: .prompt-tip }
> **undefined**는 개발자가 의도적으로 할당하기 위한 값이 아닌 자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값이다.
{: .prompt-tip}

## 공통점

- 둘다 각각의 타입명(**undefined**, **null**)의 값이 `유일하다.`
    + **undefined** 타입의 값은 undefined가 `유일하다.`
    + **null** 타입의 값은 null이 `유일하다.`

## undefined

> **undefined**는 변수가 생성되는 단계에서 메모리 공간을 확보하기 위해 변수를 초기화시 사용되는 자료형이다.
{: .prompt-info }

- 원시 자료형 `undefined`로 분류
- 아무 값도 할당받지 않은 상태
- `var, let` 변수는 암묵적으로 `undefined`로 초기화된다.

> **확보된 메모리 공간을 최초 할당이 이뤄질 때까지 빈 상태가 아닌**, 자바스크립트 엔진이 `undefined`로 **초기화 한다**<br>
> 따라서 변수를 선언한 이 후 값을 할당하지 않은 변수를 참조하면 `undefined`가 반환된다.<br>
{: .prompt-tip }  

```js
var a;
console.log(a); // undefined
console.log(typeof a); // undefined
```

### 선언과 정의

`undefined`를 직역하면 ‘정의되지 않은’이란 의미이다.<br>
자바스크립트 `undefined`에서 말하는 정의란 <u>변수의 값을 할당하여 변수의 실체를 명확히 하는 것</u>를 의미한다.<br>
자바스크립트의 경우 변수를 선언하면 암묵적으로 정의가 이뤄지기 때문에 선언과 정의의 구분이 모호하다.<br>
ECMAScript 사양에서 변수는 ‘선언한다.’라고 표현하고, 함수는 ‘정의한다.’라고 표현한다.<br>

### var, let 키워드와 undefined

- var 키워드로 선언된 변수는 실행 컨텍스트 객체에 등록과 동시에 초기화 단계도 진행한다.

> **초기화 단계** : 등록된 변수를 위한 **메모리 공간을 확보**하며, 이 단계에서 `undefined`로 초기화된다.
{: .prompt-tip }

- let 키워드로 선언된 변수는 실행 컨텍스트 객체에 등록되고 소스코드가 실행후 선언문을 만났을 때 초기화된다.

> 즉, let 변수 선언 후 선언문을 만나기 전에는 비어있는 값이다.
{: .prompt-tip }

## null
> **null**은 변수에 값이 없다는 것을 **의도적으로** 명시(의도적 부재)할 때 사용한다
{: .prompt-info }

- 원시 자료형 `null`로 분류
- `null`은 ‘비어있는, 존재하지 않는 값'을 의미한다.
- 자바스크립트는 대소문자를 구분하므로 `null`은 Null, NULL 등과는 다르다.
- 변수에 `null`을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미이다.

> 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미하며,<br>자바스크립트 엔진은 누구도 참조하지 않은 메모리 공간에 대해 [`가비지`](https://hanamon.kr/%ea%b0%80%eb%b9%84%ec%a7%80%ec%bb%ac%eb%a0%89%ec%85%98%ec%9d%b4%eb%9e%80/) 콜렉션을 수행할 것이다.
{: .prompt-tip }

- **typeof**로 자료형을 확인할 때 object(객체)를 반환하는데, `null`이 빈 참조를 나타내는 데 자주 사용된다.
- 원시 자료형으로 생각해도 되지만 엄밀히 말해서는 `null`은 객체이고 참조 자료형이다.

```js
var nullType = null;
console.log(typeof null); // object
```

