---
title: rny_string
categories: [Programmers, Lv.0]
tags: [Programmers]
---

> 문제의 **상세 정보**가 필요하거나 **직접 문제를 풀어보실 경우** [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181863){:target="_blank"}를 클릭해 주세요.
{: .prompt-tip }

## 문제 설명

> 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
{: .prompt-info }

```js
function solution(rny_string) {
    return [...rny_string].map((x) => x == "m" ? "rn" : x).join('');
}
```