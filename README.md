# 🦁 멋쟁이사자처럼 FE 6기, HTML / CSS 프로젝트(1조: 1희1비)

---

# 📜 목차

- [🦁 멋쟁이사자처럼 FE 6기, HTML / CSS 프로젝트(1조: 1희1비)](#-멋쟁이사자처럼-fe-6기-html--css-프로젝트1조-1희1비)
- [📜 목차](#-목차)
- [🛍️ 마켓칼리(MarketKarly)](#️-마켓칼리marketkarly)
- [프로젝트 URL](#프로젝트-url)
- [🎥 시연영상](#-시연영상)
  - [메인 페이지](#메인-페이지)
  - [로그인 페이지](#로그인-페이지)
- [📄 프로젝트 부연설명](#-프로젝트-부연설명)
  - [✏️ 네이밍 컨벤션](#️-네이밍-컨벤션)
  - [🚫 웹 접근성(공통)](#-웹-접근성공통)
  - [🌈 믹스인(공통)](#-믹스인공통)
  - [✅ SEO 체크리스트](#-seo-체크리스트)
    - [메타태그 활용](#메타태그-활용)
- [프로젝트 기간 + 팀원 소개](#프로젝트-기간--팀원-소개)
  - [🗓️ 프로젝트 기간](#️-프로젝트-기간)
  - [⭐️ 팀원 소개](#️-팀원-소개)
  - [⚔️ 기술 스택](#️-기술-스택)
    - [Front-End](#front-end)
- [📂 페이지(섹션) 설명](#-페이지섹션-설명)
  - [메인 페이지](#메인-페이지-1)
    - [Header](#header)
      - [Nav](#nav)
      - [Section(event)](#sectionevent)
      - [Section(goods1+ goods2)](#sectiongoods1-goods2)
    - [Section(banner + side)](#sectionbanner--side)
    - [Footer](#footer)
    - [Modal(Cart)](#modalcart)
    - [Popup](#popup)
  - [로그인 페이지](#로그인-페이지-1)
    - [Main (Header, Nav, Footer는 중복이기에 생략)](#main-header-nav-footer는-중복이기에-생략)
- [💻 실행 방법](#-실행-방법)
  - [클론 후, 패키지 설치](#클론-후-패키지-설치)
  - [Live Server 실행 및 Sass Watch 모드](#live-server-실행-및-sass-watch-모드)

---

# 🛍️ 마켓칼리(MarketKarly)

<p align="center">
<img src="https://raw.githubusercontent.com/JuniorTunarr/project1/ab1804e2e0a8eed1fadb2421982683d1164e1edd/src/assets/icons/Logo.svg" width="200px"/>
</p>
'마켓칼리' 피그마 시안을 참고하여 만든 HTML + CSS 프로젝트입니다.

# 프로젝트 URL

<a href="https://project1karly.netlify.app/">1조 마켓칼리</a>

# 🎥 시연영상

## 메인 페이지

![main_result](/src/assets/image/result.gif)

## 로그인 페이지

![login_result](/src/assets/image/login.gif)

# 📄 프로젝트 부연설명

## ✏️ 네이밍 컨벤션

- **BEM 패턴**
  - 자식요소: \_\_ => event\_\_title
  - 상태: -- => button--active

## 🚫 웹 접근성(공통)

- **마크업**

  - img 태그에 alt(대체 텍스트) 부여

  - form 태그 내 label 필요(a11yHidden 처리)

  - section/div 내 heading이 없어도 heading 부여(a11yHidden 처리)

  - push 전 validator 확인(유효성 검증)

  - a태그 내 target=”\_blank”지정시 rel=”noreferrer noopener” 속성 부여
  - aria-hidden 속성 또는 aria-label 속성을 활용하여 스크린 리더에 적절한 정보 제공

## 🌈 믹스인(공통)

프로젝트를 하며 유용하게 썼던 믹스인을 남겨보고자 합니다.

```
// font 관련 속성을 묶음으로써 편의성을 향상합니다.
@mixin font($fs: 16px, $fw: 400, $lh: normal, $cl: black) {
  font-size: $fs;
  font-weight: $fw;
  line-height: $lh;
  color: $cl;
}

// position: default값으로 relative를 부여하여 편의성을 향상합니다.
@mixin po($po: relative) {
  position: $po;
}

// position: absolute시, 위치 조정을 간편케 합니다.
@mixin pos($pos: absolute, $t: initial, $r: initial, $b: initial, $l: initial) {
  position: $pos;
  top: $t;
  right: $r;
  bottom: $b;
  left: $l;
}

// flex 속성에 gap 변수를 추가하여 편의성을 향상합니다.
@mixin flexbox(
  $direction: row,
  $justify: flex-start,
  $items: stretch,
  $wrap: nowrap,
  $gap: 0
) {
  display: flex;
  flex-flow: $direction $wrap;
  justify-content: $justify;
  align-items: $items;
  gap: $gap;
}

```

## ✅ SEO 체크리스트

- [x] 문법에 맞는 HTML 작성하기
- [x] 구체적인 페이지 제목 만들기
- [x] 메타 태그 활용하기
- [x] 이미지에 alt 속성 기재
- [x] 이미지 맵에 중요한 링크 사용 피하기
- [x] 플래시 전용 페이지 피하기
- [x] Validator로 마크업 및 CSS 오류 제거
- [x] anchor 태그를 활용한 적절한 키워드 배치
- [x] <a href="https://www.notion.so/bfbe18a79c784f518d4c2b4badb25799?v=7027980ddf904421bc6182e654722d59">접근성 체크리스트</a> 확인
- [ ] 여러 개의 페이지로 나누어진 콘텐츠 검색 최적화 – 시리즈/연재
- [ ] 모든 페이지가 유입 페이지가 되도록 사이트 구성
- [ ] HTTPS 사용 권장

### 메타태그 활용

- HTML 문서에 대한 정보와 지시사항을 설정
- 소셜 미디어 공유를 위해 Open Grap(OG)와 Twitter 카드 지정

```
  // OG

  <meta name="format-detection" content="telephone=no" />
    <meta name="author" content="Projectgroup1" />
    <meta
      name="keywords"
      content="market karly, 마켓칼리, market 칼리, 뷰티칼리, 장보기, 10월의 퍼플위크, 멋사, 멋사 프론트엔드스쿨, 프로젝트 1조 "
    />
    <meta name="description" content="마켓칼리 1조" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Market Karly" />
    <meta
      property="og:description"
      content="멋사 프론트엔드 스쿨 6기 프로젝트 1조 마켓칼리 페이지입니다."
    />
    <meta
      property="og:image"
      content="https://project1karly.netlify.app/assets/icons/logo.png"
    />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="315" />
    <meta property="og:url" content="https://project1karly.netlify.app" />

  // twitter

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Market Karly" />
    <meta
      name="twitter:description"
      content="멋사 프론트엔드 스쿨 6기 프로젝트 1조 마켓칼리 페이지입니다."
    />
    <meta
      name="twitter:image"
      content="https://project1karly.netlify.app/assets/icons/logo.png"
    />
```

# 프로젝트 기간 + 팀원 소개

## 🗓️ 프로젝트 기간

**2023.06.23 ~ 2023.06.28(약 5일)**

## ⭐️ 팀원 소개

**👨‍👩‍👦‍👦 Front-End(4명) : 김봉석, 노치현, 이준석, 정소이**

|                          이름                           | 역할 |                           담당                            |
| :-----------------------------------------------------: | :--: | :-------------------------------------------------------: |
|    🧐 <a href="https://github.com/NewBsk">김봉석</a>    | 조원 |           (메인) 이벤트 + 배너 + 사이드바 섹션            |
| 🤓 <a href="https://github.com/JuniorTunarr">노치현</a> | 조장 | 공통 내비게이션 + 공통 푸터 + 로그인 페이지 + README 통합 |
|                😎 <a href="">이준석</a>                 | 조원 |                         공통 헤더                         |
|    😃 <a href="https://github.com/uniS2 ">정소이</a>    | 조원 |            (메인) 상품 섹션 + 모달창 + 팝업창             |

## ⚔️ 기술 스택

### Front-End

<br>

<p align="left">

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

<img src="https://img.shields.io/badge/Sass-cc6699?style=for-the-badge&logo=Sass&logoColor=white">

# 📂 페이지(섹션) 설명

## 메인 페이지

// popup과 modal의 사진은 각 파트에 있습니다.
![로그인HTML구조](/src/assets/image/Karly.png)

### Header

```
// (공통) 헤더

header.header
├── div.header__group.clearfix
│    ├── div.header__group__tab
│    │   ├── h1.group__logo
│    │   │   └── a[href="/"]
│    │   │       └── img.group__logo_img[src="./assets/icons/logo.png" alt="마켓칼리 로고"]
│    │   └── ul.group__itemBox
│    │       ├── li.group__itemBox__item
│    │       │   └── a.itemBox__link.itemBox__link--active[href="#"]
│    │       │       └── "마켓칼리"
│    │       └── li.group__itemBox__item
│    │           ├── span.itemBox__item__divider[aria-hidden="true"]
│    │           └── a.itemBox__link[href="#"]
│    │               └── "뷰티칼리"
│    ├── form.header__group__searchForm[action="/" method="POST"]
│    │   └── fieldset.group__searchForm__fieldset
│    │       └── legend.a11yHidden
│    │           └── "검색 폼"
│    │       └── div.searchForm__group
│    │           └── div.searchForm__group__formInputBox
│    │               └── label[for="search"].a11yHidden
│    │                   └── "검색어"
│    │               └── input#search[name="search" type="search" required class="group__input" placeholder="검색어를 입력하세요."]
│    │           └── button.searchForm__group__button[type="submit"]
│    └── ul.header__group__myPage
│        ├── li.group__myPageLi
│        │   └── button.group__myPageLi__button[type="button" aria-label="배송지 등록"]
│        ├── li.group__myPageLi
│        │   └── button.group__myPageLi__button[type="button" aria-label="찜하기"]
│        ├── li.group__myPageLi
│        │   └── button.group__myPageLi__button[type="button" aria-label="장바구니"]
│        └── ul.header__group__memberOnly
│            ├── li.group__memberOnlyLi
│            │   └── a.group__memberOnlyLi__link.group__memberOnlyLi--active[href="#"]
│            │       └── "회원가입"
│            ├── li.group__memberOnlyLi
│            │   ├── span.group__memberOnlyLi__divider[aria-hidden="true"]
│            │   └── a.group__memberOnlyLi__link[href="/login.html"]
│            │       └── "로그인"
│            ├── li.group__memberOnlyLi
│            │   ├── span.group__memberOnlyLi__divider[aria-hidden="true"]
│            │   └── a.group__memberOnlyLi__link[href="#"]
│            │       └── "고객센터"

// 최상단 AD div

div.mention__box
   ├─ span.mention__box__text
   │  └── 지금 가입하고 인기상품 100원에 받아가세요!
   └─ button.mention__box__button

```

- **마크업**
  <br>
  1. 작업하면서 태그 마다 클래스 속성을 다 써본적 없는데 처음으로 다 클래스를 부여했습니다.<br>
  2. 스크린리더가 읽기, 읽지않기 위한 태그와 속성을 사용하였습니다. ex) label,aria-label, aria-hidden <br>
  3. 회원가입, 로그인, 고객센터 부분이 시각적으로 제일 상단에 위치해서 태그위치도 상단에 있었으나 중요도로는 우선순위가 떨어지기에 제일 하단으로 옮겼습니다.<br>
  4. 검색창 부분을 시멘틱한 구조로 짜기 위해 form, fieldset, label 태그를 사용했습니다.
     <br>
- **CSS**
  <br>

  1. mixin을 최대한 활용해서 한 줄로 칠 수 있는 코드도 mixin을 썼습니다.

  ```
  @include box($w: 100%);
  ```

  2. 2번 이상 긴 속성 값이 나오면 mixin을 생성했습니다.

  ```
  @mixin buttonClear($url, $size: 100%) {
    border: 0;
    background-image: url($url);
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: $size $size;
    cursor: pointer;
  }
  ```

  3. 단 한 번의 px도 허용하지 않고 rem() 함수를 100번 활용했습니다.

  ```
  padding: rem(67px) 0 rem(13px);
  @include box($w: rem(1050px));
  ```

  4. 옵션 인자를 활용해서 mixin 인자에서 변경할 부분만 입력해서 사용했습니다.

  ```
  @mixin font($fs: 16px, $fw: 400, $lh: normal, $cl: black) {
  font-size: $fs;
  font-weight: $fw;
  line-height: $lh;
  color: $cl;
  }
  .header__group__memberOnly{
    @include font($fs: rem(12.003px), $cl: $content-color);
  }

  //ouput css

  .header__group__memberOnly {
    font-size: 0.7501875rem;
    font-weight: 400;
    line-height: normal;
    color: #333333;
  }

  // 총 4개의 인자가 있지만 변경할 내용은 2개 인자라서 2개만 입력하고 나머지는 옵션 인자로 설정해놓은 값을 입력할 수 있게 했습니다.
  ```

#### Nav

```
// (공통) 내비게이션

nav.nav
├── h2.a11yHidden
│   └── "주요 메뉴"
└── div.nav__container
    ├── div.nav__category[aria-label="카테고리"]
    │   ├── img.nav__category__image[src="./assets/icons/Hamburger.svg" alt="햄버거 버튼"]
    │   ├── span.nav__category__text
    │   │   └── "카테고리"
    │   └── ul.nav__category__list
    │       ├── li.category__item.sprite.sprite1
    │       │   └── a.category__link[href="#"]
    │       │       └── "선물하기"
    │       ├── li.category__item.sprite.sprite10
    │       │   └── a.category__link[href="#"]
    │       │       └── "채소"
    │       ├── li.category__item.sprite.sprite17
    │       │   └── a.category__link[href="#"]
    │       │       └── "과일 · 견과 · 쌀"
    │       ├── ...
    │       │
    │       └── li.category__item.sprite.sprite16
    │           └── a.category__link[href="#"]
    │               └── "베이비 · 키즈 · 완구"
    ├── ul.nav__collection__list
    │   ├── li.collection__item
    │    │   └── a.collection__link[href="#"]
    │    │       └── "신상품"
    │    ├── ...
    │    │
    │    └── li.collection__item
    │        └── a.collection__link[href="#"]
    │            └── "특가/혜택"
    └── div.nav__info
        └── a.nav__info__link[href="#"]
            ├── span.primary
            │   └── "샛별·택배"
            └── " 배송안내"

```

- **마크업**
  <br>
  1. 접근성 관점에서 h2태그에 숨김 제목을 부여했습니다.
  2. 카테고리 부분을 hover하면, list가 나타나게 할 것을 고려하여 작성했습니다.
  3. a태그 속성에 #을 부여하여, 최상단으로 이동하게끔하였습니다.
     <br>
- **CSS**
  <br>

  ```
  .nav {
    ...
    &__category {
       &:hover .nav__category__image {
        filter: invert(13%) sepia(17%) saturate(7280%) hue-rotate(266deg)
          brightness(143%) contrast(145%);
      }
    }
    ...
  }
  ```

  1. 상태 변화에 따른 스타일 변경: :hover 가상 클래스 선택자를 사용하여 요소에 마우스를 올렸을 때, 스타일이 변경되도록 하였습니다.
     위 코드로 카테고리 옆 햄버거 버튼 svg파일에 filter를 입혀서 색이 변하는 것과 같은 효과를 내보았습니다.
     <br>

  ```
  $total-sprites: 22;
  $sprite-height: 41px;

  @for $i from 1 through $total-sprites {
    .sprite#{$i} {
      background-position: 0 ($i - 1) * -$sprite-height;
    }
  }
  ```

  2.  반복문을 통한 클래스 생성: Sass의 @for 구문을 사용하여 .sprite 클래스와 .sprite#{$i} 클래스를
      반복적으로 생성하여 여러 개의 스프라이트 아이콘에 대한 스타일을 효율적으로 처리하고자 하였습니다.

#### Section(event)

```
section.event
├─ h2.a11yHidden: 메인 이벤트
└─ div.event__wrapper
   ├─ img.event__image[src="/assets/image/banner04.svg", alt="컬리 이 주의 특가 한 눈에 보기"]
   ├─ button.button__left[type="button", aria-label="왼쪽 이벤트 페이지로 이동"]
   │  └─ img[src="/assets/icons/Arrow.svg", alt="왼쪽 이동 화살표"]
   └─ button.button__right[type="button", aria-label="오른쪽 이벤트 페이지로 이동"]
      └─ img[src="/assets/icons/Arrow.svg", alt="오른쪽 이동 화살표"]
```

- **마크업**
  <br>

  1. section태그안에 .event class를 부여하고 a태그를 사용해서 링크가 가능하게 시안의 event이미지를 사용했습니다. 새 창으로 넘어가는게 아닌 event 페이지로 이동 가능하도록 target을 사용하지 않게 됩니다.

  2. button태그로 왼쪽으로 이동하는데 사용할 버튼과 오른쪽으로 이동하는데 사용할 버튼 2개를 사용했습니다.

  3. 접근성 관점에서 h2태그에 숨김 제목을 넣고 img태그에 alt로 이미지 내용을 표기했습니다.

   <br>

- **CSS**
  <br>

  ```

  &:hover .button__left,
  &:hover .button__right {
    display: block;
    opacity: 1;
  }
  .button__left,
  .button__right {
      border: none;
      background: transparent;
      opacity: 0;
      transition: opacity 0.5s ease;
  }
  ```

  1. event 이미지에 마우스 호버시 버튼이 나타났다가 마우스가 벗어나면 서서히 버튼이 사라지도록 transition 효과를 주었습니다.
     <br>

  ```
  @include po(relative);
  @include box($w: 100vw);
  &__wrapper {
      @include autoMargin;
      @include box(120rem, 23.125rem);
      @include flexbox($items: center);
      .button__left {
        @include pos(absolute, 0, rem(1100px), 0, 0);
      }

      .button__right {
        @include pos(absolute, 0, 0, 0, rem(1100px));
        transform: rotate(180deg);
      }
  }
  &__image {
      @include box($h: inherit);
      display: block;
      max-width: 100%;
  }
  ```

  2. 화면 가로 크기를 줄이거나 늘릴시에 event 이미지에 있는 버튼이 이미지 위에서 일정 간격을 유지하도록 했습니다.

#### Section(goods1+ goods2)

```
// 상품 섹션

div.goodsUp
  ├─ h2.goods__title: "이 상품 어때요?"
  └─ div.goods__group
     ├─ div.goods__list
     │  ├─ a.goods__link[href="#"][title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"]
     │  │  └─ dl.goods__item.goods__regular
     │  │     ├─ dt.a11yHidden: "상품명"
     │  │     ├─ dd.goods__name: "[풀무원] 탱탱쫄면 (4개입)"
     │  │     └─ dd.goods__thumbnail
     │  │        └─ img[src="./assets/image/goods1.svg"][alt="."][aria-hidden="true"]
     │  └─ button.button__cart[aria-label="장바구니로 이동"]
     ├─ div.goods__list
     │  ├─  ...
     ├─ div.goods__list
     │  ├─  ...
     └─ div.goods__list
     │  ├─ a.goods__link[href="#"][title="[프로쉬] 베이비 세탁세 상세페이지"]
     │  │  └─ dl.goods__item.goods__discount
     │  │     ├─ dt.a11yHidden: "상품명"
     │  │     ├─ dd.goods__name: "[프로쉬] 베이비 세탁세"
     │  │     └─ dd.goods__thumbnail
     │  │        └─ img[src="./assets/image/goods4.svg"][alt="."][aria-hidden="true"]
     │  └─ button.button__cart[aria-label="장바구니로 이동"]
     └─ button.button__next[aria-label="다음 상품 보여주기"]
```

- **마크업**
  <br>

  1. dl 요소의 dt 태그와 a11yHidden 속성을 사용하여 이용자가 스크린리더 이용시 각 상품의 이름과 가격 정보가 '상품명', '정상가', '할인가'임을 알 수 있도록 했습니다.

  2. aria-hidden="true" 속성을 사용하여 이용자가 스크린리더에서 읽을 수 없도록 처리하여,
     불필요한 '[', ']' 기호나 상품 이미지의 정보가 반복되는 혼란을 방지하게 했습니다.

  3. 링크 영역에는 target 속성을 부여하여 상세페이지 이동 링크임을 알 수 있도록 했습니다.

   <br>

- **CSS**
  <br>

  - flex, margin:auto; position 속성 관련 relative, absolute에 관련한 믹스인을 지정하여 배치하였습니다.
    <br>

  ```
  goods{  &__thumbnail {
      order: -1;
      // hover 효과 위한 처리
      overflow: hidden;
    }}

  .goods__thumbnail img {
    @include box($h: rem(320px));
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
  ```

  1. hover 시 상품의 크기 변동없이 확대 비율을 높여 선택한 상품에 효과를 주었습니다.
     <br>

  ```
  button {
    &:hover {
      box-shadow: 0 0 rem(6px) rem(1px) rgba(0, 0, 0, 0.1)
    }
  }
  ```

  2. 상품 넘김 버튼: 상품 이미지와 동일하게 :hover 시 버튼에 그림자 효과를 주었습니다.
     <br>

  ```
  .goods {
    &__regPrice del::after,
    &__disPrice ins::after {
      content: attr(data-price-label);
      display: inline-block;
      @include a11yHidden();
    }
  }
  ```

  3. ins, del 태그 스크린리더 처리
     - ::after 요소를 활용하여 가격 레이블을 만든 후 숨김처리하면 스크린리더 상에서 가격의 레이블 및 가격을 읽어 줄 수 있습니다.
     - 예시: "정상가. 24,000 원. 할인가. 24% 할인. 18,900 원."

### Section(banner + side)

```
// 배너

section.banner
├─ h2.a11yHidden: 10월 주간 이벤트
└─ a[href="#"]
   └─ img.banner__image[src="/assets/image/banner03.svg", alt="컬리 퍼플위크 안내 적립률up+3종 쿠폰팩, 더 풍성해진 혜택 10월24일 부터 10월28일 까지"]

// 사이드 바

aside.sidebar
├─ h2.a11yHidden: 최근 본 상품
└─ div.sidebar__container
   ├─ button.button__top[type="button"]
   │  └─ img[src="/assets/icons/Direction=Up.svg", alt="위쪽 이동 화살표"]
   ├─ span.sidebar__title: 최근 본 상품
   └─ ul.sidebar__list
      ├─ li
      │  └─ a[href="#"]
      │     └─ img.li__image[src="/assets/image/goods1.svg", alt="풀무원 탱탱쫄면(4개입)"]
      ├─ li
      │  └─ a[href="#"]
      │     └─ img.li__image[src="/assets/image/goods4.svg", alt="프로쉬 베이비 세탁세제"]
      └─ li
         └─ a[href="#"]
            └─ img.li__image[src="/assets/image/goods2.svg", alt="온더바디 죠르디 시카 자석 선쿠션"]
```

- **마크업**
  <br>

  1. banner에는 a태그를 사용해서 링크가 가능하게 banner img를 사용했습니다.
     새 창으로 넘어가는게 아닌 다른 페이지로 이동하도록 target을 사용하지 않았습니다.

  2. sidebar는 ul태그를 사용해서 자식요소인 li태그에 img를 사용했습니다.
  3. button태그로 위쪽으로 이동하는데 사용할 버튼과 아래쪽으로 이동하는데 사용할 버튼 2개를 사용했습니다.
  4. 접근성 관점에서 h2태그에 숨김 제목을 넣었고 img태그에 alt로 이미지 내용을 표기했습니다.

   <br>

- **CSS**

  1. 최근 본 상품이 3개 이상일시 3번째 상품의 이미지는 sidebar영역을 벗어나지 않게 하였습니다.

  ```
  .sidebar {
    @include po(); // position: relative
        &__list {
        list-style: none;
        overflow: hidden;
     }
  }
  ```

  2.  sidebar가 화면이 커지거나 작아지면서 페이지 내의 다른 다른 요소들과 겹쳤을때 가장 위에 위치하여 가려지지 않게했습니다.

  ```
  .sidebar {
      @include po();
      z-index: 2;
      &__container {
       @include pos($pos: fixed, $t: 30%, $r: rem(39.04px));
      }
  }
  ```

  3. sidebar에 배경을 주어 화면이 커지거나 작아지면서 페이지 내의 다른 요소들과 겹쳤을때 아래에 있는 요소들이 보이는게 아닌 온전한 sidebar가 보이도록 만들었습니다.

  ```
  .sidebar {
    @include pos($pos: fixed, $t: 30%, $r: rem(39.04px));
        &__container {
        background: white;
        @include pos($pos: fixed, $t: 30%, $r: rem(39.04px));
    }
  }
  ```

### Footer

```
// (공통) 푸터

footer.footer
├── div.footer__contents
│   ├── div.footer__cs[role="complementary"]
│   │   ├── h2.footer__cs__title
│   │   │   └── "고객행복센터"
│   │   ├── div.footer__cs__info
│   │   │   ├── span.cs__infoNumber
│   │   │   │   └── "1644-1107"
│   │   │   └── span.cs__infoTime
│   │   │       └── "월~토요일 오전 7시 - 오후 6시"
│   │   ├── div.footer__cs__inquiry
│   │   │   ├── div.cs__inquiryKaKao
│   │   │   │   ├── button.cs__inquiry__button[type="button"]
│   │   │   │   │   └── "카카오톡 문의"
│   │   │   │   └── div.cs__inquiry__description
│   │   │   │       ├── span
│   │   │   │       │   └── " 월~토요일 | 오전 7시 - 오후 6시 "
│   │   │   │       └── span
│   │   │   │           └── "일/공휴일 | 오전 7시 - 오후 1시"
│   │   │   ├── div.cs__inquiry1to1
│   │   │   │   ├── button.cs__inquiry__button[type="button"]
│   │   │   │   │   └── "1:1 문의"
│   │   │   │   └── div.cs__inquiry__description
│   │   │   │       ├── span
│   │   │   │       │   └── "365일"
│   │   │   │       └── span
│   │   │   │           └── "고객센터 운영시간에 순차적으로 답변드리겠습니다."
│   │   │   └── div.cs__inquiryBulk
│   │   │       ├── button.cs__inquiry__button[type="button"]
│   │   │       │   └── "대량주문 문의"
│   │   │       └── div.cs__inquiry__description
│   │   │           ├── span
│   │   │           │   └── "월~금요일 | 오전9시 - 오후 6시"
│   │   │           └── span
│   │   │               └── "점심시간 | 낮 12시 - 오후 1시"
│   │   └── div.footer__cs__nonMember
│   │       ├── span
│   │       │   └── "비회원 문의: "
│   │       │       ├── a.primary[href="mailto:help@karlycorp.com"]
│   │       │       │   └── "help@karlycorp.com"
│   │       └── span
│   │           └── "비회원.
```

- **마크업**
  <br>
  1. 피그마 시안을 참고하여 크게 4개의 div로 나누되, 부연설명으로 보아 role="complementary"를 부여했습니다.
  2. 일부 a태그는 새 창을 띄우기에, target="\_blank" rel="noreferrer noopener"속성을 부여했습니다.
     <br>
- **CSS**
  <br>
  ```
  .footer {
     &__contents {
       @include flexbox(row, space-between, inherit, wrap);
     }
     &__cs {
          @include flexbox(column, $gap: rem(16px));
     }
     &__about {
         @include flexbox(column, nowrap, $gap: rem(36px));
     }
     &__mark {
         @include flexbox(row, nowrap, $gap: rem(12px));
     }
     &__copyright {
        @include flexbox(column, $justify: center, $items: center);
     }
  }
  ```
  1. 레이아웃 : 전체적으로 플렉스박스로 구성하여 레이아웃을 만들었습니다.

### Modal(Cart)

<p align="center">
<img src="/src/assets/image/modal.png" width="300px" />
</p>

```
// 장바구니 모달

<div class="modal__background">
└─ div.class="modal__window"
   └─ dialog.class="modal__cart"[aria-labelledby="cartGoods"][open]
      ├─ h2.a11yHidden#cartGoods: "장바구니"
      ├─ div.class="modal__cart__goodsGroup"
      │  └─ dl.class="cart__goods"
      │     ├─ dt.a11yHidden: "상품명"
      │     ├─ dd.cart__goodsName: "[풀무원] 탱탱쫄면 (4개입)"
      │     ├─ dt.a11yHidden: "정상가"
      │     └─ dd.cart__regPrice
      │        └─ ins: "4,980 원"
      ├─ div.class="count__container"
      │  ├─ button.button__reduce[aria-label="감소"]: "-"
      │  ├─ span.count__quantity: "1"
      │  └─ button.button__add[aria-label="증가"]: "+"
      ├─ div.class="cart__count"
      │  ├─ dl.class="cart__sum"
      │  │  ├─ dt.cart__sumName: "합계"
      │  │  └─ dd.cart__sumPrice: "4,980 원"
      │  └─ div.class="cart__point"
      │     ├─ span.point__title: "적립"
      │     └─ span.point__detail: "구매 시 5원 적립"
      └─ form.class="close"
         ├─ button.button__cancle[value="cancel"]: "취소"
         └─ button.button__addCart[value="default"]: "장바구니 담기"
```

- **마크업**
  <br>

  1. dialog 태그를 활용하여 동작을 할 수 있도록 open 속성을 활용하였습니다.
  2. 딤드 배경으로 고정시킬 배경창, 모달 배치를 위한 윈도우 창, 모달 장바구니 창으로 구성되어 있습니다.
  3. 취소와 장바구니 담기 버튼에는 자바 스크립트 동작을 위한 클래스 close를 부여하여 동작할 수 있도록 처리하였습니다.

  4. aria-labelledby 속성을 사용해 모달 창인 dialog 요소와 숨김처리한 h2를 연결하여 사용자로 하여금 장바구니 모달창임을 알 수 있도록 하였습니다.
  5. 상품 섹션과 동일하게 상품 상세 정보를 담고 있는 dd 태그와 분류 정보를 담고 있는 숨김 처리한 dt 태그를 사용하여, 해당 상품이 어떤 정보를 의미하는지 상세하게 나타냈습니다.
  6. 각 버튼에는 aria-label을 사용하여 의미를 나타냈습니다.
     <br>

- **CSS**
  <br>

  ```
    .modal {
    // 딤드 배경
    &__background {
      @include pos($pos: fixed, $t: 0, $l: 0);
      @include box(100%, 100vh);
      background-color: rgba(0, 0, 0, 0.3);
      z-index: -1;
      opacity: 0;
    }

    // 모달 배치를 위한 윈도우 창
    &__window {
      @include po();
      @include box(100%, 100%);
    }
  }

  // 실행효과
  .show {
    opacity: 1;
    z-index: 1;
    transition: all .5s ease;

    // 모달-장바구니창
    .modal__cart {
      transition: translate(-50%, -50%) all .5s;
    }
  }

  // 모달-장바구니창
  .modal__cart {
    @include box();
    @include pos($t: 50%, $l: 50%);
    transform: translate(-50%, -50%);
  }
  ```

  1. 배치
     - 딤드 배경으로 고정시킬 배경창과 모달 배치를 위한 윈도우 창 (relative 적용), 모달 장바구니 창 (absolute 적용)으로 구성되어 있으며 transition 효과를 통해 opacity를 조절하여 화면에 띄울 수 있도록 처리하였습니다.
       <br>

  ```
    // JS
    // 모달창
    function showCartModal() {
      document.querySelector(".modal__background").classList.add("show");
      document.body.style.overflow = "hidden";
    }

    function closeCartModal(event) {
      event.preventDefault(); // 기본 동작 취소
      document.querySelector(".modal__background").classList.remove("show");
      document.body.style.overflow = "auto"; // 스크롤 활성화
    }

    // 모달창 열기 버튼과 닫기 버튼을 하나의 배열에 저장
    const modalButtons = document.querySelectorAll(".button__cart, .button__cancle, .button__addCart");

    //  이벤트 리스너를 추가
    for (const button of modalButtons) {
      button.addEventListener("click", function(event) {
        //  모달 배경 요소의 클래스 이름을 확인하여 모달창 열림 여부를 확인
        const modalBackground = document.querySelector(".modal__background");
        // 모달창 열림 여부에 따라 함수 호출
        if (modalBackground.classList.contains("show")) {
          closeCartModal(event);
        } else {
          showCartModal();
        }
      });
    }
  ```

  2. 버튼 실행 js 적용
     - 버튼에 showCartModal과 closeCartModal 함수를 만들어 모달의 배경 요소 선택 후 해당 요소에서 'show' 클래스를 추가하거나 제거하여 모달이 작동되도록 하였습니다.
     - document.body.style.overflow를 "auto"로 설정하여 스크롤의 활성화 여부를 결정하였습니다.
     - 모달창 열기 버튼과 닫기 버튼은 하나의 배열에 저장하여 이벤트 리스너를 추가 후 모달창의 열림 여부에 따라 각각 다른 함수를 호출하도록 하였습니다.

### Popup

<p align="center">
<img src="/src/assets/image/karly_popup.png" width="200px"/>
</p>
```
div.popup
└─ dialog.class="popup__container"[autofocus][open]
   ├─ div.class="popup__img"
   │  └─ a[href="#"]
   │     └─ img.class="img__detail"[src="./assets/image/popup.svg"][alt="칼리 뷰티 플랫폼 상세페이지"]
   └─ form[method="dialog"]
      ├─ button.class="button__closeToday"[value="cancel"]: "오늘 하루 안보기"
      └─ button.class="button__close"[value="default"]: "닫기"
```

- **마크업**
  <br>
  1. autofocus 속성을 사용하여 화면 다른 요소보다 먼저 focus를 잡아줄 수 있도록 하였습니다.
  2. button은 dialog 속성을 활용한 form 태그를 이용하여 상위 요소로 묶어 어느 쪽을 눌러도 닫힐 수 있도록 처리하였습니다.
  3. 자바 스크립트를 연결하지 않았지만 폼 요소가 제출될 때 값을 식별하는 기능을 위해 value 속성을 활용하였습니다.
     <br>
- **CSS**
  <br>

  ```
  .popup {
    &__img {
      @include po();
      @include box(100%, rem(410.2px));
      overflow: hidden;
    }
  }

  .img__detail {
    @include pos($t: 0, $l: 0);
    @include box(100%, 100%);
    object-fit: cover;
  }
  ```

  1. 이미지 처리
     - 이미지를 넣을 배치 공간을 설정 후 이미지를 내부 요소로 배치하여 해당 크기를 벗어나지 않도록 처리하였습니다.

---

## 로그인 페이지

![로그인HTML구조](/src/assets/image/loginHtml.png)

### Main (Header, Nav, Footer는 중복이기에 생략)

![goods](/src/assets/image/login.png)

```
// form__validation.js
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("invalid", (e) => {
    e.target.classList.add("is--invalid");
  });
  input.addEventListener("valid", (e) => {
    e.target.classList.remove("is--invalid");
  });
}
```

- **마크업**
  1. 접근성 측면에서, 로그인 폼 내에 legend와 label은 a11yHidden 처리하였습니다.
  2. errorMessage를 참조하여, 입력 필드에 대한 오류 메시지를 제공하게 하였습니다.
  3. JS를 활용하여 invalid 발생시 aria-invalid는 true를 설정하여 유효성 검사 실패를 알리고, valid시 aria-invalid를 false로 설정하여 유효성 상태를 알리게끔하였습니다.
     <br>
- **CSS**
  <br>

  ```
  .login {
      &__input {
    line-height: 1rem;
    border-radius: 4px;
    border: 1px solid #a6a6a6;
    @include box($w: 100%);
    @include padding(12px);
    &::placeholder {
      @include font($fs: rem(14px), $cl: $gray-400);
    }

      &:focus {
        outline: none;
        border: 1px solid $primary-color;
        &::placeholder {
          @include font($fs: rem(14px), $cl: $primary-color);
        }
      }
    }
  }
  ```

  1. 입력 필드: 포커스 된 상태에서 outline 속성을 제거하고, 테두리의 색상을 변경하며, ::placeholder 선택자를 사용하여 입력 필드의 플레이스홀더 텍스트 스타일을 지정해보았습니다.
     <br>

  ```
  .errorMessage {
    display: none;
    text-align: left;
    @include font($fs: rem(12px), $cl: $red);
  }

  .is--invalid + .errorMessage {
    display: block;
    margin-left: 2px;
  }
  ```

  2. 오류 메시지: 최초에 display: none으로 숨겨둔 오류메시지가 .is--invalid 클래스가 적용되었을 때, 나타나게끔 하였습니다.

# 💻 실행 방법

## 클론 후, 패키지 설치

```
npm install
```

## Live Server 실행 및 Sass Watch 모드

```
npm start or npm run start
```
