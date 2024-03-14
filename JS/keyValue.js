const addToBuyButton = document.querySelectorAll('.btn-buy-now');
addToBuyButton.addEventListener('click', function(event) {
  event.preventDefault(); // 기본 동작 방지

  // 필요한 정보 추출
  const productName = document.querySelector('.productName').textContent;
  const quantity = document.querySelector('#quantity1').value;
  const currentURL = new URL(window.location.href);
  const params = new URLSearchParams(currentURL.search);
  const userId = params.get('id'); // URL의 id 쿼리 매개변수 값
  const color = document.querySelector('.productColor').textContent;

  // 정보 객체 생성
  const buyItem = {
    productName,
    quantity,
    userId,
    color
  };

  // 정보를 로컬 스토리지에 저장
  localStorage.setItem('buyItem', JSON.stringify(buyItem));
});