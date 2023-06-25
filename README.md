# 📂 MarketKarly

## 🦁 멋쟁이사자처럼 FE 6기, HTML / CSS 프로젝트(1조: 1희1비)


'마켓칼리' 피그마 시안을 참고하여 만든 HTML + CSS 프로젝트입니다.


## 🗓️ 프로젝트 기간 및 팀원 👨🏻‍💻 👩‍💻

**2023.06.23 ~ 2023.06.28**

👨‍👩‍👦‍👦 **Front-End(4명)** : 김봉석, 노치현, 이준석, 정소이

## ⚔️ 기술 스택

**Front-End**
<br>

<p align="center">

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

<img src="https://img.shields.io/badge/Sass-cc6699?style=for-the-badge&logo=Sass&logoColor=white">

## ⛳️ 역할 담당

<details>
    <summary>🧐 김봉석</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->

        * (조원) 이벤트 + 배너 + 사이드바 섹션

  </details>
<details>
    <summary>🤓 노치현</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->

        * (조장) 공통 내비게이션 + 공통 푸터 + 로그인 페이지 + README.md 작성
  </details>
<details>
    <summary>😎 이준석</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * (조원) 공통 헤더 +
  </details>
  <details>
    <summary>😃 정소이</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * (조원) 상품 섹션
  </details>

### ✏️ 네이밍 컨벤션

- BEM 패턴
  - 자식요소: \_\_ => event\_\_title
  - 상태: -- => button--active

### 🚫 웹 접근성(공통)

- 마크업

  - img 태그에 alt(대체 텍스트) 부여

  - form 태그 내 label 필요(a11yHidden 처리)

  - section/div 내 heading이 없어도 heading 부여(a11yHidden 처리)

  - push 전 validator 확인(유효성 검증)

  - a태그 내 target=”\_blank”지정시 rel=”noreferrer noopener” 속성 부여

### 🌈 믹스인(공통)

### ✨ SEO

## 📜 페이지(섹션) 설명

![마켓칼리HTML구조](/src/kurlyHtml.png)

### 메인 페이지

#### Header

- 마크업
- CSS

#### Nav

- 마크업
- CSS

#### Section(event)

- 마크업
- CSS

#### Section(goods1+ goods2)
- 마크업
    1. dl 요소의 dt 태그와 a11yHidden 속성을 사용하여 이용자가 스크린리더 이용시 각 상품의 이름과 가격 정보가 '상품명', '정상가', '할인가'임을 알 수 있도록 한다.  

    2. aria-hidden="true" 속성을 사용하여 이용자가 스크린리더에서 읽을 수 없도록 처리한다.  
    이는 불필요한 '[', ']' 기호나 상품 이미지의 정보가 반복되는 혼란을 방지한다.

    3. 링크 영역에는 target 속성을 부여하여 상세페이지 이동 링크임을 알 수 있도록 한다.

- CSS

#### Section(banner + side)

- 마크업
- CSS

### Footer

- 마크업
- CSS

## ⭐️ 결과물
