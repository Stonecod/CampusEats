const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active')
});

// ===== PARTNER / CAMPUS SLIDER =====
const partnerSlides = document.querySelector('.partner-slider .slides');
const partnerImages = document.querySelectorAll('.partner-slider .slides img');
const partnerPrev = document.querySelector('.partner-slider .prev');
const partnerNext = document.querySelector('.partner-slider .next');

let partnerIndex = 0;
const totalPartnerSlides = partnerImages.length;

function showPartnerSlide(index) {
    if (index >= totalPartnerSlides) partnerIndex = 0;
    else if (index < 0) partnerIndex = totalPartnerSlides - 1;
    else partnerIndex = index;

    const offset = -partnerIndex * 100;
    partnerSlides.style.transform = `translateX(${offset}%)`;
}

// Button events
partnerNext.addEventListener('click', () => showPartnerSlide(partnerIndex + 1));
partnerPrev.addEventListener('click', () => showPartnerSlide(partnerIndex - 1));

// Auto-slide every 5 seconds
setInterval(() => showPartnerSlide(partnerIndex + 1), 5000);
