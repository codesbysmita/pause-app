// Elements
const startBtn = document.querySelector('.primary-btn');
const panel = document.querySelector('.write-panel');
const closeBtn = document.querySelector('.close-btn');
const saveBtn = document.querySelector('.save-btn');
const textarea = document.querySelector('textarea');

const memoryBtn = document.querySelector('.memory-btn');
const memoryPanel = document.querySelector('.memory-panel');
const closeMemory = document.querySelector('.close-memory');
const entriesContainer = document.querySelector('.entries');

// Helpers
function getEntries() {
  return JSON.parse(localStorage.getItem('entries')) || [];
}

function saveEntry(text) {
  const entries = getEntries();
  entries.unshift(text);
  localStorage.setItem('entries', JSON.stringify(entries));
}

function renderEntries() {
  const entries = getEntries();
  entriesContainer.innerHTML = '';

  if (entries.length === 0) {
    entriesContainer.innerHTML =
      '<p class="empty">No entries yet. Start writing.</p>';
    return;
  }

  entries.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.textContent = entry;
    entriesContainer.appendChild(div);
  });
}

//  Writing Panel
startBtn.addEventListener('click', () => {
  panel.classList.add('show');
  panel.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  panel.classList.remove('show');
  setTimeout(() => panel.classList.add('hidden'), 400);
});

//  Save 
saveBtn.addEventListener('click', () => {
  const text = textarea.value.trim();
  if (!text) return;

  saveEntry(text);
  textarea.value = '';
  closeBtn.click();
});

//Memory Panel
memoryBtn.addEventListener('click', () => {
  renderEntries();
  memoryPanel.classList.add('show');
  memoryPanel.classList.remove('hidden');
});

closeMemory.addEventListener('click', () => {
  memoryPanel.classList.remove('show');
  setTimeout(() => memoryPanel.classList.add('hidden'), 400);
});
// Day 5

// Select elements
const startBtn = document.querySelector('.primary-btn');
const writePanel = document.querySelector('.write-panel');
const closeBtn = document.querySelector('.close-btn');

const memoryBtn = document.querySelector('.memory-btn');
const memoryPanel = document.querySelector('.memory-panel');
const closeMemoryBtn = document.querySelector('.close-memory');

// Open write panel
startBtn.addEventListener('click', () => {
  writePanel.classList.remove('hidden');
});

// Close write panel
closeBtn.addEventListener('click', () => {
  writePanel.classList.add('hidden');
});

// Open memory panel
memoryBtn.addEventListener('click', () => {
  memoryPanel.classList.remove('hidden');
});

// Close memory panel
closeMemoryBtn.addEventListener('click', () => {
  memoryPanel.classList.add('hidden');
});