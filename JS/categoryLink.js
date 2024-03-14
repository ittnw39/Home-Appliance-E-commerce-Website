import { products } from '../Object/Object.js';

const category = products;
for (let i = 0; i < category.length; i++) {
  console.log(category[i].name);
}

category.forEach((product) => {
  console.log(product.name);
  const categoryLink = document.querySelector(`#${product.name}`);
  categoryLink.href = `category.html?name=${product.name}`;
});
