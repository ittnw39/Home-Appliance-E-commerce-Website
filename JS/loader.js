import { findCategory, priceToInt, products } from '../Object/Object.js';

const categories = products;
const params = new URLSearchParams(window.location.search);
const name = params.get('name'); // url에서 카테고리 정보를 받아와서
const product = categories.find((product) => product.name == name); // 찾아온 정보로 카테고리 찾기

// ----------------------------------------------------------------------------------------------

const originCategory = findCategory(product.name);
const sortBtns = document.getElementsByClassName('sortBtn');
const main = document.querySelector('main');
const categoryHeader = document.getElementById('categoryHeader');

let storedBasket = localStorage.getItem('storedBasket');
storedBasket = JSON.parse(storedBasket) || [];

// ----------------------------------------------- 함수 선언 시작 -----------------------------------------------

function loadCategory(category) {
  // 상품들을 화면에 load하는 함수
  totalCountLabel.textContent = `총 ${category.length}건`;

  for (let i = 0; i < category.length; i++) {
    // 상품 생성
    let productSpan = document.createElement('span');
    let productImage = document.createElement('img');
    let productName = document.createElement('p');
    let productNameAnchor = document.createElement('a');
    let productPrice = document.createElement('p');
    let basketButton = document.createElement('button');
    let basketImg = document.createElement('img');

    // 속성 설정
    productImage.setAttribute('alt', `${product.name}Image`);
    productImage.setAttribute('src', category[i].mainImage[0]);
    productImage.addEventListener('mouseenter', () => {
      if (category[i].mainImage.length >= 2) {
        productImage.setAttribute('src', category[i].mainImage[1]);
      }
    });
    productImage.addEventListener('mouseout', () => {
      productImage.setAttribute('src', category[i].mainImage[0]);
    });
    productImage.setAttribute('width', '100%');
    productNameAnchor.setAttribute('id', category[i].id);
    // 상품 상세 페이지 html 파일 이름에 따라 수정 필요
    productNameAnchor.setAttribute(
      'href',
      `product.html?category=${name}&id=${category[i].id}`
    );
    // http://127.0.0.1:5502/HomePage/product.html?category=airconditioner&id=25
    // http://127.0.0.1:5502/HomePage/productInfo.html?name=airconditioner&id=20

    productNameAnchor.innerHTML = category[i].name;
    productPrice.setAttribute('id', 'price');
    productPrice.innerHTML = `${category[i].price}원`;
    basketImg.setAttribute('src', './ImogeFolder/shopping-cart.png');

    basketButton.addEventListener('click', () => {
      let basketProduct;
      originCategory.forEach(function (product) {
        if (
          product.name ==
          basketButton.previousSibling.previousSibling.textContent
        ) {
          basketProduct = product;
        }
      });
      if (storedBasket.indexOf(basketProduct) == -1) {
        basketProduct.quantity = 1; // 추가된 상품의 수량을 1로 설정
        storedBasket.push(basketProduct);
        localStorage.setItem('storedBasket', JSON.stringify(storedBasket));
      } else {
        storedBasket[storedBasket.indexOf(basketProduct)].quantity++;
        localStorage.setItem('storedBasket', JSON.stringify(storedBasket));
      }
      alert('상품이 장바구니에 담겼습니다.');
    });

    basketButton.appendChild(basketImg);

    productName.appendChild(productNameAnchor);

    productSpan.appendChild(productImage);
    productSpan.appendChild(productName);
    productSpan.appendChild(productPrice);
    productSpan.appendChild(basketButton);

    // html문서의 main태그에 append
    main.appendChild(productSpan);
  }
}

function sortHandler(sortBtn) {
  // 기존 main 태그에 있던 모든 요소들을 삭제
  main.innerHTML = '';
  if (sortBtn.value == '오름차순') {
    // 상품 id 속성의 기준은 오름차순
    loadCategory(originCategory);
  } else if (sortBtn.value == '내림차순') {
    // 배열 뒤집기
    let reverseCategory = [...originCategory].reverse();
    loadCategory(reverseCategory);
  } else if (sortBtn.value == '높은 가격 순') {
    loadCategory(sortCategoryByPrice(-1));
  } else if (sortBtn.value == '낮은 가격 순') {
    loadCategory(sortCategoryByPrice(999999999));
  } else if (sortBtn.value == '검색') {
    let sortedCategory = sortCategoryByInputPrice(
      originCategory,
      document.getElementById('startPrice').value,
      document.getElementById('endPrice').value
    );
    // 가격 범위 내의 상품이 없으면
    if (sortedCategory.length == 0) {
      let noResult = document.createElement('p');
      noResult.textContent = '검색 결과가 없습니다.';
      main.appendChild(noResult);
    } else {
      loadCategory(sortedCategory);
    }
  } else {
    // 브랜드 별로 정렬
    loadCategory(sortCategoryByBrand(originCategory, sortBtn.value));
  }
}

