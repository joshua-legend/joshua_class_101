---
title: 'ZeroCho Typescript 101 Grammar-1'
date: '2022-10-27'
chips: 'TS, 초심, 기본'
---

# 타입스크립트 기본문법

---
> 🎯 **몰랐던 내용들만 정리**

```typescript
// Array 
const arr:Array<string> = ["엄","준","식"];

// Tuple
const tuple:[boolean,boolean,string] = [false,true,"엄준식"];

// True
const True:true = true;

// !
const head =  document.querySelector("#head")!;
```
- 🎯 **( number | string ) 이것을 파이프라고 한다...**
- 🎯 **! 이것은 undefined 없앰 But 비추! 안정성 보장 안됨**

> 🎯 **type, as const, typeof , keyof**
```typescript
type World = "world" | "hell"; // 상수 만들때 유용할 듯
type Greeting = `hello ${World}`
const worldGreeting:Greeting = 'hello world'

console.log(typeof "Hello world"); // string,
let s = "hello";
let n:typeof s;

const obj = {a:'123',b:'hello',c:'world'} as const;
typeof obj

type Point = { x: number; y: number };
type P = keyof Point;
const a:P = "x";

type Key = keyof typeof obj; // "a" | "b" | "c"
type Value = typeof obj[keyof typeof obj] //"123" | "hello" | "world"
```
- as const는 타입추론이 아님
- as const는 상수화하는 것
- typeof "abc" === string
- keyof {a:123,b:123} === //"a","b"
