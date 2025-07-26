// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// MODAL POPUP FÖR "LÄS MER"
const readMoreButtons = document.querySelectorAll('.read-more');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const serviceInfo = button.closest('.service-card').getAttribute('data-info');
    modalText.textContent = serviceInfo;
    modal.classList.remove('hidden');
  });
});

// STÄNG MODAL
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// STÄNG MODAL NÄR MAN KLICKAR UTANFÖR
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
