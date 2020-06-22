const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');

// toggle rules container events
rulesBtn.addEventListener('click', () => {
  rules.classList.add('show');
})

window.addEventListener('mouseup', (e) => {
  if (!rules.contains(e.target)) {
    rules.classList.remove('show');
  }
})

closeBtn.addEventListener('click', () => {
  rules.classList.remove('show');
})
// ///////////////////////////////////////