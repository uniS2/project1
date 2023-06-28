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

        * (조장) 공통 내비게이션 + 공통 푸터 + 로그인 페이지 + README.md 통합

  </details>
<details>
    <summary>😎 이준석</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * (조원) 공통 헤더
  </details>
  <details>
    <summary>😃 정소이</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * (조원) 상품 섹션 + 모달창 + 팝업창
  </details>

## 💻 실행 방법

### 클론 후, 패키지 설치

```
npm i
```

### Live Server 실행 및 Sass Watch 모드

```
npm start
```

### ✏️ 네이밍 컨벤션

- BEM 패턴
  - 자식요소: \_\_ => event\_\_title
  - 상태: -- => button--active

### 🚫 웹 접근성(공통)

- **마크업**

  - img 태그에 alt(대체 텍스트) 부여

  - form 태그 내 label 필요(a11yHidden 처리)

  - section/div 내 heading이 없어도 heading 부여(a11yHidden 처리)

  - push 전 validator 확인(유효성 검증)

  - a태그 내 target=”\_blank”지정시 rel=”noreferrer noopener” 속성 부여

### 🌈 믹스인(공통)

### ✨ SEO

## 📜 페이지(섹션) 설명

![마켓칼리HTML구조](/src/assets/image/Karly.png)

### 메인 페이지

#### Header

![header](/src/assets/image/header.png)

- **마크업**
  1. 작업하면서 태그 마다 클래스 속성을 다 써본적 없는데 처음으로 다 클래스를 부여했습니다.<br>
  2. 스크린리더가 읽기, 읽지않기 위한 태그와 속성을 사용하였습니다. ex) label,aria-label, aria-hidden <br>
  3. 회원가입, 로그인, 고객센터 부분이 시각적으로 제일 상단에 위치해서 태그위치도 상단에 있었으나 중요도로는 우선순위가 떨어지기에 제일 하단으로 옮겼습니다.<br>
  4. 검색창 부분을 시멘틱한 구조로 짜기 위해 form, fieldset, label 태그를 사용했습니다.
- **CSS**

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

  //총 4개의 인자가 있지만 변경할 내용은 2개 인자라서 2개만 입력하고 나머지는 옵션 인자로 설정해놓은 값이 입력되었다.
  ```

#### Nav

![navigation](/src/assets/image/nav.png)

- 마크업
  1. 접근성 관점에서 h2태그에 숨김 제목을 부여했다.
  2. 카테고리 부분을 hover하면, list가 나타나게 할 것을 고려하여 작성하였다.
  3. a태그 속성에 #을 부여하여, 최상단으로 이동하게끔하였다.
- **CSS**

#### Section(event)

![event](/src/assets/image/event.png)

- 마크업

  1. section태그안에 .event class를 부여하고 a태그를 사용해서 링크가 가능하게 시안의 event이미지를 사용한다. 새 창으로 넘어가는게 아닌 event 페이지로 이동 가능하도록 target을 사용하지 않는다.

  1. button태그로 왼쪽으로 이동하는데 사용할 버튼과 오른쪽으로 이동하는데 사용할 버튼 2개를 사용한다.

  1. 접근성 관점에서 h2태그에 숨김 제목을 넣고 img태그에 alt로 이미지 내용을 표기 한다.

- **CSS**

#### Section(goods1+ goods2)

![goods](/src/assets/image/goods.png)

- **마크업**

  1. dl 요소의 dt 태그와 a11yHidden 속성을 사용하여 이용자가 스크린리더 이용시 각 상품의 이름과 가격 정보가 '상품명', '정상가', '할인가'임을 알 수 있도록 했습니다.

  1. aria-hidden="true" 속성을 사용하여 이용자가 스크린리더에서 읽을 수 없도록 처리하여,
     불필요한 '[', ']' 기호나 상품 이미지의 정보가 반복되는 혼란을 방지하게 했습니다.

  1. 링크 영역에는 target 속성을 부여하여 상세페이지 이동 링크임을 알 수 있도록 했습니다.

- **CSS**

  1. event 이미지에 마우스 호버시 버튼이 나타났다가 마우스가 벗어나면 서서히 버튼이 사라지도록 transition 효과를 주었습니다.

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

  2. 화면 가로 크기를 줄이거나 늘릴시에 event 이미지에 있는 버튼이 이미지 위에서 일정 간격을 유지 하도록 했습니다.

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

#### Section(banner + side)

![banner&side](/src/assets/image/bannerAndSide.png)

- **마크업**

  1. banner에는 a태그를 사용해서 링크가 가능하게 banner img를 사용한다.
     새 창으로 넘어가는게 아닌 다른 페이지로 이동하도록 target을 사용하지 않는다.

  1. sidebar는 ul태그를 사용해서 자식요소인 li태그에 img를 사용한다.
  1. button태그로 위쪽으로 이동하는데 사용할 버튼과 아래쪽으로 이동하는데 사용할 버튼 2개를 사용한다.
  1. 접근성 관점에서 h2태그에 숨김 제목을 넣었고 img태그에 alt로 이미지 내용을 표기 한다.

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

#### Footer

![footer](/src/assets/image/footer.png)

- **마크업**
  1. 피그마 시안을 참고하여 크게 4개의 div로 나누되, 부연설명으로 보아 role="complementary"를 부여했다.
  2. 일부 a태그는 새 창을 띄우기에, target="\_blank" rel="noreferrer noopener"속성을 부여했다.
- **CSS**

---

![로그인HTML구조](/src/assets/image/loginHtml.png)

### 로그인 페이지

#### Main (Header, Nav, Footer는 중복이기에 생략)

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
- **CSS**

## ⭐️ 결과물

### 메인 페이지

![main_result](/src/assets/image/result.gif)

### 로그인 페이지

![login_result](/src/assets/image/login.gif)
