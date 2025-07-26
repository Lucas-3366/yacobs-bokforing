// Hämta element, kontrollera att de finns
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (hamburger && navLinks) {
  // Hamburger meny toggling
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scroll till sektioner
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.classList.remove('active'); // stäng meny på mobil
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
} else {
  console.warn('Hamburger eller nav-links saknas i DOM.');
}

if (form && formMessage) {
  // Enkel formulärvalidering och feedback
  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Formulär skickas");
    formMessage.textContent = '';
    formMessage.style.color = '#d93025'; // standard fel-färg

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    console.log({ name, email, message });

    if (!name || !email || !message) {
      formMessage.textContent = 'Vänligen fyll i alla fält.';
      console.log("Fel: tomma fält");
      return;
    }

    if (!validateEmail(email)) {
      formMessage.textContent = 'Vänligen ange en giltig e-postadress.';
      console.log("Fel: ogiltig e-post");
      return;
    }

    // Här kan du lägga till kod för att skicka formulär till server via AJAX eller liknande
    formMessage.style.color = 'green';
    formMessage.textContent = 'Tack för ditt meddelande! Vi återkommer snart.';
    form.reset();
  });
} else {
  console.warn('Formulär eller meddelande-element saknas i DOM.');
}

function validateEmail(email) {
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email.toLowerCase());
}

// Offertfunktion - dynamisk prisuppdatering
const omsattningSlider = document.getElementById('omsattning');
const fakturorSlider = document.getElementById('fakturor');
const serviceSelect = document.getElementById('service');
const omsattningValue = document.getElementById('omsattningValue');
const fakturorValue = document.getElementById('fakturorValue');
const prisOutput = document.getElementById('pris');

function beraknaPris() {
  const omsattning = +omsattningSlider.value;
  const fakturor = +fakturorSlider.value;
  const service = serviceSelect.value;

  omsattningValue.textContent = omsattning.toLocaleString() + " kr";
  fakturorValue.textContent = fakturor;

  // Prislogik (exempel):
  let grundpris = 0;
  if (service === 'lopande') {
    grundpris = 500 + fakturor * 15 + omsattning * 0.0001;
  } else if (service === 'arsredovisning') {
    grundpris = 1500 + fakturor * 20 + omsattning * 0.00015;
  }
  grundpris = Math.max(grundpris, 500); // Minpris 500 kr

  prisOutput.textContent = grundpris.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " kr / månad";
}

// Initiera värden och lyssnare
if (omsattningSlider && fakturorSlider && serviceSelect && omsattningValue && fakturorValue && prisOutput) {
  omsattningSlider.addEventListener('input', beraknaPris);
  fakturorSlider.addEventListener('input', beraknaPris);
  serviceSelect.addEventListener('change', beraknaPris);
  beraknaPris(); // initial beräkning
} else {
  console.warn('Offertfunktionens element saknas i DOM.');
}
