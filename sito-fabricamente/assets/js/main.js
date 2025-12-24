document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li:not(.dropdown)');
    const dropdownToggle = document.querySelector('.dropdown > a');
    const dropdownParent = document.querySelector('.dropdown');

    // Assicuriamoci che gli elementi esistano prima di aggiungere listener
    if (hamburger && navLinks) {
        // 1. APRI/CHIUDI MENU
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');

            // Animazione icona Hamburger -> X
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (icon.classList.contains('ri-menu-3-line')) {
                    icon.classList.remove('ri-menu-3-line');
                    icon.classList.add('ri-close-line');
                } else {
                    icon.classList.remove('ri-close-line');
                    icon.classList.add('ri-menu-3-line');
                }
            }
        });
    }

    if (dropdownToggle && dropdownParent) {
        // 2. GESTIONE MENU A TENDINA SU MOBILE
        dropdownToggle.addEventListener('click', (e) => {
            // Se siamo su mobile (schermo < 900px), previeni il link e apri la tendina
            if (window.innerWidth <= 900) {
                e.preventDefault();
                dropdownParent.classList.toggle('active');
            }
        });
    }

    // 3. CHIUDI MENU AL CLICK DI UN LINK NORMALE
    if (navLinks) {
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                if (hamburger) {
                    const icon = hamburger.querySelector('i');
                    if (icon) {
                        icon.classList.remove('ri-close-line');
                        icon.classList.add('ri-menu-3-line');
                    }
                }
            });
        });
    }
});