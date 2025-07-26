// Popup (Modal) för "Läs mer"
const serviceCards = document.querySelectorAll('.service-card');
const modal = document.getElementById('info-modal');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');

// Visa modal med rätt info
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const info = card.getAttribute('data-info');
        modalDesc.textContent = info;
        modal.classList.remove('hidden');
        closeBtn.focus();
    });

    // Tillgänglighet – öppna med Enter/Space
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// Stäng modal
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    serviceCards[0].focus();
});

// Klick utanför = stäng modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        serviceCards[0].focus();
    }
});

// Smooth scroll för nav-länkar och knappar
document.querySelectorAll('a.nav-link, .btn-secondary, .btn-primary.hero-cta').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Fokusstil vid tabb-navigering
document.body.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});
