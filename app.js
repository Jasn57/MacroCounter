// Get elements from HTML
const button = document.getElementById('button');
const numberSpan = document.getElementById('number');

// set defualt number
let number = 0;

// on click add a number
button.addEventListener('click', () => {
  number += 1;
  numberSpan.textContent = number;
});
