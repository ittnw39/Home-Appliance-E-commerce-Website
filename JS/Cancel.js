import { updateStatusCount } from './Order.js';
import { priceToInt } from '../Object/Object.js';

export class CancelOrder {
  constructor(
    receiptDate,
    orderDate,
    name,
    mainImage,
    price,
    quantity,
    orderNum
  ) {
    this.receiptDate = receiptDate;
    this.orderDate = orderDate;
    this.name = name;
    this.mainImage = mainImage;
    this.price = price;
    this.quantity = quantity;
    this.orderNum = orderNum;
  }
}
const storageData = localStorage.getItem('userInfo');
let orederData = JSON.parse(storageData);
function getCanelOrderdata() {
  const data = localStorage.getItem('canelorderData');
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

// 데이터 추가 또는 수정하기
export function addcancelOrder(CancelOrder) {
  let newdata = [];
  newdata = getCanelOrderdata();
  newdata.unshift(CancelOrder);
  localStorage.setItem('canelorderData', JSON.stringify(newdata));

  updateCancelOrderDetails();
  updateStatusCount();
}

function createOrderDetail(order) {
  const productBlock = document.createElement('div');
  productBlock.className = 'product-box';

  const orderDate = document.createElement('p');
  orderDate.textContent = `주문자명: ${orederData[0]}`;
  const receiptDate = document.createElement('p');
  receiptDate.textContent = `취소일: ${order.receiptDate}`;

  var datecontainer = document.createElement('div');
  datecontainer.appendChild(orderDate);
  datecontainer.appendChild(receiptDate);
  datecontainer.className = 'date-div';
  productBlock.appendChild(datecontainer, productBlock.firstChild);

  const image = document.createElement('img');
  image.src = order.mainImage[0];
  image.alt = `제품 사진`;
  image.className = 'product-image';
  productBlock.appendChild(image);

  const productName = document.createElement('p');
  productName.textContent = `제품명: ${order.name}`;
  productName.className = 'product-name';
  const productPrice = document.createElement('p');

  const formattedPrice = (
    priceToInt(order.price) * order.quantity
  ).toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
  productPrice.textContent = `${order.quantity}개 | 총 ${formattedPrice}`;
  productPrice.className = 'product-price';

  var prodcontainer = document.createElement('div');
  prodcontainer.appendChild(productName);
  prodcontainer.appendChild(productPrice);
  prodcontainer.className = 'product-info';
  productBlock.appendChild(prodcontainer);

  // const addToCartButton = document.createElement('button');
  // addToCartButton.textContent = '장바구니 담기';
  // addToCartButton.className = 'add-to-cart-button';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '취소내역 삭제';
  deleteButton.className = 'add-to-cart-button';
  deleteButton.addEventListener('click', function () {
    const confirmed = confirm('해당 취소 내역을 삭제하시겠습니까?');

    if (confirmed) {
      let data = [];
      data = getCanelOrderdata();
      const index = data.findIndex((item) => item.orderNum === order.orderNum);
      if (index !== -1) {
        data.splice(index, 1); // 해당 요소 삭제
        localStorage.setItem('canelorderData', JSON.stringify(data));
        updateCancelOrderDetails(); // 주문 상태 카운트 업데이트
      }
    }
  });

  var btncontainer = document.createElement('div');
  btncontainer.className = 'button-container';
  // btncontainer.appendChild(addToCartButton);
  btncontainer.appendChild(deleteButton);
  productBlock.appendChild(btncontainer);

  return productBlock;
}

// 주문 상세 내역 업데이트
function updateCancelOrderDetails() {
  const orderDetailsContainer = document.getElementById('cancelorderDetails');
  orderDetailsContainer.innerHTML = '';

  getCanelOrderdata().forEach((order) => {
    const productBlock = createOrderDetail(order);
    orderDetailsContainer.appendChild(productBlock);
  });
}

// 초기화
function initialize() {
  updateCancelOrderDetails();
  updateStatusCount();
}
window.onload = initialize;
