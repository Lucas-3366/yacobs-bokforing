// Hamburger-meny
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Offertberäkning
const omsattningInput = document.getElementById('omsattning');
const fakturorInput = document.getElementById('fakturor');
const tjanstRadios = document.querySelectorAll('input[name="tjanst"]');
const priceDisplay = document.getElementById('price');

const omsattningLabels = {
  1: '1–2 miljoner kr',
  2: '2–10 miljoner kr',
  3: '10+ miljoner kr',
};

const fakturorLabels = {
  1: '10–20 fakturor',
  2: '50–100 fakturor',
  3: '200+ fakturor',
};

/* Prislista
 * Format: pris i kr per månad eller per år beroende på tjänst
 * Prislistan är ett objekt med två nycklar, "lopande" och "arsredovisning"
 * Varje innehåller en matris [omsättningIndex][fakturorIndex] med pris.
 */
const priser = {
  lopande: [
    [2500, 3500, 4500], // 1–2m
    [3500, 4500, 6500], // 2–10m
    [5000, 6500, 8500], // 10+m
  ],
  arsredovisning: [
    [7000, 8000, 9500],
    [9000, 11000, 15000],
    [14000, 18000, 21000],
  ],
};

function updateLabels() {
  document.getElementById('label-omsattning').textContent =
    `Omsättning per år (tkr): ${omsattningLabels[omsattningInput.value]}`;
  document.getElementById('label-fakturor').textContent =
    `Antal fakturor/kvitton per månad: ${fakturorLabels[fakturorInput.value]}`;
}

function updatePrice() {
  const oms = parseInt(omsattningInput.value, 10) - 1;
  const fakt = parseInt(fakturorInput.value, 10) - 1;
  const tjanstVald = Array.from(tjanstRadios).find(r => r.checked).value;

  let pris = priser[tjanstVald][oms][fakt];
  let suffix = tjanstVald === 'lopande' ? 'kr / månad' : 'kr / år';

  priceDisplay.textContent = `Cirkapris: ${pris.toLocaleString('sv-SE')} ${suffix}`;
}

// Initiera etiketter och pris
updateLabels();
updatePrice();

omsattningInput.addEventListener('input', () => {
  updateLabels();
  updatePrice();
});
fakturorInput.addEventListener('input', () => {
  updateLabels();
  updatePrice();
});
tjanstRadios.forEach(radio => radio.addEventListener('change', updatePrice));

// Kontaktformulärvalidering
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  formMessage.textContent = '';
  formMessage.style.color = '#d33';

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name) {
    formMessage.textContent = 'Vänligen fyll i ditt namn.';
    contactForm.name.focus();
    return;
  }
  if (!email || !validateEmail(email)) {
    formMessage.textContent = 'Vänligen ange en giltig e-postadress.';
    contactForm.email.focus();
    return;
  }
  if (!message) {
    formMessage.textContent = 'Vänligen skriv ett meddelande.';
    contactForm.message.focus();
    return;
  }

  // Skicka formulär (här kan man lägga till riktig post till server)
  formMessage.style.color = 'green';
  formMessage.textContent = 'Tack för ditt meddelande! Vi återkommer så snart som möjligt.';

  contactForm.reset();
});

function validateEmail(email) {
  // Enkel e-postvalidering
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
