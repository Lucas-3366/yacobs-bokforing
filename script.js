// Expand/collapse tjänstekort
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => toggleCard(card));
  card.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCard(card);
    }
  });
});

function toggleCard(card) {
  const expanded = card.classList.toggle('expanded');
  const moreInfo = card.querySelector('.service-more');
  if(expanded) {
    moreInfo.removeAttribute('hidden');
  } else {
    moreInfo.setAttribute('hidden', '');
  }
}

// Kontaktformulär med enkel validering
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !validateEmail(email) || !message) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Vänligen fyll i alla fält med giltig information.';
    return;
  }

  // Simulera skickad meddelande
  formMessage.style.color = '#1e3c72';
  formMessage.textContent = 'Tack för ditt meddelande! Vi återkommer snart.';

  contactForm.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
