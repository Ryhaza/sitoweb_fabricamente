document.addEventListener('DOMContentLoaded', () => {

    // --- 1. GESTIONE FILTRI PROGETTI ---
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
                    // Resetta animazione
                    card.classList.remove('fade-in');
                    void card.offsetWidth; // Trigger reflow per riavviare animazione

                    if (filterValue === 'all') {
                        card.classList.remove('hidden');
                        card.classList.add('fade-in');
                    } else {
                        const cardCats = card.getAttribute('data-category');
                        // Controllo se cardCats esiste per evitare errori su card senza categoria
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

    // --- 2. GESTIONE MODALE (POPUP) ---
    const modal = document.getElementById('project-modal');

    // Eseguiamo questo codice solo se la modale esiste nella pagina
    if (modal) {
        const closeModal = document.querySelector('.close-modal');
        const mTitle = document.getElementById('modal-title');
        const mCat = document.getElementById('modal-cat');
        const mImg = document.getElementById('modal-img');
        const mDesc = document.getElementById('modal-desc');

        // Click sulla Card per aprire la modale
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                // Recupera dati dagli attributi HTML
                const title = card.getAttribute('data-title');
                const cat = card.getAttribute('data-cat');
                const img = card.getAttribute('data-img');
                const desc = card.getAttribute('data-desc');

                // Popola la Modale
                if(mTitle) mTitle.textContent = title;
                if(mCat) mCat.textContent = cat;
                if(mImg) mImg.src = img;
                if(mDesc) mDesc.textContent = desc;

                // Mostra la Modale
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Blocca lo scroll della pagina sotto
            });
        });

        // Chiudi con la X
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        // Chiudi cliccando fuori dal box
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

/* =========================================
   LANGUAGE SWITCHER (Globale)
   ========================================= */

// Questa funzione deve stare fuori da document.addEventListener per essere vista dall'HTML
function setLanguage(lang) {
    // 1. Aggiorna lo stato visivo dei bottoni
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        // Rimuove 'active' da tutti
        btn.classList.remove('active');
        // Aggiunge 'active' solo se il testo del bottone corrisponde alla lingua selezionata
        if(btn.innerText.trim().toUpperCase() === lang.toUpperCase()) {
            btn.classList.add('active');
        }
    });

    // 2. Cerca tutti gli elementi traducibili e cambia il testo
    const elements = document.querySelectorAll('.translatable');

    elements.forEach(el => {
        // Recupera l'attributo data-lingua corrispondente
        const text = el.getAttribute('data-' + lang);

        if (text) {
            el.innerHTML = text; // Cambia il testo

            // 3. GESTIONE ARABO (Right-to-Left)
            if (lang === 'ar') {
                el.setAttribute('dir', 'rtl');
                el.style.fontFamily = "'Tajawal', sans-serif";
                el.style.textAlign = "right";
            } else {
                el.removeAttribute('dir');
                el.style.fontFamily = "";
                el.style.textAlign = "";
            }
        }
    });
}