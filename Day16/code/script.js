const students = [
  {
    name: "Amit",
    marks: { Math: 78, English: 85, Science: 92 }
  },
  {
    name: "Sneha",
    marks: { Math: 45, English: 60, Science: 55 }
  },
  {
    name: "Ravi",
    marks: { Math: 89, English: 90, Science: 94 }
  }
];

function getGrade(avg) {
  if (avg >= 85) return "A";
  if (avg >= 70) return "B";
  if (avg >= 50) return "C";
  return "F";
}

function getStatus(grade) {
  return grade !== "F" ? "✅ Pass" : "❌ Fail";
}

const container = document.getElementById("reportCards");

students.forEach(student => {
  const card = document.createElement("div");
  card.className = "card";

  let subjectsHTML = "";
  let total = 0;
  let count = 0;

  for (let subject in student.marks) {
    const mark = student.marks[subject];
    subjectsHTML += `<p>${subject}: ${mark}</p>`;
    total += mark;
    count++;
  }

  const avg = total / count;
  const grade = getGrade(avg);
  const status = getStatus(grade);

  card.innerHTML = `
    <h3>👤 ${student.name}</h3>
    <div class="subjects">${subjectsHTML}</div>
    <p>Total Marks: ${total}</p>
    <p>Average: ${avg.toFixed(2)}</p>
    <p class="grade">Grade: ${grade}</p>
    <p class="${grade !== 'F' ? 'pass' : 'fail'}">Status: ${status}</p>
  `;

  container.appendChild(card);
});
