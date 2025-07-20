const expenses = [
  { item: "Groceries", amount: 1200, category: "Food" },
  { item: "Uber Ride", amount: 350, category: "Transport" },
  { item: "Laptop", amount: 55000, category: "Electronics", note: "For development" },
  { item: "Coffee", amount: 90, category: "Food" },
  { item: "Shirt", amount: 800, category: "Shopping", note: "Festive offer" },
];

const expenseList = document.getElementById("expenseList");
const totalBox = document.getElementById("totalBox");
const categoryFilter = document.getElementById("categoryFilter");

function displayExpenses(data) {
  expenseList.innerHTML = "";
  let total = 0;

  data.forEach(exp => {
    total += exp.amount;

    const div = document.createElement("div");
    div.className = "expense";
    if (exp.amount > 1000) div.classList.add("high");

    div.innerHTML = `
      <strong>${exp.item}</strong> - ₹${exp.amount}  
      <span class="category">(${exp.category})</span>
      <div class="note">${exp.note?.length ? exp.note : ""}</div>
    `;

    expenseList.appendChild(div);
  });

  totalBox.textContent = `Total Spent: ₹${total}`;
}

// Filter logic
categoryFilter.addEventListener("change", () => {
  const selected = categoryFilter.value;
  const filtered = selected === "All"
    ? expenses
    : expenses.filter(exp => exp.category === selected);
  displayExpenses(filtered);
});

// Initial load
displayExpenses(expenses);
