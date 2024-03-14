import { products } from '../Object/Object.js';

const category = products;

// category.forEach((product) => {
//   const categoryLink = document.querySelector(`#${product.name}`);
//   categoryLink.href = `?name=${product.name}`;
// });

let searchResult = document.querySelector('.searchResult');

function myFunction(inputValue) {
  searchResult.innerHTML = '';

  let lowerCase = inputValue.toLowerCase();
  let upperCase = inputValue.toUpperCase();
  searchResult.style.width = '302.4px';
  let resultText;

  searchResult.style.padding = '15px';
  searchResult.style.borderRadius = '10px';
  searchResult.style.paddingTop = '0px';

  for (let i = 0; i < category.length; i++) {
    for (let j = 0; j < category[i].length; j++) {
      if (
        category[i][j].name.includes(lowerCase) ||
        category[i][j].name.includes(upperCase)
      ) {
        let searchItem = document.createElement('a');
        ``;
        let lineFeed = document.createElement('p');
        searchItem.innerHTML = category[i][j].name;
        searchItem.href = `product.html?category=${category[i].name}&id=${category[i][j].id}`;

        resultText = searchItem.innerHTML;

        searchResult.appendChild(lineFeed);
        searchResult.appendChild(searchItem);
      }
    }
  }
  if (searchResult.clientHeight > 300) {
    searchResult.style.height = 'auto';
    searchResult.style.overflow = 'auto';
  } else {
    searchResult.style.height = 'auto'; // or you can set to initial value
  }

  if (resultText == null) {
    let string = document.createElement('a');
    string.innerHTML = '해당 상품이 존재하지 않습니다.';
    searchResult.style.paddingTop = '15px';
    searchResult.appendChild(string);
  }
}
window.onload = function () {
  const searchInput = document.getElementById('search');

  searchInput.addEventListener('input', function (event) {
    if (event.target.value === '') {
      let searchResult = document.querySelector('.searchResult');
      searchResult.innerHTML = '';
      searchResult.style.padding = '0px';
    } else {
      myFunction(event.target.value);
    }
  });
};

document.getElementById('homepage').addEventListener('click', function () {
  window.location.href = 'index.html';
});
