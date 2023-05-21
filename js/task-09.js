function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
btnEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = bodyEl.style.backgroundColor;
});
