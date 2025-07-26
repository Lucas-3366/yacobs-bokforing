// Hamburger-meny toggling
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Offertfunktion med exakt pristrappa
const omsattningInput = document.getElementById('omsattning');
const fakturorInput = document.getElementById('fakturor');
const tjanstInputs = document.querySelectorAll('input[name="tjanst"]');
const priceDisplay = document.getElementById('price');
const omsattningLabel = document.getElementById('label-omsattning');
const fakturorLabel = document.getElementById('label-fakturor');

// Text för sliders
const omsattningLabels = {
  1: '1–2 miljoner kr',
  2: '2–10 miljoner kr',
  3: '10+ miljoner kr'
};

const fakturorLabels = {
  1: '10–20 fakturor',
  2: '50–100 fakturor',
  3: '200+ fakturor'
};

// Tabell enligt dina priser
const prisTabell = {
  '1-1': { ar: 4000, manad: 2000 },
  '1-2': { ar: 6000, manad: 3000 },
  '1-3': { ar: 8000, manad: 4000 },
  '2-1': { ar: 6000, manad: 3000 },
  '2-2': { ar: 8000, manad: 5000 },
  '2-3': { ar: 10000, manad: 6000 },
  '3-1': { ar: 8000, manad: 4000 },
  '3-2': { ar: 11000, manad: 6000 },
  '3-3': { ar: 15000, manad: 8000 }
};

function calculatePrice() {
  const omsattningVal = omsattningInput.value;
  const fakturorVal = fakturorInput.value;
  const key = `${omsattningVal}-${fakturorVal}`;
  const pris = prisTabell[key];

  omsattningLabel.textContent = `Omsättning per år (tkr): ${omsattningLabels[omsattningVal]}`;
  fakturorLabel.textContent = `Antal fakturor/kvitton per månad: ${fakturorLabels[fakturorVal]}`;

  const tjanst = [...tjanstInputs].find(input => input.checked).value;

  if (tjanst === 'arsredovisning') {
    priceDisplay.textContent = `Cirkapris: ${pris.ar.toLocaleString('sv-SE')} kr / år`;
  } else {
    priceDisplay.textContent = `Cirkapris: ${pris.manad.toLocaleString('sv-SE')} kr / månad`;
  }
}

// Event listeners
omsattningInput.addEventListener('input', calculatePrice);
fakturorInput.addEventListener('input', calculatePrice);
tjanstInputs.forEach(input => input.addEventListener('change', calculatePrice));

// Startvärde
calculatePrice();

// Kontaktformulär validering
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!contactForm.checkValidity()) {
    formMessage.textContent = 'Vänligen fyll i alla fält korrekt.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.style.color = '#1e3c72';
  formMessage.textContent = 'Tack för ditt meddelande! Vi återkommer snart.';

  contactForm.reset();
});
