// Element
const omsattningInput = document.getElementById('omsattning');
const fakturorInput = document.getElementById('fakturor');
const omsattningText = document.getElementById('omsattning-text');
const fakturorText = document.getElementById('fakturor-text');
const priceDisplay = document.getElementById('price');
const bokforingRadios = document.querySelectorAll('input[name="bokforing"]');

// Priser enligt tabell
const priser = {
  "1-2": {
    "10-20": { arsredovisning: 4000, lopande: 2000 },
    "50-100": { arsredovisning: 6000, lopande: 3000 },
    "200+": { arsredovisning: 8000, lopande: 4000 },
  },
  "2-10": {
    "10-20": { arsredovisning: 6000, lopande: 3000 },
    "50-100": { arsredovisning: 8000, lopande: 5000 },
    "200+": { arsredovisning: 10000, lopande: 6000 },
  },
  "10+": {
    "10-20": { arsredovisning: 8000, lopande: 4000 },
    "50-100": { arsredovisning: 11000, lopande: 6000 },
    "200+": { arsredovisning: 15000, lopande: 8000 },
  }
};

// Funktioner för kategorier
function getOmsattningKategori(v) {
  if (v <= 2000000) return "1-2";
  if (v <= 10000000) return "2-10";
  return "10+";
}

function getFakturorKategori(v) {
  if (v <= 20) return "10-20";
  if (v <= 100) return "50-100";
  return "200+";
}

// Uppdatera text som visas under sliders
function updateTextLabels() {
  const omsValue = +omsattningInput.value;
  const faktValue = +fakturorInput.value;

  omsattningText.textContent = (() => {
    if (omsValue <= 2000000) return "1–2 miljoner SEK";
    if (omsValue <= 10000000) return "2–10 miljoner SEK";
    return "10+ miljoner SEK";
  })();

  fakturorText.textContent = (() => {
    if (faktValue <= 20) return "10–20 fakturor";
    if (faktValue <= 100) return "50–100 fakturor";
    return "200+ fakturor";
  })();
}

// Uppdatera priset
function updatePrice() {
  const omsKategori = getOmsattningKategori(+omsattningInput.value);
  const faktKategori = getFakturorKategori(+fakturorInput.value);
  const selectedType = [...bokforingRadios].find(r => r.checked).value;

  const prisObj = priser[omsKategori][faktKategori];

  if (selectedType === 'lopande') {
    priceDisplay.textContent = prisObj.lopande + " kr/månad";
  } else {
    priceDisplay.textContent = prisObj.arsredovisning + " kr/år";
  }
}

// Kör vid förändring
function onInputChange() {
  updateTextLabels();
  updatePrice();
}

// Eventlisteners
omsattningInput.addEventListener('input', onInputChange);
fakturorInput.addEventListener('input', onInputChange);
bokforingRadios.forEach(radio => radio.addEventListener('change', onInputChange));

// Initiera vid laddning
onInputChange();

// Hamburger-meny funktionalitet (om du använder den)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}
