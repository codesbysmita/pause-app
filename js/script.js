// Select elements
const journalInput = document.getElementById("journalInput");
const saveBtn = document.getElementById("saveBtn");
const entriesList = document.getElementById("entriesList");

// Load saved entries when page loads
window.addEventListener("DOMContentLoaded", loadEntries);

// Save entry
saveBtn.addEventListener("click", () => {
  const text = journalInput.value.trim();

  if (text === "") return;

  const entry = {
    content: text,
    date: new Date().toLocaleDateString(),
  };

  const entries = getEntries();
  entries.push(entry);

  localStorage.setItem("pauseEntries", JSON.stringify(entries));

  journalInput.value = "";
  renderEntries(entries);
});

// Get entries from localStorage
function getEntries() {
  return JSON.parse(localStorage.getItem("pauseEntries")) || [];
}

// Load entries on refresh
function loadEntries() {
  const entries = getEntries();
  renderEntries(entries);
}

// Render entries to UI
function renderEntries(entries) {
  entriesList.innerHTML = "";

  entries.forEach((entry) => {
    const div = document.createElement("div");
    div.classList.add("entry");

    div.innerHTML = `
      <p>${entry.content}</p>
      <span>${entry.date}</span>
    `;

    entriesList.prepend(div);
  });
}