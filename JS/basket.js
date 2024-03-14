import {
  findObject,
  convertCategory,
  updateBuyStorage,
} from '../Object/Object.js';

// 저장한 아이템 가져오기
// let values = [];
let data = localStorage.getItem('storedBasket'); // 'myValue'
let values = JSON.parse(data);
let basketProducts = [];
let checkedCheckboxes = [];

const productsContainer = document.getElementById('products-container');
let checkNonBasket = 0;

window.NonBasket = function () {
  if (checkNonBasket == 0) {
    const productElement = document.createElement('div');
    productElement.classList.add('nullBasket');
    productElement.innerHTML = `
      <div class="NonBasket">
        <img src="ImogeFolder/basket.png">
        <h4>장바구니에 담겨있는 상품이 없습니다.</h4>
      </div>
  `;
    productsContainer.appendChild(productElement);
    checkNonBasket++;
  }
};

if (values == null) {
  NonBasket();
} else {
  values.forEach((product) => {
    let findProduct = findObject(convertCategory(product.category), product.id);
    findProduct.quantity = parseInt(product.quantity);
    basketProducts.push(findProduct);
  });
}

basketProducts.forEach((product) => {
  const productElement = document.createElement('div');
  productElement.classList.add('basketProduct');
  productElement.dataset.productId = product.id;
  productElement.innerHTML = `
    <div class="productCheck">
      <label>
        <input type='checkbox' name='check[]' onclick="isAllCheck(this.name, 'checkAll');">
      </label>
      <button type="button" class="removeButton"><img src="ImogeFolder/trashcan.png" width="15px"></button>
    </div>
    <div class="product">
    <img src="${product.mainImage[0]}" class="item-image"></img>
    
    </div>
    <div class="product">
      <h4 class="productInfo">${product.name}</h4>
      <p class="productInfo">${product.brand}</p>
      <p class="productInfo">${product.energy}</p>
    </div>
    <div class="productPrice">
    <div class="quantityButton">
      <button class="quantityButton" data-action="increase">+</button>
      <input type="number" class="quantityButton" name="quantity" min="1" max="10" value=${product.quantity}>
      <button class="quantityButton" data-action="decrease">-</button>
    </div>
    <p class="price">${product.price}원</p>
  </div>
`;

  const removeButton = productElement.querySelector('.removeButton');
  removeButton.addEventListener('click', function () {
    const productId = productElement.dataset.productId;
    const product = basketProducts.find((product) => product.id == productId);

    const index = basketProducts.indexOf(product);
    basketProducts.splice(index, 1);

    productElement.remove();
    updateOrderInfo();
    updateBasketStorage();
  });

  productsContainer.appendChild(productElement);
});

const quantityButtons = document.getElementsByClassName('quantityButton');

Array.from(quantityButtons).forEach((button) => {
  button.addEventListener('click', () => {
    const quantityInput = button.parentNode.querySelector(
      'input[type="number"]'
    );
    const productElement = button.closest('.basketProduct');
    let quantity = parseInt(quantityInput.value);
    if (productElement) {
      const productId = productElement.dataset.productId;
      const product = basketProducts.find((p) => p.id == productId);

      if (button.dataset.action === 'increase') {
        if (quantity < 10) {
          quantity++;
          product.quantity++;
        }
      } else if (button.dataset.action === 'decrease') {
        if (quantity > 1) {
          quantity--;
          product.quantity--;
        }
      }
    }
    updateOrderInfo();
    quantityInput.value = quantity;
  });
});
window.removeProduct = function () {
  let checkRemove = false;

  for (let i = checkedCheckboxes.length - 1; i >= 0; i--) {
    if (checkedCheckboxes[i].isChecked == true) {
      basketProducts.splice(i, 1);
      checkRemove = true;
    }
  }

  if (checkRemove) {
    const selectedProducts = document.querySelectorAll(
      '.basketProduct input[type="checkbox"]:checked'
    );
    selectedProducts.forEach((product) => {
      const productElement = product.closest('.basketProduct');
      productElement.remove();
    });

    checkedCheckboxes = [];
    updateOrderInfo();
  } else {
    alert('삭제할 상품이 없습니다.');
  }
  updateBasketStorage();
};

