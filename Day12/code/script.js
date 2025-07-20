function runCopyCheck() {
  const original = {
    name: "Nitin",
    skills: { frontend: "HTML" }
  };

  const shallow = { ...original };
  const deep = structuredClone(original);

  shallow.skills.frontend = "React";
  deep.skills.frontend = "JavaScript";

  document.getElementById("output").textContent =
    `Original: ${JSON.stringify(original)}\n` +
    `Shallow Copy: ${JSON.stringify(shallow)}\n` +
    `Structured Clone: ${JSON.stringify(deep)}`;
}
