document.addEventListener('click', function(event) {
    const element = event.target;
    if (element.classList.contains('quantity-button')) {
      
    event.preventDefault();
      const input = element.parentNode.querySelector('input');
      const action = element.getAttribute('data-action');
      const currentValue = parseInt(input.value);
  
      let newValue;
      if (action === 'decrease') {
        newValue = currentValue > 1 ? currentValue - 1 : 1;
      } else if (action === 'increase') {
        newValue = currentValue < 10 ? currentValue + 1 : 10;
      }
  
      input.value = newValue.toString(); // 수정된 부분: 값을 문자열로 변환하여 할당
  
      // input 이벤트 발생시킴 (범위 체크를 위해)
      const inputEvent = new Event('input');
      input.dispatchEvent(inputEvent);
    }
  });