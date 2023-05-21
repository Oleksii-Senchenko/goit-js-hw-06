/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous
*/
const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');
const startValue = titleEl.textContent;
inputEl.addEventListener('input', () => {
  if (inputEl.value !== '') {
    titleEl.textContent = inputEl.value;
  } else {
    titleEl.textContent = startValue;
  }
});
//
