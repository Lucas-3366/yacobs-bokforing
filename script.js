// Hamburger-meny (för mobil)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Offertfunktion

const omsattningInput = document.getElementById('omsattning');
const fakturorInput = document.getElementById('fakturor');
const bokforingRadios = document.querySelectorAll('input[name="bokforing"]');
const priceDisplay = document.getElementById('price');
const omsattningText = document.getElementById('omsattning-text');
const fakturorText = document.getElementById('fakturor-text');

function getOmsattningKategori(value) {
  if (value <= 2000000) return '1-2';
  if (value <= 10000000) return '2-10';
  return '10+';
}

function getFakturorKategori(value) {
  if (value <= 20) return '10-20';
  if (value <= 100) return '50-100';
  return '200+';
}

function calculatePrice(omsattningValue, fakturorValue, bokforingVal) {
  const omsattningKat = getOmsattningKategori(omsattningValue);
  const fakturorKat = getFakturorKategori(fakturorValue);

  const prices = {
    '1-2': {
      '10-20': { 'arsredovisning': 4000, 'lopande': 2000 },
      '50-100': { 'arsredovisning': 6000, 'lopande': 3000 },
      '200+': { 'arsredovisning': 8000, 'lopande': 4000 },
    },
    '2-10': {
      '10-20': { 'arsredovisning': 6000, 'lopande': 3000 },
      '50-100': { 'arsredovisning': 8000, 'lopande': 5000 },
      '200+': { 'arsredovisning': 10000, 'lopande': 6000 },
    },
    '10+': {
      '10-20': { 'arsredovisning': 8000, 'lopande': 4000 },
      '50-100': { 'arsredovisning': 11000, 'lopande': 6000 },
      '200+': { 'arsredovisning': 15000, 'lopande': 8000 },
    }
  };

  return prices[omsattningKat][fakturorKat][bokforingVal];
}

function updateTexts() {
  const omsattningVal = Number(omsattningInput.value);
  const fakturorVal = Number(fakturorInput.value);
  const bokforingVal = [...bokforingRadios].find(r => r.checked)?.value || 'lopande';

  omsattningText.textContent = omsattningVal.toLocaleString('sv-SE') + ' kr';
  fakturorText.textContent = fakturorVal + ' fakturor/kvitton';

  const pris = calculatePrice(omsattningVal, fakturorVal, bokforingVal);

  if (bokforingVal === 'lopande') {
    priceDisplay.textContent = pris.toLocaleString('sv-SE') + ' kr / mån';
  } else {
    priceDisplay.textContent = pris.toLocaleString('sv-SE') + ' kr / år';
  }
}

omsattningInput.addEventListener('input', updateTexts);
fakturorInput.addEventListener('input', updateTexts);
bokforingRadios.forEach(radio => radio.addEventListener('change', updateTexts));

// Kör initialt när sidan laddas
updateTexts();
