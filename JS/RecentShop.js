import { Product } from './Object.js';
import { updateStatusCount } from './Order.js';

function getContent() {
  const data = localStorage.getItem('storedBasket');
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

// 데이터 추가
// export function addContent(content) {
//   let newproduct = getContent();
//   newproduct.unshift(content);
//   if (newproduct.length > 5) {
//     newproduct.pop(); // 배열의 마지막 요소 제거
//   }
//   localStorage.setItem('recentlyViewed', JSON.stringify(newproduct));
//   updateContent();
//   updateStatusCount();
// }

function addToRecentlyViewed(Product) {
  var productBlock = document.createElement('div');
  productBlock.className = 'product-box';

  var productImage = document.createElement('img');
  productImage.className = 'product-image';
  productImage.src = Product.mainImage[0];
  productBlock.appendChild(productImage);

  var productName = document.createElement('div');
  productName.className = 'product-name';
  productName.textContent = `제품명: ${Product.name}`;

  var productPrice = document.createElement('div');
  productPrice.textContent = `가격: ${Product.price}`;

  var container = document.createElement('div');
  container.appendChild(productName);
  container.appendChild(productPrice);
  container.className = 'product-info';
  productBlock.appendChild(container);

  // var addToCartButton = document.createElement('button');
  // addToCartButton.className = 'add-to-cart-button';
  // addToCartButton.textContent = '장바구니 삭제';
  // productBlock.appendChild(addToCartButton);
  // addToCartButton.addEventListener('click', function () {
  //   let data = localStorage.getItem('storedBasket');
  //   let storedArray = JSON.parse(data);
  //   localStorage.removeItem('storedBasket');

  //   for (let i = storedArray.length - 1; i >= 0; i--) {
  //     if (storedArray[i].name == Product.name) {
  //       storedArray.splice(i, 1);
  //       break;
  //     }
  //   }
  //   localStorage.setItem('storedBasket', JSON.stringify(storedArray));
  //   productBlock.remove();
  // });

  return productBlock;
}

// 주문 상세 내역 업데이트
function updateContent() {
  const productDetailsContainer = document.getElementById('productDetails');
  productDetailsContainer.innerHTML = '';

  getContent().forEach((content) => {
    const productBlock = addToRecentlyViewed(content);
    productDetailsContainer.appendChild(productBlock);
  });
}

// 초기화
function initialize() {
  updateContent();
  updateStatusCount();
}
window.onload = initialize;
// addContent( new Product(
//   '삼성전자 FHD LED TV',
//   '삼성',
//   0,
//   '422,240',
//   ['Object/TV/MainImage/image000.png'],
//   ['Object/TV/SubImage/image000.jpg'],
//   '43인치',
//   '2등급',
//   'black',
//   'TV',
//   1
// ));
