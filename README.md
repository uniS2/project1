# 📂 MarketKurly

## 🦁 멋쟁이사자처럼 FE 6기, HTML / CSS 프로젝트(1조: 1희1비)

마켓컬리를 기반으로 작성된 '마켓칼리' 피그마 시안을 참고하여 만든 HTML + CSS 프로젝트입니다.

## 🗓️ 프로젝트 기간 및 팀원 👨🏻‍💻 👩‍💻

**2023.06.23 ~ 2023.06.28**

👨‍👩‍👦‍👦 **Front-End(4명)** : 김봉석, 노치현, 이준석, 정소이

## ⚔️ 기술 스택

**Front-End**
<br>

<p align="center">

![main_result](/src/assets/image/result.gif)

## 로그인 페이지

## ⛳️ 역할 담당

<details>
    <summary>🧐 김봉석</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * 이벤트 + 배너 + 사이드바 섹션
  </details>
<details>
    <summary>🤓 노치현</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * 공통 내비게이션 +
  </details>
<details>
    <summary>😎 이준석</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * 공통 헤더 +
  </details>
  <details>
    <summary>😃 정소이</summary>  
  <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * 상품 섹션
  </details>

### ✏️ 네이밍 컨벤션

- BEM 패턴
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

### 🌈 믹스인(공통)

### ✨ SEO

## 📜 페이지(섹션) 설명

![마켓칼리HTML구조](/src/kurlyHtml.png)

//ouput css

#### Header

- 마크업
- CSS

#### Nav

- 마크업
- CSS

#### Section(event)

- 마크업
  event에 a태그를 사용해서 링크가 가능하게 event img를 넣었고 button태그로 왼쪽으로 이동하는데 사용할 버튼과 오른쪽으로 이동하는데 사용할 버튼 2개를 넣었습니다.
- CSS

#### Section(goods1+ goods2)

- 마크업

  1. dl 요소의 dt 태그와 a11yHidden 속성을 사용하여 이용자가 스크린리더 이용시 각 상품의 이름과 가격 정보가 '상품명', '정상가', '할인가'임을 알 수 있도록 한다.

  2. aria-hidden="true" 속성을 사용하여 이용자가 스크린리더에서 읽을 수 없도록 처리한다.  
     이는 불필요한 '[', ']' 기호나 상품 이미지의 정보가 반복되는 혼란을 방지한다.

  3. 링크 영역에는 target 속성을 부여하여 상세페이지 이동 링크임을 알 수 있도록 한다.

- CSS

  3. sidebar에 배경을 주어 화면이 커지거나 작아지면서 페이지 내의 다른 요소들과 겹쳤을때 아래에 있는 요소들이 보이는게 아닌 온전한 sidebar가 보이도록 만들었습니다.

- 마크업
  banner에는 a태그를 사용해서 링크가 가능하게 banner img를 넣었고 접근성 관점에서 숨김 제목을 넣었습니다. sidebar는 ul태그를 사용해서 자식요소인 li태그에 img를 추가했습니다. button태그로 위쪽으로 이동하는데 사용할 버튼과 아래쪽으로 이동하는데 사용할 버튼 2개를 넣었습니다.
- CSS

```
npm install
```

- 마크업
- CSS

```
npm start or npm run start
```
