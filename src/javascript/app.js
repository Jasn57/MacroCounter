// Get elements from HTML
const pbutton = document.getElementById('pbutton');
const fbutton = document.getElementById('fbutton');
const cbutton = document.getElementById('cbutton');

const protein = document.getElementById('protein');
const fats = document.getElementById('fats');
const carbs = document.getElementById('carbs');

const aors = document.getElementById('aors');

// set addition to default
let isAddition = true; 

// load counts from localStorage or set to 0
let proteinCount = parseInt(localStorage.getItem('protein')) || 0;
let fatsCount = parseInt(localStorage.getItem('fats')) || 0;
let carbsCount = parseInt(localStorage.getItem('carbs')) || 0;

// show them on screen
protein.textContent = proteinCount;
fats.textContent = fatsCount;
carbs.textContent = carbsCount;

// toggle between addition and subtraction
aors.addEventListener('click', () => {
  isAddition = !isAddition;
  aors.textContent = isAddition ? '+ | -' : '- | +'; 
});

// update counts & save to localStorage
pbutton.addEventListener('click', () => {
  proteinCount += isAddition ? 1 : -1;
  if (proteinCount < 0) proteinCount = 0;
  protein.textContent = proteinCount;
  localStorage.setItem('protein', proteinCount);
});

fbutton.addEventListener('click', () => {
  fatsCount += isAddition ? 1 : -1;
  if (fatsCount < 0) fatsCount = 0;
  fats.textContent = fatsCount;
  localStorage.setItem('fats', fatsCount);
});

cbutton.addEventListener('click', () => {
  carbsCount += isAddition ? 1 : -1;
  if (carbsCount < 0) carbsCount = 0;
  carbs.textContent = carbsCount;
  localStorage.setItem('carbs', carbsCount);
});
