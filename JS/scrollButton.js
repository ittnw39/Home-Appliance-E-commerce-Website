// 스크롤 버튼 요소
const topButton = document.querySelector('.top-button');
const bottomButton = document.querySelector('.scroll-button:not(.top-button)');

// 스크롤 위치 체크
window.addEventListener('scroll', handleScroll);

function handleScroll() {
    // 스크롤 위치가 일정 이상일 때 버튼 표시/숨김
    if (window.pageYOffset > 100) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }

    // 스크롤 위치가 맨 아래인지 체크
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        bottomButton.style.display = 'none';
    } else {
        bottomButton.style.display = 'block';
    }
}

// 맨 위로 스크롤
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 맨 아래로 스크롤
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