function sortCategoryByPrice(dummyValue) {
  let copyedCategory = [];
  // 배열 복사하기
  copyedCategory = [...originCategory];
  let sortedCategory = [];
  let dummy = dummyValue;
  let flag;
  if (dummy < 0) {
    // max값 찾기
    let maxProduct;
    for (let i = 0; i < originCategory.length; i++) {
      for (let j = 0; j < copyedCategory.length; j++) {
        // 배열 탐색하며 가장 큰 값 찾기
        if (priceToInt(copyedCategory[j].price) > dummy) {
          dummy = priceToInt(copyedCategory[j].price);
          maxProduct = copyedCategory[j];
          flag = j;
        }
      }
      // sortedCategory에 max 값 push
      sortedCategory.push(maxProduct);
      // 찾은 max 값을 copyedCategory에서 제거
      for (let k = flag; k < copyedCategory.length - 1; k++) {
        copyedCategory[k] = copyedCategory[k + 1];
      }
      // 배열 크기 줄이기
      copyedCategory.length -= 1;
      // dummyValue 초기화
      dummy = -1;
    }
  } else {
    // min값 찾기
    let minProduct;
    for (let i = 0; i < originCategory.length; i++) {
      for (let j = 0; j < copyedCategory.length; j++) {
        // 배열 탐색하며 가장 작은 값 찾기
        if (priceToInt(copyedCategory[j].price) < dummy) {
          dummy = priceToInt(copyedCategory[j].price);
          minProduct = copyedCategory[j];
          flag = j;
        }
      }
      // sortedCategory에 min 값 push
      sortedCategory.push(minProduct);
      // 찾은 min 값을 copyedCategory에서 제거
      for (let k = flag; k < copyedCategory.length - 1; k++) {
        copyedCategory[k] = copyedCategory[k + 1];
      }
      // 배열 크기 줄이기
      copyedCategory.length -= 1;
      // dummyValue 초기화
      dummy = 999999999;
    }
  }
  // 최종 정렬된 배열 리턴
  return sortedCategory;
}

function sortCategoryByInputPrice(originCategory, startPrice, endPrice) {
  let sortedCategory = [];
  for (let i = 0; i < originCategory.length; i++) {
    // startPrice보다 크고 endPrice보다 작은 상품을 sortedCategory에 push
    if (
      priceToInt(originCategory[i].price) >= startPrice &&
      priceToInt(originCategory[i].price) <= endPrice
    ) {
      sortedCategory.push(originCategory[i]);
    }
  }
  // 최종 정렬된 배열 리턴
  return sortedCategory;
}

function sortCategoryByBrand(originCategory, brandName) {
  let sortedCategory = [];
  for (let i = 0; i < originCategory.length; i++) {
    if (originCategory[i].brand == brandName) {
      sortedCategory.push(originCategory[i]);
    }
  }
  // 최종 정렬된 배열 리턴
  return sortedCategory;
}

// brand 버튼을 load하는 함수
function loadBrandBtn(brandName) {
  let sortBar = document.getElementById('sortBar');
  let input = document.createElement('input');
  input.setAttribute('type', 'button');
  input.setAttribute('value', brandName);
  input.setAttribute('class', 'sortByBrandBtn');
  sortBar.appendChild(input);
  sortBar.innerHTML += '&nbsp';
}

// ----------------------------------------------- 함수 선언 끝 -----------------------------------------------

loadBrandBtn(originCategory[0].brand);

/* 이 코드는 카테고리 별로 존재하는 브랜드가 각각 다르기 때문에 추가함. */
var brandName = originCategory[0].brand;
for (let i = 1; i < originCategory.length; i++) {
  // 상품들을 탐색하다가 각 상품의 brand가 중간에 바뀌었을 때만
  if (originCategory[i].brand != brandName) {
    // 바뀐 해당 브랜드의 버튼을 load
    loadBrandBtn(originCategory[i].brand);
    brandName = originCategory[i].brand;
  }
}

// iteration으로 정렬 버튼에 eventHandler 추가
for (let i = 0; i < sortBtns.length; i++) {
  sortBtns[i].addEventListener('click', function () {
    sortHandler(sortBtns[i]);
  });
}

// 생성된 브랜드 별 정렬 버튼 선택
const sortByBrandBtns = document.getElementsByClassName('sortByBrandBtn');
// iteration으로 정렬 버튼에 eventHandler 추가
for (let i = 0; i < sortByBrandBtns.length; i++) {
  sortByBrandBtns[i].addEventListener('click', function () {
    sortHandler(sortByBrandBtns[i]);
  });
}

// 보여지는 상품 수 ("총 n건") 생성
let totalCountLabel = document.createElement('span');
totalCountLabel.setAttribute('id', 'totalCountText');
totalCountLabel.textContent = `총 ${originCategory.length}건`;
document.getElementById('totalCount').prepend(totalCountLabel);

// category title header 출력
let label = document.createElement('p');
label.setAttribute('id', 'label');
label.textContent = document.getElementById(originCategory.name).textContent;
categoryHeader.appendChild(label);

// 페이지 최초 열람 시 상품 load
loadCategory(originCategory);
