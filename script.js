// Hamburgermeny för mobil
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navLinks.classList.toggle('active');
  }
});

// Kontaktformulär validering (förenklad)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = '';
  formMessage.style.color = 'red';

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Vänligen fyll i alla fält.';
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = 'Ange en giltig e-postadress.';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = 'Tack! Ditt meddelande har skickats.';
  contactForm.reset();
});

function validateEmail(email) {
  // Enkel e-postvalidering
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --- Offertfunktion ---

const turnoverInput = document.getElementById('turnover');
const documentsInput = document.getElementById('documents');
const serviceInputs = document.querySelectorAll('input[name="service"]');
const priceOutput = document.getElementById('price-output');

function calculatePrice() {
  const turnover = parseFloat(turnoverInput.value); // miljoner SEK
  const documents = parseInt(documentsInput.value);
  const service = document.querySelector('input[name="service"]:checked').value;

  // Grundpris baserat på omsättning
  // Exempel: 3000 SEK per miljon omsättning
  let basePrice = turnover * 3000;

  // Tillägg per faktura/kvitto
  // Exempel: 10 SEK per dokument
  let docPrice = documents * 10;

  // Service multiplikator
  // Löpande bokföring: 1x, årsredovisning: 1.8x
  let serviceMultiplier = service === 'arsredovisning' ? 1.8 : 1;

  let totalMonthly = (basePrice + docPrice) * serviceMultiplier / 12;

  // Runda till närmsta 10 SEK
  totalMonthly = Math.round(totalMonthly / 10) * 10;

  priceOutput.textContent = `Cirka pris: ${totalMonthly.toLocaleString('sv-SE')} SEK/mån`;
}

turnoverInput.addEventListener('input', calculatePrice);
documentsInput.addEventListener('input', calculatePrice);
serviceInputs.forEach(input => input.addEventListener('change', calculatePrice));

calculatePrice(); // Startvärde
