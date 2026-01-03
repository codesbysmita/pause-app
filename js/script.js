//  Elements 
const startBtn = document.querySelector('.primary-btn');
const panel = document.querySelector('.write-panel');
const closeBtn = document.querySelector('.close-btn');

//  Open Panel 
startBtn.addEventListener('click', () => {
  panel.classList.add('show');
  panel.classList.remove('hidden');
});

// Close Panel 
closeBtn.addEventListener('click', () => {
  panel.classList.remove('show');

  // wait for animation before disabling clicks
  setTimeout(() => {
    panel.classList.add('hidden');
  }, 400);
});