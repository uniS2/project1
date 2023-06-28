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
const modalButtons = document.querySelectorAll(
  ".button__cart, .button__cancle, .button__addCart"
);

// 배열의 모든 요소에 이벤트 리스너를 추가
for (const button of modalButtons) {
  button.addEventListener("click", function (event) {
    //  모달 배경 요소의 클래스 이름을 확인하여 모달창이 열려 있는지 여부를 확인
    const modalBackground = document.querySelector(".modal__background");
    // 모달창이 열려 있으면 닫기 함수를 호출하고, 모달창이 닫혀 있으면 열기 함수를 호출
    if (modalBackground.classList.contains("show")) {
      closeCartModal(event);
    } else {
      showCartModal();
    }
  });
}

// 로그인 유효성 검사
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("invalid", (e) => {
    e.target.classList.add("is--invalid");
  });
  input.addEventListener("valid", (e) => {
    e.target.classList.remove("is--invalid");
  });
});