const calculateOrderAmount = () => {
  let productCount = 0;
  let orderAmount = 0;

  if (checkedCheckboxes.length == 0) {
  } else {
    for (let i = 0; i < basketProducts.length; i++) {
      if (checkedCheckboxes[i].isChecked == true) {
        const product = basketProducts[i];
        const priceWithoutComma = product.price.replace(/,/g, '');
        orderAmount += parseInt(priceWithoutComma, 10) * product.quantity;
        productCount += product.quantity;
      } else {
      }
    }
  }

  return {
    productCount,
    orderAmount,
  };
};

const updateOrderInfo = () => {
  const totalProductsCountElement =
    document.getElementById('totalProductsCount');
  const totalOrderAmountElements =
    document.getElementsByClassName('totalOrderAmount');

  const { productCount, orderAmount } = calculateOrderAmount();
  if (basketProducts.length == 0) {
    NonBasket();
  }
  totalProductsCountElement.textContent = `${productCount}개`;
  const formattedPrice = orderAmount.toLocaleString();
  // HTMLCollection을 반복하여 각 요소에 주문 금액을 할당
  for (let i = 0; i < totalOrderAmountElements.length; i++) {
    totalOrderAmountElements[i].textContent = `${formattedPrice}원`;
  }
};

window.addEventListener('scroll', function () {
  //스크롤 시 주문탭 화면 중앙정렬
  var purchaseBox = document.querySelector('.purchaseBox');
  var right = document.querySelector('.right');
  purchaseBox.style.position = 'fixed';
  purchaseBox.style.top = '50%';
  purchaseBox.style.right = '2%';
  purchaseBox.style.transform = 'translateY(-50%)';
});

window.allCheckBoxes = function (boxNames, chkMode) {
  // 체크박스 전체선택
  checkedCheckboxes = [];
  const el = document.getElementsByName(boxNames);
  for (let i = 0; i < el.length; i++) {
    if (!el[i].disabled) {
      el[i].checked = chkMode;
    }
    const checkboxInfo = {
      isChecked: el[i].checked,
    };
    checkedCheckboxes.push(checkboxInfo);
  }
  updateOrderInfo();
};

window.isAllCheck = function (boxNames, allChkName) {
  //전체 체크박스가 선택되었는지 확인

  const el = document.getElementsByName(boxNames);
  let checkboxCnt = 0;
  let checkedCnt = 0;
  checkedCheckboxes = [];
  for (let i = 0; i < el.length; i++) {
    if (!el[i].disabled) {
      checkboxCnt += 1;
      if (el[i].checked) {
        checkedCnt += 1;
      }
      // 체크박스의 정보를 배열에 저장
      const checkboxInfo = {
        isChecked: el[i].checked,
      };
      checkedCheckboxes.push(checkboxInfo);
    }
  }

  let chkMode = false;
  //체크박스 개수와 체크 된 체크박스 개수와 일치할 경우
  if (checkboxCnt == checkedCnt) {
    chkMode = true;
  } else {
    chkMode = false;
  }
  //일치할 경우 천제 체크 박스는 체크, 일치하지 않을 경우 해제
  document.getElementById(allChkName).checked = chkMode;
  updateOrderInfo();
};
let purchaseProducts = [];
window.go = function () {
  purchaseProducts = [];
  for (let i = 0; i < basketProducts.length; i++) {
    if (checkedCheckboxes[i].isChecked == true) {
      const product = basketProducts[i];
      purchaseProducts.push(product);
    }
  }

  if (purchaseProducts.length == 0) {
    //상품 선택 안했으니 안 넘어감.
    alert('주문할 상품이 없습니다.');
  } else {
    updateBasketStorage();
    updateBuyStorage(purchaseProducts);

    location.href = 'purchase.html';
  }
};

window.updateBasketStorage = function () {
  localStorage.setItem(`storedBasket`, JSON.stringify(basketProducts));
};
window.addEventListener('DOMContentLoaded', function () {
  const checkAllCheckbox = document.getElementById('checkAll');
  checkAllCheckbox.click();
  updateOrderInfo();
});