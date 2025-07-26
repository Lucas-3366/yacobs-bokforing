// Modal för att visa mer info om tjänster
const serviceCards = document.querySelectorAll('.service-card');
const modal = document.getElementById('info-modal');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const info = card.getAttribute('data-info');
        modalDesc.textContent = info;
        modal.classList.remove('hidden');
        closeBtn.focus();
    });

    card.addEventListener('keydown', e => {
        if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    serviceCards[0].focus();
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.add('hidden');
        serviceCards[0].focus();
    }
});

// Smooth scroll för nav länkar
document.querySelectorAll('a.nav-link, .btn-secondary, .btn-primary.hero-cta').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            targetSection.scrollIntoView({behavior: 'smooth'});
        }
    });
});
