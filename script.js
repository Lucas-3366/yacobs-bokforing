// Hamburger meny toggling
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll till sektioner
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.classList.remove('active'); // stäng meny på mobil
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Enkel formulärvalidering och feedback
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  formMessage.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Vänligen fyll i alla fält.';
    return;
  }
  // Enkel e-postkontroll
  if (!validateEmail(email)) {
    formMessage.textContent = 'Vänligen ange en giltig e-postadress.';
    return;
  }

  // Här kan du lägga till kod för att skicka formulär till server via AJAX eller liknande
  formMessage.style.color = 'green';
  formMessage.textContent = 'Tack för ditt meddelande! Vi återkommer snart.';
  form.reset();
});

function validateEmail(email) {
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email.toLowerCase());
}
