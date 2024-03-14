import { addcancelOrder, CancelOrder } from './Cancel.js';
import { priceToInt } from '../Object/Object.js';

class Order {
  constructor(orderDate, mainImage, name, price, status, quantity, orderNum) {
    this.orderDate = orderDate;
    this.mainImage = mainImage;
    this.name = name;
    this.price = price;
    this.status = status;
    this.orderNum = orderNum;
    this.quantity = quantity;
  }
}
const storageData = localStorage.getItem('userInfo');
let orederData = JSON.parse(storageData);

function getOrderdata() {
  const data = localStorage.getItem('purchasedProducts');
  if (data) {
  //       retval = JSON.parse(data);
  //   for (let i = 0; i < retval.length; i++) {
  //     retval[i].status = '결제완료';
  //   }
  //   return retval;
    return JSON.parse(data);
  }

  return [];
}

// 데이터 추가 또는 수정하기
export function addOrder(Order) {
  let newdata = [];
  newdata = getOrderdata();
  newdata.unshift(Order);
  localStorage.setItem('purchasedProducts', JSON.stringify(newdata));

  updateStatusCount();
  updateOrderDetails();
}

// 주문 상태별 카운트 업데이트
export function updateStatusCount() {
  const pendingCount = getOrderdata().filter(
    (order) => order.status === '입금대기'
  ).length;
  const completedCount = getOrderdata().length;
  const shippingCount = getOrderdata().filter(
    (order) => order.status === '배송중'
  ).length;
  const deliveredCount = getOrderdata().filter(
    (order) => order.status === '배송완료'
  ).length;

  document.getElementById('pendingCount').textContent = pendingCount;
  document.getElementById('completedCount').textContent = completedCount;
  document.getElementById('shippingCount').textContent = shippingCount;
  document.getElementById('deliveredCount').textContent = deliveredCount;
}

// 주문 상세 내역 생성
function createOrderDetail(order) {
  const orderDetail = document.createElement('div');
  orderDetail.className = 'product-box';

  const customerName = document.createElement('p');
  customerName.textContent = `주문자명: ${orederData[0]}`;
  const customerPhone = document.createElement('p');
  customerPhone.textContent = `전화번호: ${orederData[1]}`;
  const address = document.createElement('p');
  address.textContent = `배송지: ${orederData[2]}`;

  var datecontainer = document.createElement('div');
  datecontainer.className = 'date-container';
  datecontainer.appendChild(customerName);
  datecontainer.appendChild(customerPhone);
  datecontainer.appendChild(address);
  orderDetail.appendChild(datecontainer);

  const productImage = document.createElement('img');
  productImage.src = order.mainImage[0];
  productImage.className = 'product-image';
  orderDetail.appendChild(productImage);

  const productName = document.createElement('p');
  productName.textContent = `제품명: ${order.name}`;
  productName.className = 'product-name';
  const productPrice = document.createElement('p');
  const formattedPrice = order.price.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
  productPrice.textContent = `제품 가격: ${(
    priceToInt(formattedPrice) * order.quantity
  ).toLocaleString()}`;
  productPrice.className = 'product-price';
  const orderQuantity = document.createElement('p');
  orderQuantity.textContent = `주문 개수: ${order.quantity}`;
  orderQuantity.className = 'product-price';

  var prodcontainer = document.createElement('div');
  prodcontainer.appendChild(productName);
  prodcontainer.appendChild(productPrice);
  prodcontainer.appendChild(orderQuantity);
  prodcontainer.className = 'product-info';
  orderDetail.appendChild(prodcontainer);

  // const addToCartButton = document.createElement('button');
  // addToCartButton.textContent = '장바구니 담기';
  // addToCartButton.className = 'add-to-cart-button';
  const cancelButton = document.createElement('button');
  cancelButton.textContent = '취소 신청';
  cancelButton.className = 'add-to-cart-button';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '주문내역 삭제';
  deleteButton.className = 'add-to-cart-button';
  // addToCartButton.addEventListener('click', function () {
  //   const confirmed = confirm('해당 제품을 장바구니에 추가하시겠습니까?');

  //   if (confirmed) {
  //     let storedArray = [];
  //     let data = localStorage.getItem('storedBasket');
  //     storedArray = JSON.parse(data);
  //     localStorage.removeItem('storedBasket');
  //     storedArray.push(order);
  //     localStorage.setItem('storedBasket', JSON.stringify(storedArray));

  //     // for (let i = 0; i < storedArray.length; i++) {
  //     //   if (storedArray[i].name == order.name) {
  //     //     alert('이미 장바구니에 존재하는 상품 입니다');
  //     //     localStorage.setItem('storedBasket', JSON.stringify(storedArray));
  //     //     break;
  //     //   }
  //     // }
  //   }
  // });
  cancelButton.addEventListener('click', function () {
    const confirmed = confirm('해당 제품의 주문을 취소하시겠습니까?');

    if (confirmed) {
      let data = [];
      data = getOrderdata();
      const index = data.findIndex((item) => item.orderNum === order.orderNum);
      if (index !== -1) {
        data.splice(index, 1); // 해당 요소 삭제
        localStorage.setItem('purchasedProducts', JSON.stringify(data));
        updateStatusCount(); // 주문 상태 카운트 업데이트
        updateOrderDetails(); // 주문 상세 내역 업데이트
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        addcancelOrder(
          new CancelOrder(
            formattedDate,
            order.orderDate,
            order.name,
            order.mainImage,
            order.price,
            order.quantity
          )
        );
      }
    }
  });
  deleteButton.addEventListener('click', function () {
    const confirmed = confirm('해당 주문 내역을 삭제하시겠습니까?');

    if (confirmed) {
      let data = [];
      data = getOrderdata();
      const index = data.findIndex((item) => item.orderNum === order.orderNum);
      if (index !== -1 && index.status == "배송완료") {
        data.splice(index, 1); // 해당 요소 삭제
        localStorage.setItem('purchasedProducts', JSON.stringify(data));
        updateStatusCount(); // 주문 상태 카운트 업데이트
        updateOrderDetails(); // 주문 상세 내역 업데이트
       }else{
        alert("상품이 배송되지 않았으므로 삭제할 수 없습니다.");
      }
    }
  });

  var btncontainer = document.createElement('div');
  btncontainer.className = 'button-container';
  // btncontainer.appendChild(addToCartButton);
  btncontainer.appendChild(cancelButton);
  btncontainer.appendChild(deleteButton);
  orderDetail.appendChild(btncontainer);

  return orderDetail;
}

// 주문 상세 내역 업데이트
function updateOrderDetails() {
  const orderDetailsContainer = document.getElementById('orderDetails');
  orderDetailsContainer.innerHTML = '';

  // const testButton = document.createElement('button');
  // testButton.textContent = '주문 생성';
  // testButton.className = "test-button";
  // testButton.addEventListener('click', function () {
  //   const confirmed = confirm('테스트 주문 생성');

  //   if (confirmed) {
  //     addOrder(new Order('2023-06-15', 'test.png', '상품 1', 15000, '배송중', 1, 1111));
  //   }
  // });
  // orderDetailsContainer.appendChild(testButton);
  // 테스트 주문 생성 버튼

  getOrderdata().forEach((order) => {
    const orderDetail = createOrderDetail(order);
    orderDetailsContainer.appendChild(orderDetail);
  });
}

// 초기화 함수
function initialize() {
  updateStatusCount();
  updateOrderDetails();
}

// 페이지 로드 시 초기화
window.onload = initialize;
