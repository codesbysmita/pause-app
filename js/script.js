// Select elements
const journalInput = document.getElementById("journalInput");
const saveBtn = document.getElementById("saveBtn");
const entriesList = document.getElementById("entriesList");
const writePanel = document.querySelector(".write-panel");

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

  // auto close
  writePanel.classList.add("hidden");
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

  entries.forEach((entry, index) => {
    const div = document.createElement("div");
    div.classList.add("entry");

    div.innerHTML = `
      <p>${entry.content}</p>
      <span>${entry.date}</span>
      <button class="delete-btn">
        <i class="ri-delete-bin-line"></i>
      </button>
    `;

    // Delete logic
    const deleteBtn = div.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      entries.splice(index, 1);
      localStorage.setItem("pauseEntries", JSON.stringify(entries));
      renderEntries(entries);
    });

    entriesList.prepend(div);
  });
}

// Memory panel toggle

const memoryBtn = document.querySelector(".memory-btn");
const memoryPanel = document.querySelector(".memory-panel");
const closeMemoryBtn = document.querySelector(".close-memory");

// Open memory panel
memoryBtn.addEventListener("click", () => {
  memoryPanel.classList.remove("hidden");
  writePanel.classList.add("hidden");
});

// Close memory panel
closeMemoryBtn.addEventListener("click", () => {
  memoryPanel.classList.add("hidden");
});

// Profile menu toggle

const profileBtn = document.querySelector(".profile-btn");
const profileMenu = document.querySelector(".profile-menu");

profileBtn.addEventListener("click", () => {
  profileMenu.classList.toggle("hidden");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !profileMenu.contains(e.target) &&
    !profileBtn.contains(e.target)
  ) {
    profileMenu.classList.add("hidden");
  }
});