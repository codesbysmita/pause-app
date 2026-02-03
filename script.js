const startBtn = document.getElementById("startWriting");
const writePanel = document.querySelector(".write-panel");
const closeBtn = document.querySelector(".close-btn");

const saveBtn = document.getElementById("saveBtn");
const journalInput = document.getElementById("journalInput");
const entriesList = document.getElementById("entriesList");

const memoryBtn = document.querySelector(".memory-btn");
const memoryPanel = document.querySelector(".memory-panel");
const closeMemory = document.querySelector(".close-memory");

let entries = JSON.parse(localStorage.getItem("pauseEntries")) || [];

// Open write panel
startBtn.addEventListener("click", () => {
  writePanel.classList.remove("hidden");
});

// Close write panel
closeBtn.addEventListener("click", () => {
  writePanel.classList.add("hidden");
});

// Save entry
saveBtn.addEventListener("click", () => {
  const text = journalInput.value.trim();
  if (!text) return;

  entries.unshift(text);
  localStorage.setItem("pauseEntries", JSON.stringify(entries));

  journalInput.value = "";
});

// Open memory panel
memoryBtn.addEventListener("click", () => {
  renderEntries();
  memoryPanel.classList.remove("hidden");
});

// Close memory panel
closeMemory.addEventListener("click", () => {
  memoryPanel.classList.add("hidden");
});

// Render entries
function renderEntries() {
  entriesList.innerHTML = "";
  entries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.textContent = entry;
    entriesList.appendChild(div);
  });
}