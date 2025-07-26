// Hamburger meny
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.classList.remove('active');
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Kontaktformulär validering
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
  if (!validateEmail(email)) {
    formMessage.textContent = 'Vänligen ange en giltig e-postadress.';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = 'Tack för ditt meddelande! Vi återkommer snart.';
  form.reset();
});
function validateEmail(email) {
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email.toLowerCase());
}

// Offertfunktion
const omsättning = document.getElementById('omsättning');
const antal = document.getElementById('antal');
const typ = document.getElementById('typ');
const prisDisplay = document.getElementById('pris');

const prisLista = {
  'löpande': {
    '1-2': { '10-20': 1000, '50-100': 2000, '200+': 3000 },
    '2-10': { '10-20': 1500, '50-100': 2500, '200+': 4000 },
    '10+': { '10-20': 2000, '50-100': 3500, '200+': 5000 }
  },
  'årsredovisning': {
    '1-2': { '10-20': 3000, '50-100': 4000, '200+': 5000 },
    '2-10': { '10-20': 4000, '50-100': 5000, '200+': 6000 },
    '10+': { '10-20': 5000, '50-100': 6000, '200+': 7000 }
  }
};

function uppdateraPris() {
  const valdTyp = typ.value;
  const valdOms = omsättning.value;
  const valdAntal = antal.value;

  const pris = prisLista[valdTyp]?.[valdOms]?.[valdAntal] || 0;
  prisDisplay.textContent = pris;
}

omsättning.addEventListener('change', uppdateraPris);
antal.addEventListener('change', uppdateraPris);
typ.addEventListener('change', uppdateraPris);

window.addEventListener('DOMContentLoaded', uppdateraPris);
