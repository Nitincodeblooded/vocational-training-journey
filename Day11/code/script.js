function splitExpenses() {
  const input = document.getElementById("expenseInput").value;
  const expenses = input
    .split(",")
    .map(val => parseFloat(val.trim()))
    .filter(val => !isNaN(val));

  if (expenses.length === 0) {
    alert("Please enter valid expenses.");
    return;
  }

  const total = getTotal(...expenses);
  const avg = total / expenses.length;

  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("average").textContent = avg.toFixed(2);
}

function getTotal(...amounts) {
  return amounts.reduce((sum, amt) => sum + amt, 0);
}
