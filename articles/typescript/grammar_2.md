---
title: 'ZeroCho Typescript 101 Grammar-1'
date: '2022-10-27'
chips: 'TS, 초심, 기본'
---

# Type 과 Interface 그것이 문제로다.

---
> 🎯 **intersection**
```typescript
    type Animal = {breath:true};
    type Mammal = {breed:true} & Animal;
    type Human = {speak:true} & Mammal;
    const ummjunsik:Human = {breath,breed,speak}
```

> 🎯 **Type vs Interface**
> 
```typescript
    interface A {
        talk: () => void;    
    }
    interface A {
        eat: () => void;
    }
    interface A {
        sleep: () => void;
    }
    const ummjunsik:A = {eat,sleep,talk};
```
- interface는 중복 및 확장이 가능하여 라이브러리에서 자주 쓰임.
- **잉여속성체크** 

> 🎯 **잉여 속성 체크**