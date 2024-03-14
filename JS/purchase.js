let pruchaseProducts = [];
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith('BuyItem_')) {
    pruchaseProducts.push(JSON.parse(localStorage.getItem(key)));
  }
}
const showPayInfo = function () {
  const totalProductsCountElement =
    document.getElementById('totalProductsCount');
  const totalOrderAmountElements =
    document.getElementsByClassName('totalOrderAmount');

  const { productCount, orderAmount } = calculateOrderAmount();

  totalProductsCountElement.textContent = `${productCount}개`;
  const formattedPrice = orderAmount.toLocaleString();
  // HTMLCollection을 반복하여 각 요소에 주문 금액을 할당
  for (let i = 0; i < totalOrderAmountElements.length; i++) {
    totalOrderAmountElements[i].textContent = `${formattedPrice}원`;
  }
};

const calculateOrderAmount = () => {
  let productCount = 0;
  let orderAmount = 0;

  for (let i = 0; i < pruchaseProducts.length; i++) {
    const priceWithoutComma = pruchaseProducts[i].price.replace(/,/g, '');
    orderAmount +=
      parseInt(priceWithoutComma, 10) * pruchaseProducts[i].quantity;
    productCount += pruchaseProducts[i].quantity;
  }
  return {
    productCount,
    orderAmount,
  };
};

const productsContainer = document.getElementById('products-container');

pruchaseProducts.forEach((product) => {
  const productElement = document.createElement('div');
  productElement.classList.add('purchaseProduct');
  const formattedPrice = (
    parseInt(product.price.replace(/,/g, ''), 10) * product.quantity
  ).toLocaleString();

  productElement.innerHTML = `
        <div class="basketProduct">
            <div class="product">
                  <img src="${product.mainImage[0]}" class="item-image"></img>
            </div>
            <div class="product">
                <h4 class="productInfo">${product.name}</h4>
                <p class="productInfo">${product.brand}</p>
                <p class="productInfo">${product.energy}</p>
            </div>
            <div class="productPrice">
                <p class="quantity"><b> ${product.quantity}개 </b></p>
                <p class="price"><b> ${formattedPrice}원</b></p>
            </div>
        </div>
  `;

  productsContainer.appendChild(productElement);
});

window.addEventListener('scroll', function () {
  //스크롤 시 주문탭 화면 중앙정렬
  var purchaseBox = document.querySelector('.purchaseBox');
  var right = document.querySelector('.right');
  purchaseBox.style.position = 'fixed';
  purchaseBox.style.top = '50%';
  purchaseBox.style.right = '2%';
  purchaseBox.style.transform = 'translateY(-50%)';
});

window.validateForm = function () {
  var phoneNumber = document.getElementsByClassName('userInput')[1].value;
  var phoneNumber2 = document.getElementsByClassName('userInput')[4].value;
  var isValid = true;

  var inputs = document.getElementsByClassName('userInput');
  // 모든 입력 필드에 값이 입력되었는지 확인
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
      alert('모든 입력 필드에 값을 입력해 주세요.');
      isValid = false;
      break;
    }
  }

  if (isValid) {
    // 연락처 유효성 검사: 숫자만 입력되었는지 확인
    if (!/^[0-9]+$/.test(phoneNumber)) {
      alert("연락처는 숫자만 입력 가능합니다. ('-' 제외)");
      isValid = false;
    }
    if (!/^[0-9]+$/.test(phoneNumber2)) {
      alert("연락처는 숫자만 입력 가능합니다. ('-' 제외)");
      isValid = false;
    }
  }

  if (isValid) {
    // 필드값 입력 확인 후 홈페이지로 이동
    alert('주문완료');
    setUserInfo();
    localStorage.setItem('purchasedProducts', JSON.stringify(pruchaseProducts));
    location.href = 'Index.html';
  } else {
  }
};
window.addEventListener('DOMContentLoaded', function () {
  showPayInfo();
});

window.setUserInfo = function () {
  var name = document.getElementsByClassName('userInput')[0].value;
  var phoneNumber = document.getElementsByClassName('userInput')[1].value;
  var adress1 = document.getElementsByClassName('userInput')[6].value;
  var adress2 = document.getElementsByClassName('userInput')[7].value;
  let userInfoArr = [];
  userInfoArr.push(name);
  userInfoArr.push(phoneNumber);
  userInfoArr.push(adress1 + ' ' + adress2);
  localStorage.setItem('userInfo', JSON.stringify(userInfoArr));
};
