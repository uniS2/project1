# 📂 MarketKarly

## 🦁 멋쟁이사자처럼 FE 6기, HTML / CSS 프로젝트(1조: 1희1비)

'마켓칼리' 피그마 시안을 참고하여 만든 HTML + CSS 프로젝트입니다.

## 🗓️ 프로젝트 기간 및 팀원 👨🏻‍💻 👩‍💻

**2023.06.23 ~ 2023.06.28(약 5일)**

👨‍👩‍👦‍👦 **Front-End(4명)** : 김봉석, 노치현, 이준석, 정소이

## ⚔️ 기술 스택

#### **Front-End**

<br>

<p align="left">

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

        * (조원) 공통 헤더

  </details>
  <details>
    <summary>😃 정소이</summary>

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

- **BEM 패턴**
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

#### ✅ 체크리스트

- [x] 문법에 맞는 HTML 작성하기
- [x] 구체적인 페이지 제목 만들기
- [ ] 메타 태그 활용하기
- [x] 이미지에 alt 속성 기재
- [x] 이미지 맵에 중요한 링크 사용 피하기
- [x] 플래시 전용 페이지 피하기
- [ ] anchor 태그를 활용한 적절한 키워드 배치
- [ ] 여러 개의 페이지로 나누어진 콘텐츠 검색 최적화 – 시리즈/연재
- [ ] 모든 페이지가 유입 페이지가 되도록 사이트 구성
- [ ] HTTPS 사용 권장

## 📜 페이지(섹션) 설명

### 메인 페이지

![마켓칼리HTML구조](/src/assets/image/Karly.png)

![header](/src/assets/image/header.png)

#### Header

- **마크업**
  1. 작업하면서 태그 마다 클래스 속성을 다 써본적 없는데 처음으로 다 클래스를 부여했습니다.<br>
  2. 스크린리더가 읽기, 읽지않기 위한 태그와 속성을 사용하였습니다. ex) label,aria-label, aria-hidden <br>
  3. 회원가입, 로그인, 고객센터 부분이 시각적으로 제일 상단에 위치해서 태그위치도 상단에 있었으나 중요도로는 우선순위가 떨어지기에 제일 하단으로 옮겼습니다.<br>
  4. 검색창 부분을 시멘틱한 구조로 짜기 위해 form, fieldset, label 태그를 사용했습니다.
     <br>
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

  //총 4개의 인자가 있지만 변경할 내용은 2개 인자라서 2개만 입력하고 나머지는 옵션 인자로 설정해놓은 값을 입력할 수 있게 했습니다.
  ```

#### Nav

![navigation](/src/assets/image/nav.png)

- **마크업**
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

![event](/src/assets/image/event.png)

- **마크업**
  <br>

  1. section태그안에 .event class를 부여하고 a태그를 사용해서 링크가 가능하게 시안의 event이미지를 사용했습니다. 새 창으로 넘어가는게 아닌 event 페이지로 이동 가능하도록 target을 사용하지 않게 됩니다.

  1. button태그로 왼쪽으로 이동하는데 사용할 버튼과 오른쪽으로 이동하는데 사용할 버튼 2개를 사용했습니다.

  1. 접근성 관점에서 h2태그에 숨김 제목을 넣고 img태그에 alt로 이미지 내용을 표기했습니다.

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

![goods](/src/assets/image/goods.png)

- **마크업**

  1. dl 요소의 dt 태그와 a11yHidden 속성을 사용하여 이용자가 스크린리더 이용시 각 상품의 이름과 가격 정보가 '상품명', '정상가', '할인가'임을 알 수 있도록 했습니다.

  1. aria-hidden="true" 속성을 사용하여 이용자가 스크린리더에서 읽을 수 없도록 처리하여,
     불필요한 '[', ']' 기호나 상품 이미지의 정보가 반복되는 혼란을 방지하게 했습니다.

  1. 링크 영역에는 target 속성을 부여하여 상세페이지 이동 링크임을 알 수 있도록 했습니다.

   <br>

- **CSS**

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

#### Section(banner + side)

![banner&side](/src/assets/image/bannerAndSide.png)

- **마크업**

  1. banner에는 a태그를 사용해서 링크가 가능하게 banner img를 사용했습니다.
     새 창으로 넘어가는게 아닌 다른 페이지로 이동하도록 target을 사용하지 않았습니다.

  1. sidebar는 ul태그를 사용해서 자식요소인 li태그에 img를 사용했습니다.
  1. button태그로 위쪽으로 이동하는데 사용할 버튼과 아래쪽으로 이동하는데 사용할 버튼 2개를 사용했습니다.
  1. 접근성 관점에서 h2태그에 숨김 제목을 넣었고 img태그에 alt로 이미지 내용을 표기했습니다.

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

#### Footer

![footer](/src/assets/image/footer.png)

- **마크업**
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
  1. 레이아웃: 전체적으로 플렉스박스로 구성하여 레이아웃을 만들었습니다.

#### Modal(Cart)

- **마크업**

  1. dialog 태그를 활용하여 동작을 할 수 있도록 open 속성을 활용하였습니다.
  2. 딤드 배경으로 고정시킬 배경창, 모달 배치를 위한 윈도우 창, 모달 장바구니 창으로 구성되어 있습니다.
  3. 취소와 장바구니 담기 버튼에는 자바 스크립트 동작을 위한 클래스 close를 부여하여 동작할 수 있도록 처리하였습니다.

  4. aria-labelledby 속성을 사용해 모달 창인 dialog 요소와 숨김처리한 h2를 연결하여 사용자로 하여금 장바구니 모달창임을 알 수 있도록 하였습니다.
  5. 상품 섹션과 동일하게 상품 상세 정보를 담고 있는 dd 태그와 분류 정보를 담고 있는 숨김 처리한 dt 태그를 사용하여, 해당 상품이 어떤 정보를 의미하는지 상세하게 나타내 주었습니다.
  6. 각 버튼에는 aria-label을 사용하여 의미를 나타내 주었습니다.
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

#### Popup

- **마크업**
  1. autofocus 속성을 사용하여 화면 다른 요소보다 먼저 focus를 잡아줄 수 있도록 하였습니다.
  1. button은 dialog 속성을 활용한 form 태그를 이용하여 상위 요소로 묶어 어느 쪽을 눌러도 닫힐 수 있도록 처리하였습니다.
  1. 자바 스크립트를 연결하지 않았지만 폼 요소가 제출될 때 값을 식별하는 기능을 위해 value 속성을 활용하였습니다.
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

### 로그인 페이지

![로그인HTML구조](/src/assets/image/loginHtml.png)

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

## ⭐️ 결과물

### 메인 페이지

![main_result](/src/assets/image/result.gif)

### 로그인 페이지

![login_result](/src/assets/image/login.gif)
