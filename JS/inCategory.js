import { products } from '../Object/Object';

const category = products;

const params = new URLSearchParams(window.location.search);
const name = params.get('name');

const product = category.find((product) => product.name == name);
const eachProduct = document.getElementById('product');
eachProduct.innerText = `${product.name} 카테고리`;
