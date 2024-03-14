import { products } from '../Object/Object.js';

const banner = () => {
  let arr1 = [0, 1, 2, 3, 4, 5];
  // let result1 = [];
  // for (let i = 0; i < 3; i++) {
  //   let randomIndex = Math.floor(Math.random() * arr1.length);
  //   result1.push(arr1[randomIndex]);
  //   arr1.splice(randomIndex, 1);
  // }

  let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result2 = [];
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * arr2.length);
    result2.push(arr2[randomIndex]);
    arr2.splice(randomIndex, 1);
  }

  const makeBanner = (i) => {
    let firstItem = products[i][result2[0]];
    let secondItem = products[i][result2[1]];
    let thirdItem = products[i][result2[2]];

    const firstImage = document.querySelector(`.banner${i + 1} #img1`);
    firstImage.src = firstItem.mainImage[0];
    const firstName = document.querySelector(`.banner${i + 1} #name1`);
    firstName.innerHTML = firstItem.name;
    const firstLink = document.querySelector(`.banner${i + 1} #link1`);
    firstLink.href = `product.html?category=${products[arr1[i]].name}&id=${
      firstItem.id
    }`;

    const secondImage = document.querySelector(`.banner${i + 1} #img2`);
    secondImage.src = secondItem.mainImage[0];
    const secondName = document.querySelector(`.banner${i + 1} #name2`);
    secondName.innerHTML = secondItem.name;
    const secondLink = document.querySelector(`.banner${i + 1} #link2`);
    secondLink.href = `product.html?category=${products[arr1[i]].name}&id=${
      secondItem.id
    }`;

    const thirdImage = document.querySelector(`.banner${i + 1} #img3`);
    thirdImage.src = thirdItem.mainImage[0];
    const thirdName = document.querySelector(`.banner${i + 1} #name3`);
    thirdName.innerHTML = thirdItem.name;
    const thirdLink = document.querySelector(`.banner${i + 1} #link3`);
    thirdLink.href = `product.html?category=${products[arr1[i]].name}&id=${
      thirdItem.id
    }`;
  };

  for (let i = 0; i < 6; i++) {
    makeBanner(i);
  }

  let bannerContainers = document.querySelectorAll('.banner');

  bannerContainers.forEach((banner) => {
    let bannerIndex = 0;
    let banners = banner.querySelectorAll('.img-container');
    let bannerTimer = null;

    function startBanner() {
      bannerTimer = setInterval(() => {
        banners[bannerIndex].classList.remove('active');
        bannerIndex = (bannerIndex + 1) % banners.length;
        banners[bannerIndex].classList.add('active');
      }, 3000);
    }

    function stopBanner() {
      clearInterval(bannerTimer);
    }

    startBanner();

    banner.addEventListener('mouseover', stopBanner);
    banner.addEventListener('mouseout', startBanner);
  });
};
banner();
