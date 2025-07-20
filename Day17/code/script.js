// Role bit flags
const VIEWER = 1;  // 001
const EDITOR = 2;  // 010
const ADMIN  = 4;  // 100

const users = [
  {
    name: "Alice",
    email: "alice@example.com",
    profile: { age: 25 },
    access: 5 // 101 -> Admin + Viewer
  },
  {
    name: "Bobby",
    access: 2 // 010 -> Editor only
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    access: 0 // No access
  },
  {
    name: "Deepa",
    profile: { age: 28 },
    access: 7 // 111 -> All roles
  }
];

function hasRole(user, role) {
  return (user.access & role) !== 0;
}

const userList = document.getElementById("userList");

users.forEach(user => {
  const card = document.createElement("div");
  card.className = "card";

  const name = user.name || "Unnamed User";
  const email = user.email || "Not Provided";
  const age = user.profile?.age || "Age not available";

  let rolesHTML = "";

  if (hasRole(user, ADMIN)) rolesHTML += `<span class="admin">Admin</span>`;
  if (hasRole(user, EDITOR)) rolesHTML += `<span class="editor">Editor</span>`;
  if (hasRole(user, VIEWER)) rolesHTML += `<span class="viewer">Viewer</span>`;
  if (user.access === 0) rolesHTML = `<p class="no-access">No Access Assigned</p>`;

  card.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
    <div class="roles">${rolesHTML}</div>
  `;

  userList.appendChild(card);
});
