git
const button = document.getElementById('convert-btn');
const input = document.getElementById('number');
const outPutDisplay = document.getElementById('output');

const romanNumerals = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

const convertNumber = (input) => {
  let output = '';
  for (const { value, symbol } of romanNumerals) {
    while (input >= value) {
      output += symbol;
      input -= value;
    }
  }
  return output;
};

button.addEventListener('click', () => {
  let inputValue = parseInt(input.value, 10);

 
  if (Number.isNaN(inputValue) || inputValue <= 0) {
    outPutDisplay.textContent = 'Please enter a number greater than or equal to 1';
  } else if (inputValue > 3999) {
    outPutDisplay.textContent = 'Please enter a number less than or equal to 3999.';
  } else {
    outPutDisplay.textContent = convertNumber(inputValue);
  }
});