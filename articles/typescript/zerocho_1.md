---
title: 'ZeroCho Typescript 101'
date: '2022-10-26'
chips: 'TS, 초심, 기본'
---

# 타입스크립트 기본지식

---
> 🎯 **어차피 JS가 근본임**

- npm init -y 는 node 프로젝트로 진행
  - package.json 설정 
  - node의 프로그램의 저장소 npm (여기에 Typescript 있음)
  - npx tsc 는 ts를 js로 바꾸기 명령
---
# tsconfig.json 기본지식

---
> 🎯 **tsconfig.json로 TS -> JS 설정**
  - target: "ES5" == IE까지 허용!
    - noEmit: 타입 검사 해준다. 🔑VScode나 webstorm이 지속적으로 해준다. => 타입추론
  - modules: 모듈 시스템 ex) CommomJS: 노드 표준
