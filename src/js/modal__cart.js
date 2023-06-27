// 모달창
function showModal() {
  document.querySelector(".modal__background").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal(event) {
  event.preventDefault(); // 기본 동작 취소
  document.querySelector(".modal__background").classList.remove("show");
  document.body.style.overflow = "auto"; // 스크롤 활성화
}

document.querySelector(".show").addEventListener("click", showModal);

document.querySelector(".close").addEventListener("click", closeModal);