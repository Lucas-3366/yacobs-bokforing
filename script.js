// Hamburger-meny toggling
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Offertfunktion
const omsattningInput = document.getElementById('omsattning');
const fakturorInput = document.getElementById('fakturor');
const tjanstInputs = document.querySelectorAll('input[name="tjanst"]');
const priceDisplay = document.getElementById('price');
const omsattningText = document.getElementById('omsattning-text');
const fakturorText = document.getElementById('fakturor-text');

// Definiera alternativen för textvisning och priser
const omsattningAlternativ = [
  "1–2 miljoner SEK",
  "2–10 miljoner SEK",
  "10+ miljoner SEK"
];

const fakturorAlternativ = [
  "10–20 fakturor",
  "50–100 fakturor",
  "200+ fakturor"
];

// Prislista [omsättning][fakturor] för årsredovisning och löpande bokföring
const prislista = {
  arsredovisning: [
    [4000, 6000, 8000],    // 1-2 miljoner
    [6000, 8000, 10000],   // 2-10 miljoner
    [8000, 11000, 15000]   // 10+ miljoner
  ],
  lopande: [
    [2000, 3000, 4000],
    [3000, 5000, 6000],
    [4000, 6000, 8000]
  ]
};

function calculatePrice() {
  const omsattningIndex = +omsattningInput.value;
  const fakturorIndex = +fakturorInput.value;
  const tjanst = [...tjanstInputs].find(input => input.checked).value;

  // Uppdatera texten bredvid reglagen
  omsattningText.textContent = omsattningAlternativ[omsattningIndex];
  fakturorText.textContent = fakturorAlternativ[fakturorIndex];

  const pris = prislista[tjanst][omsattningIndex][fakturorIndex];
  priceDisplay.textContent = `Cirkapris: ${pris.toLocaleString('sv-SE')} kr / månad`;
}

omsattningInput.addEventListener('input', calculatePrice);
fakturorInput.addEventListener('input', calculatePrice);
tjanstInputs.forEach(input => input.addEventListener('change', calculatePrice));

// Startvärde
calculatePrice();

// Kontaktformulär validering (endast enkel feedback)
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
