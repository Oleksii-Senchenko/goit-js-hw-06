const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;
decrement.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
increment.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
