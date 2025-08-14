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

// on click toggle between addition and subtraction
aors.addEventListener('click', () => {
  isAddition = !isAddition;
  aors.textContent = isAddition ? '+ | -' : '- | +'; 
});

// Set default numbers
let proteinCount = 0;
let fatsCount = 0;
let carbsCount = 0;

// on click add/subtract 1 number to the counter
pbutton.addEventListener('click', () => {
  proteinCount += isAddition ? 1 : -1;
  if (proteinCount < 0) proteinCount = 0; // prevent going below zero
  protein.textContent = proteinCount;
});

fbutton.addEventListener('click', () => {
  fatsCount += isAddition ? 1 : -1;
  if (fatsCount < 0) fatsCount = 0; // prevent going below zero
  fats.textContent = fatsCount;
});

cbutton.addEventListener('click', () => {
  carbsCount += isAddition ? 1 : -1;
  if (carbsCount < 0) carbsCount = 0; // prevent going below zero
  carbs.textContent = carbsCount;
});


