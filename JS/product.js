import {
  findObject,
  findCategoryProducts,
  choiceNum,
  products,
} from '../Object/Object.js';

// 상품 정보에 적용
const displayProductInfo = (product) => {
  document.querySelector('.productBrand').innerText = product.brand;
  document.querySelector('.productImageTop img').src = product.mainImage[0];
  document.querySelector('.productImageBottom img').src = product.subImage[0];
  document.querySelector('.productName').innerText = product.name;
  document.querySelector('.productEnergy').innerText = product.energy;
  document.querySelector('.productColor').innerText = product.color;
  document.querySelector('.productPrice').innerText = product.price;

  //상세 정보 표에 적용
  document.querySelector('.product-details .productBrand').innerText =
    product.brand;
  document.querySelector('.product-details .productName2').innerText =
    product.name;
  document.querySelector('.product-details .productSize').innerText =
    product.size;
  document.querySelector('.product-details .productEnergy').innerText =
    product.energy;
  document.querySelector('.product-details .productColor').innerText =
    product.color;
};

let currentURL = new URL(window.location.href);
let params = new URLSearchParams(currentURL.search);
let id = params.get('id');

const displayRelatedProducts = async (id, category) => {
  const relatedProductList = document.getElementById('related-product-list');
  relatedProductList.innerHTML = '';

  const categoryProducts = await findCategoryProducts(category);
  const relatedProducts = await choiceNum(9, categoryProducts);

  relatedProducts.forEach((product) => {
    if (product.id !== id) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const name = document.createElement('p');
      const price = document.createElement('p');

      img.src = product.mainImage[0];
      name.innerText = product.name;
      price.innerText = product.price + '원';

      li.appendChild(img);
      li.appendChild(name);
      li.appendChild(price);

      relatedProductList.appendChild(li);
    }
  });
};

//카테고리와 상품 아이디로 상품 정보 불러오기
if (!id || !category) {
  category = 'tv';
  params.set('category', category);
  params.set('id', '2');
  currentURL.search = params.toString();
  window.location.href = currentURL.href;
}

const product = findObject(id);
displayProductInfo(products[0][0]);
displayRelatedProducts(products[0][0].id, products[0][0].category);
