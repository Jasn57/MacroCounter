// Get elements from HTML
const pbutton = document.getElementById('pbutton');
const fbutton = document.getElementById('fbutton');
const cbutton = document.getElementById('cbutton');

const protein = document.getElementById('protein');
const fats = document.getElementById('fats');
const carbs = document.getElementById('carbs');

// Set default numbers
let proteinCount = 0;
let fatsCount = 0;
let carbsCount = 0;

// On click, add a number to each macro
pbutton.addEventListener('click', () => {
  proteinCount += 1;
  protein.textContent = proteinCount;
});

fbutton.addEventListener('click', () => {
  fatsCount += 1;
  fats.textContent = fatsCount;
});

cbutton.addEventListener('click', () => {
  carbsCount += 1;
  carbs.textContent = carbsCount;
});
