const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')
for (let i = 0; i < ingredients.length; i++) {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredients[i];
  ingredientsEl.append(liEl);
}
