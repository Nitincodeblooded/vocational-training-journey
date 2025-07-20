function convertTemp() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unit').value;
  const result = document.getElementById('result');

  if (isNaN(temp)) {
    result.textContent = "❌ Please enter a valid number.";
    return;
  }

  let converted = 0;
  if (unit === 'CtoF') {
    converted = (temp * 9/5) + 32;
    result.textContent = `${temp}°C = ${converted.toFixed(2)}°F`;
  } else {
    converted = (temp - 32) * 5/9;
    result.textContent = `${temp}°F = ${converted.toFixed(2)}°C`;
  }
}
