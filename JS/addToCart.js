import { findObject } from './Object.js';
import { updateBuyStorage } from '../Object/Object.js';

let quantity;

const addToCartButton = document.querySelector('.btn-add-to-cart');
addToCartButton.addEventListener('click', function (event) {
  console.log('in');
  event.preventDefault(); // 기본 동작 방지

  let storedBasket = localStorage.getItem('storedBasket');
  storedBasket = JSON.parse(storedBasket) || [];

  // 필요한 정보 추출

  const quantity = document.querySelector('#quantity1').value;
  const currentURL = new URL(window.location.href);
  const params = new URLSearchParams(currentURL.search);
  const productId = params.get('id'); // URL의 id 쿼리 매개변수 값
  const category = currentURL.searchParams.get('category');

  let product = findObject(category, Number(productId));
  storedBasket.push(product);

  // 정보를 로컬 스토리지에 저장
  localStorage.setItem(`storedBasket`, JSON.stringify(storedBasket));
  location.href = 'basket.html';
});

// 구매하기 버튼 클릭 시 처리
const addToBuyButton = document.querySelector('.btn-buy-now');
addToBuyButton.addEventListener('click', function (event) {
  event.preventDefault(); // 기본 동작 방지

  // 필요한 정보 추출
  const currentURL = new URL(window.location.href);
  const params = new URLSearchParams(currentURL.search);
  const productId = params.get('id'); // URL의 id 쿼리 매개변수 값
  const quantity = document.querySelector('#quantity1').value;
  const category = currentURL.searchParams.get('category');

  // 정보 객체 생성
  const BuyItem = {
    category,
    quantity,
    productId,
  };

  let purchaseProduct = [];
  let product = findObject(category, Number(productId));
  product.quantity = quantity;

  purchaseProduct.push(product);

  // 정보를 로컬 스토리지에 저장
  updateBuyStorage(purchaseProduct);
  location.href = 'purchase.html';
});
