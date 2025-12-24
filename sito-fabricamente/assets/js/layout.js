document.addEventListener("DOMContentLoaded", () => {

    // --- 1. GESTIONE MENU MOBILE (Hamburger) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggle = document.querySelector('.dropdown > a');
    const dropdownParent = document.querySelector('.dropdown');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');

            // Animazione Icona
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

    // Gestione click sul dropdown in mobile
    if (dropdownToggle && dropdownParent) {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                dropdownParent.classList.toggle('active');
            }
        });
    }

    // --- 2. EVIDENZIA PAGINA CORRENTE ---
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll('.nav-links a');

    menuLinks.forEach(link => {
        // Rimuovi eventuali active precedenti
        link.style.color = "";
        link.style.fontWeight = "";

        const linkHref = link.getAttribute('href');
        // Se il link corrisponde alla pagina attuale (es. "coaching.html")
        if (linkHref === currentPage) {
            link.style.color = "var(--primary)";
            link.style.fontWeight = "700";
        }
    });

    // --- 3. COOKIEBOT INTEGRATION ---
    // Carichiamo Cookiebot dinamicamente se non è stato messo nell'head
    if (!document.getElementById('Cookiebot')) {
        const scriptBanner = document.createElement('script');
        scriptBanner.id = 'Cookiebot';
        scriptBanner.src = 'https://consent.cookiebot.com/uc.js';
        scriptBanner.setAttribute('data-cbid', 'd835c56b-14bd-4fa3-99dc-661a1ab3457e');
        scriptBanner.setAttribute('data-blockingmode', 'auto');
        scriptBanner.type = 'text/javascript';
        document.head.prepend(scriptBanner);
    }
});