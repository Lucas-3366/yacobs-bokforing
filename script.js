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

function calculatePrice() {
  const omsattning = +omsattningInput.value * 1000; // omvandla tkr till kr
  const fakturor = +fakturorInput.value;
  const tjanst = [...tjanstInputs].find(input => input.checked).value;

  let grundpris = 500;
  if (omsattning > 1000000) grundpris += (omsattning - 1000000) * 0.0003;
  if (omsattning > 3000000) grundpris += (omsattning - 3000000) * 0.0001;

  let fakturapris = fakturor * 20;

  let tjanstPris = 0;
  if (tjanst === 'arsredovisning') {
    tjanstPris = 1200;
  }

  let total = (grundpris + fakturapris + tjanstPris) / 12;
  total = Math.round(total);

  priceDisplay.textContent = `Cirkapris: ${total.toLocaleString('sv-SE')} kr / månad`;
}

omsattningInput.addEventListener('input', () => {
  document.getElementById('omsattning-value').textContent = omsattningInput.value;
  calculatePrice();
});
fakturorInput.addEventListener('input', () => {
  document.getElementById('fakturor-value').textContent = fakturorInput.value;
  calculatePrice();
});
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
