let data = localStorage.getItem('storedBasket'); // 'myValue'
let values = JSON.parse(data);

if (values.length == 0) {
  let text1 = document.createElement('p');
  text1.innerHTML = '장바구니 상품이 없습니다. 추가 해주세요!';
  document.querySelector('.cartItems').appendChild(text1);
} else {
  values.map(function (product) {
    let cartItem = document.createElement('div');
    cartItem.classList.add('cartItem');

    let cartItemLink = document.createElement('a');
    let cartItemImg = document.createElement('img');
    let cartItemName = document.createElement('div');
    cartItemName.id = 'name';
    cartItemImg.src = product.mainImage[0];

    let cartItemPrice = document.createElement('div');
    cartItemPrice.id = 'price';

    let cartItemCategory = document.createElement('div');
    cartItemCategory.id = 'category';

    cartItem.appendChild(cartItemLink);
    cartItemLink.appendChild(cartItemImg);
    cartItem.appendChild(cartItemName);
    cartItem.appendChild(cartItemPrice);
    cartItem.appendChild(cartItemCategory);

    document.querySelector('.cartItems').appendChild(cartItem);
  });
}
