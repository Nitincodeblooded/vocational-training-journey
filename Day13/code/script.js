function calculate(op) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = document.getElementById('calcResult');

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "❗ Enter valid numbers!";
    return;
  }

  let output = 0;
  switch (op) {
    case '+': output = num1 + num2; break;
    case '-': output = num1 - num2; break;
    case '*': output = num1 * num2; break;
    case '/': output = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; break;
  }

  result.textContent = `Result: ${output}`;
}

// Theme toggle
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Character counter
document.getElementById('message').addEventListener('input', () => {
  const count = document.getElementById('message').value.length;
  document.getElementById('charCount').textContent = count;
});
