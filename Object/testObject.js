import {
  products,
  findObject,
  findCategory,
  choiceRandom,
  choiceNum,
  priceToInt,
} from './Object.js'; // import를 사용하기 위해 script 태그의 type을 module로 설정

// const banner = document.createElement('h1');
// const itemId = Math.floor(Math.random() * 6);

// banner.textContent = `${products[0][itemId].name}  ${products[0][itemId].id}  ${products[0][itemId].price}`;
// document.body.appendChild(banner);

const object = findObject('TV', 0);
console.log(object);

const category = findCategory('냉장고');
console.log(category[2]);

const random = choiceRandom();
console.log(random);

const someRandom = choiceNum(5);
for (let i = 0; i < someRandom.length; i++) {
  console.log(someRandom[i].name);
}

console.log(priceToInt(object.price));

const imgContainer = document.querySelector('.img-container');
const img = document.createElement('img');
console.log(object);

img.src = object.subImage;
imgContainer.appendChild(img);
