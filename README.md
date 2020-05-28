# [쇼핑몰 바로가기!!](http://hwig.s3-website.ap-northeast-2.amazonaws.com/)

# 식품 쇼핑몰 '휙' 프로젝트_이하영 파트
<br>

## 목차
- [프로젝트 기획의도](#1-프로젝트-기획-의도)
- [개발환경 및 개발언어](#2-개발환경-및-개발언어)
- [공통 적용 기술](#3-공통-적용-기술)
- [프로젝트에서 맡은 부분](#4-프로젝트에서-맡은-부분)
- [구현부 디렉토리 경로](#5-구현부-디렉토리-경로)

<br>
<br>

## 1. 프로젝트 기획 의도
- '마켓컬리'를 벤치마킹한 쇼핑몰
- 빠른 배송의 특징을 따서 '휙'이라는 타이틀을 착안함

<br>

## 2. 개발환경 및 개발언어

- 작업 기간 : 2020.03.01 ~ 진행중
- 작업 인원 : 총 6명 (프론트엔드 3명, 백엔드 3명) 
- Front-end : HTML5 / CSS3 / Bootstrap / ReactJs / Ajax / JQuery
- Back-end : Spring(Mybatis, Java8, JSP) / Oracle 11g
- 서버 구축 : AWS
- 버전 관리 : Git

<br>

## 3. 공통 적용 기술

- HTML5, CSS3, JavaScript, BootStrap, JQuery를 이용한 화면 구현
- React(React Hooks, React-Router)를 통한 데이터 상태 관리 및 라우팅 처리
- React-Redux를 통한 세션 인증 및 필수 state 관리
- Redux-Thunk와 Axios를 이용한 로그인 세션 인증 시스템 구현 및 필수 State 관리 
- GitHub를 통한 버전 관리

<br>

## 4. 프로젝트에서 맡은 부분

- 메인 페이지, 상품 카테고리, 상품 상세페이지, 장바구니, 주문하기 페이지 화면 구현
- 각 페이지 별 컴포넌트 작성 및 라우팅 처리
- React-Redux를 통한 필수 state 관리 및  localStorage를 이용한 데이터 보관 및 유지
- Axios을 이용한 AWS 서버와의 데이터 통신(REST API) 구현

<br>

## 5. 구현부 디렉토리 경로

### ha0git/HwigProject

### - 메인 페이지 관련
[데이터 처리 컴포넌트] src - Containers - MainPage.js
[view 컴포넌트] src - Components - MainComponents 디렉토리

### - 상품 카테고리 페이지 관련
[데이터 처리 컴포넌트] src - Containers - ProductListPage.js
[view 컴포넌트] src - Components - ProductComponents 디렉토리

### - 상품 상세 페이지 관련
[데이터 처리 컴포넌트] src - Containers - ProductPage.js
[view 컴포넌트] src - Components - ProductComponents 디렉토리

### - 장바구니 관련

[데이터 처리 컴포넌트] src - Containers - CartPage.js
[view 컴포넌트] src - Components - ProductComponents 디렉토리

### - 주문하기 관련
[데이터 처리 컴포넌트] src - Containers - OrderPage.js 
[view 컴포넌트] src - Components - OrderComponents 디렉토리