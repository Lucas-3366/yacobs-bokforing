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

document.addEventListener("DOMContentLoaded", () => {
  const omsattningEl = document.getElementById("omsattning");
  const fakturorEl = document.getElementById("fakturor");
  const tjanstEl = document.getElementById("tjanst");
  const valdaValEl = document.getElementById("valda-val");
  const prisEl = document.getElementById("pris");
  const knapp = document.getElementById("be-offert-btn");

  const priser = {
    omsattning: {
      low: { lopande: [2000, 4000], arsredovisning: [4000, 6000] },
      mid: { lopande: [4000, 8000], arsredovisning: [6000, 10000] },
      high: { lopande: [8000, 15000], arsredovisning: [10000, 20000] }
    },
    fakturor: {
      low: 1,
      mid: 1.3,
      high: 1.6
    }
  };

  function uppdateraPris() {
    const omsattning = omsattningEl.value;
    const fakturor = fakturorEl.value;
    const tjanst = tjanstEl.value;

    // Baspris spann
    let basPris = priser.omsattning[omsattning][tjanst]; // ex: [2000, 4000]

    // Multiplicera med fakturor multiplikator
    let minPris = Math.round(basPris[0] * priser.fakturor[fakturor]);
    let maxPris = Math.round(basPris[1] * priser.fakturor[fakturor]);

    // Visa val och pris
    const omsattningText = omsattningEl.options[omsattningEl.selectedIndex].text;
    const fakturorText = fakturorEl.options[fakturorEl.selectedIndex].text;
    const tjanstText = tjanstEl.options[tjanstEl.selectedIndex].text;

    valdaValEl.textContent = `${omsattningText}, ${fakturorText} fakturor/mån, ${tjanstText}`;
    prisEl.textContent = `${minPris.toLocaleString()} – ${maxPris.toLocaleString()} SEK`;
  }

  uppdateraPris();

  omsattningEl.addEventListener("change", uppdateraPris);
  fakturorEl.addEventListener("change", uppdateraPris);
  tjanstEl.addEventListener("change", uppdateraPris);

  knapp.addEventListener("click", () => {
    // Scrolla ner till kontaktsektion (antag att kontakt har id="kontakt")
    const kontaktSektion = document.getElementById("kontakt");
    if (kontaktSektion) {
      kontaktSektion.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Kontaktsektion saknas på sidan.");
    }
  });
});
