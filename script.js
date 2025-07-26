// Hamburger-meny toggling
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Offertfunktion med nivåer och textvisning
const omsattningInput = document.getElementById('omsattning');
const fakturorInput = document.getElementById('fakturor');
const tjanstInputs = document.querySelectorAll('input[name="tjanst"]');
const priceDisplay = document.getElementById('price');
const omsattningText = document.getElementById('omsattning-text');
const fakturorText = document.getElementById('fakturor-text');

const omsattningOptions = {
  1: { text: '1–2 miljoner kr', pris: 3000 },
  2: { text: '2–10 miljoner kr', pris: 6000 },
  3: { text: '10+ miljoner kr', pris: 12000 }
};

const fakturorOptions = {
  1: { text: '10–20 fakturor', pris: 500 },
  2: { text: '50–100 fakturor', pris: 1200 },
  3: { text: '200+ fakturor', pris: 3000 }
};

function calculatePrice() {
  // Uppdatera visad text för valen
  omsattningText.textContent = omsattningOptions[omsattningInput.value].text;
  fakturorText.textContent = fakturorOptions[fakturorInput.value].text;

  const omsattningPris = omsattningOptions[omsattningInput.value].pris;
  const fakturorPris = fakturorOptions[fakturorInput.value].pris;
  const tjanst = [...tjanstInputs].find(input => input.checked).value;

  let totalPris = omsattningPris + fakturorPris;

  // Lägg till extra kostnad om årsredovisning är vald
  if (tjanst === 'arsredovisning') {
    totalPris += 1500; // Exempel på tillägg för årsredovisning
  }

  if (tjanst === 'arsredovisning') {
    priceDisplay.textContent = `Cirkapris: ${totalPris.toLocaleString('sv-SE')} kr / år`;
  } else {
    const manadsPris = Math.round(totalPris / 12);
    priceDisplay.textContent = `Cirkapris: ${manadsPris.toLocaleString('sv-SE')} kr / månad`;
  }
}

// Event listeners
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
