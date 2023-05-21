const inputEl = document.querySelector('#validation-input');
const datalengthEl = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', () => {
  if (inputEl.value.length === datalengthEl) {
    inputEl.className = 'valid';
  } else {
    inputEl.className = 'invalid';
  }
});
