// Hamburger meny
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Offertfunktion
const omsattningInput = document.getElementById('omsattning');
const fakturorInput = document.getElementById('fakturor');
const prisElement = document.getElementById('price');
const labelOms = document.getElementById('label-omsattning');
const labelFak = document.getElementById('label-fakturor');
const tjanstRadios = document.querySelectorAll('input[name="tjanst"]');

// Prislista (i kr)
const prislista = {
  lopande: {
    omsattning: {
      1: 1500,
      2: 2500,
      3: 4000,
    },
    fakturor: {
      1: 0,
      2: 400,
      3: 1200,
    }
  },
  arsredovisning: {
    omsattning: {
      1: 5000,
      2: 8000,
      3: 12000,
    },
    fakturor: {
      1: 0,
      2: 0,
      3: 0,
    }
  }
};

function updateLabels() {
  // Omsättning
  const oms = +omsattningInput.value;
  let omsText = '';
  if (oms === 1) omsText = '1–2 miljoner kr';
  else if (oms === 2) omsText = '2–10 miljoner kr';
  else if (oms === 3) omsText = '10+ miljoner kr';
  labelOms.textContent = `Omsättning per år (tkr): ${omsText}`;

  // Fakturor
  const fak = +fakturorInput.value;
  let fakText = '';
  if (fak === 1) fakText = '10–20 fakturor';
  else if (fak === 2) fakText = '50–100 fakturor';
  else if (fak === 3) fakText = '200+ fakturor';
  labelFak.textContent = `Antal fakturor/kvitton per månad: ${fakText}`;
}

function calculatePrice() {
  const oms = +omsattningInput.value;
  const fak = +fakturorInput.value;
  const tjanst = [...tjanstRadios].find(r => r.checked)?.value || 'lopande';

  const omsPris = prislista[tjanst].omsattning[oms] || 0;
  const fakPris = prislista[tjanst].fakturor[fak] || 0;
  let total = omsPris + fakPris;

  let period = tjanst === 'lopande' ? 'månad' : 'år';

  prisElement.textContent = `Cirkapris: ${total.toLocaleString('sv-SE')} kr / ${period}`;
}

omsattningInput.addEventListener('input', () => {
  updateLabels();
  calculatePrice();
});
fakturorInput.addEventListener('input', () => {
  updateLabels();
  calculatePrice();
});
tjanstRadios.forEach(radio => radio.addEventListener('change', calculatePrice));

// Initial setup
updateLabels();
calculatePrice();

// Kontaktformulär validering och simulering av skickande
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

  // Enkel e-postvalidering
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Ange en giltig e-postadress.';
    return;
  }

  formMessage.style.color = '#1e3c72';
  formMessage.textContent = 'Skickar...';

  setTimeout(() => {
    formMessage.textContent = 'Tack för ditt meddelande! Vi återkommer snart.';
    form.reset();
  }, 1500);
});
