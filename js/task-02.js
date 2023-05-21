const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.map(el => {
  const ingredientsItems = document.createElement('li');
  ingredientsItems.classList.add('item');
  ingredientsEl.append(ingredientsItems);
  ingredientsItems.textContent = el;
});
console.log(ingredientsEl);

// ingredients.map(el => {
//   const ingredientsItems = document.createElement('li');
//   ingredientsItems.classList.add('item');
//   ingredientsEl.append(ingredientsItems);
//   ingredientsItems.innerHTML = el;
// });
// ingredients.forEach(el => {
//   const ingredientsItems = document.createElement('li');
//   ingredientsItems.classList.add('item');
//   ingredientsEl.append(ingredientsItems);
//   ingredientsItems.innerHTML = el;
// });

// var ul = document.getElementById('ingredients');

// ingredients.forEach(element => {
//   var li = document.createElement('li');
//   li.innerHTML = element;
//   ul.appendChild(li);
// });

// console.log(ingredientsEl);
