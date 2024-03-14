let slides = document.querySelector('.slides');
let slideImg = document.querySelectorAll('.slides li');
let currentIdx = 0;
let slideCount = slideImg.length;
let prev = document.querySelector('.prev'); // 이전 버튼
let next = document.querySelector('.next'); // 다음 버튼
let slideWidth = 200; // 슬라이드 이미지 넓이
let slideMargin = 100; // 슬라이드 끼리의 마진값
let visibleItems = 5; // 보여지는 상품 개수

initFunction(); // 슬라이드 넓이와 위치값 초기화 함수
checkButtonVisibility(); // 버튼 가시성 체크 함수

function initFunction() {
  slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';
}
function checkButtonVisibility() {
  if (currentIdx === 0) {
    prev.style.display = 'none';
  } else {
    prev.style.display = 'block';
  }

  if (currentIdx >= slideCount - visibleItems) {
    next.style.display = 'none';
  } else {
    next.style.display = 'block';
  }
}
next.addEventListener('click', function () {
  // 다음 버튼 눌렀을 때
  if (currentIdx < slideCount - visibleItems) {
    currentIdx += 1;
    slides.style.transition = 'transform 0.5s ease-out';
    slides.style.transform = `translateX(-${(slideWidth + slideMargin) * currentIdx}px)`;
    checkButtonVisibility();
  }
});

prev.addEventListener('click', function () {
  // 이전 버튼 눌렀을 때
  if (currentIdx > 0) {
    currentIdx -= 1;
    slides.style.transition = 'transform 0.5s ease-out';
    slides.style.transform = `translateX(-${(slideWidth + slideMargin) * currentIdx}px)`;
    checkButtonVisibility();
  }
});

slides.addEventListener('transitionend', function () {
  // transition 완료 시
  slides.style.transition = ''; // transition 초기화
});