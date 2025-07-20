// To-Do App
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const list = document.getElementById("taskList");

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function () {
    list.removeChild(li);
  };

  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = "";
}

// Quote Generator
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Push yourself, because no one else is going to do it for you.",
  "Consistency beats intensity."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteText").textContent = quotes[randomIndex];
}
