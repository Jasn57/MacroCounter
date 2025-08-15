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

let proteinCount = 0;
let fatsCount = 0;
let carbsCount = 0;

// load counts from backend
async function loadCounts() {
  try {
    const res = await fetch('http://localhost:3000/api/macros');
    const data = await res.json();
    proteinCount = data.protein;
    fatsCount = data.fats;
    carbsCount = data.carbs;
    protein.textContent = proteinCount;
    fats.textContent = fatsCount;
    carbs.textContent = carbsCount;
  } catch (e) {
    proteinCount = 0;
    fatsCount = 0;
    carbsCount = 0;
    protein.textContent = proteinCount;
    fats.textContent = fatsCount;
    carbs.textContent = carbsCount;
  }
}

// save counts to backend
async function saveCounts() {
  await fetch('http://localhost:3000/api/macros', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      protein: proteinCount,
      fats: fatsCount,
      carbs: carbsCount
    })
  });
}

// show them on screen
protein.textContent = proteinCount;
fats.textContent = fatsCount;
carbs.textContent = carbsCount;

// toggle between addition and subtraction
aors.addEventListener('click', () => {
  isAddition = !isAddition;
  aors.textContent = isAddition ? '+ | -' : '- | +'; 
});

// update counts & save
pbutton.addEventListener('click', async () => {
  proteinCount += isAddition ? 1 : -1;
  if (proteinCount < 0) proteinCount = 0;
  protein.textContent = proteinCount;
  await saveCounts();
});

fbutton.addEventListener('click', async () => {
  fatsCount += isAddition ? 1 : -1;
  if (fatsCount < 0) fatsCount = 0;
  fats.textContent = fatsCount;
  await saveCounts();
});

cbutton.addEventListener('click', async () => {
  carbsCount += isAddition ? 1 : -1;
  if (carbsCount < 0) carbsCount = 0;
  carbs.textContent = carbsCount;
  await saveCounts();
});

loadCounts();