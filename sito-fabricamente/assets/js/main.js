document.addEventListener('DOMContentLoaded', () => {

    // --- 1. GESTIONE NAVBAR & HAMBURGER (Codice Esistente) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li:not(.dropdown)');
    const dropdownToggle = document.querySelector('.dropdown > a');
    const dropdownParent = document.querySelector('.dropdown');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
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
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                dropdownParent.classList.toggle('active');
            }
        });
    }

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

    // --- 2. GESTIONE FILTRI PROGETTI (Nuovo) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Rimuovi active dagli altri bottoni
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    card.classList.remove('fade-in');
                    void card.offsetWidth; // Trigger reflow per riavviare animazione

                    if (filterValue === 'all') {
                        card.classList.remove('hidden');
                        card.classList.add('fade-in');
                    } else {
                        const cardCats = card.getAttribute('data-category');
                        if (cardCats && cardCats.includes(filterValue)) {
                            card.classList.remove('hidden');
                            card.classList.add('fade-in');
                        } else {
                            card.classList.add('hidden');
                        }
                    }
                });
            });
        });
    }

    // --- 3. GESTIONE MODALE PROGETTI (Nuovo) ---
    const modal = document.getElementById('project-modal');

    // Eseguiamo questo codice solo se la modale esiste nella pagina
    if (modal) {
        const closeModal = document.querySelector('.close-modal');
        const mTitle = document.getElementById('modal-title');
        const mCat = document.getElementById('modal-cat');
        const mImg = document.getElementById('modal-img');
        const mDesc = document.getElementById('modal-desc');

        // Click sulla Card
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                // Recupera dati
                const title = card.getAttribute('data-title');
                const cat = card.getAttribute('data-cat');
                const img = card.getAttribute('data-img');
                const desc = card.getAttribute('data-desc');

                // Popola Modale
                if(mTitle) mTitle.textContent = title;
                if(mCat) mCat.textContent = cat;
                if(mImg) mImg.src = img;
                if(mDesc) mDesc.textContent = desc;

                // Mostra Modale
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Blocca lo scroll della pagina
            });
        });

        // Chiudi con la X
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        // Chiudi cliccando fuori
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});