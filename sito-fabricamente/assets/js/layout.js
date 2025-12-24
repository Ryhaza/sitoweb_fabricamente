/* assets/js/layout.js */

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. DEFINIZIONE DELL'HEADER (NAVBAR) ---
    const headerHTML = `
    <nav>
        <a href="index.html" class="logo">
            <img src="assets/img/logo_fabricamente.png" alt="Fabricamente Logo">
        </a>

        <div class="hamburger"><i class="ri-menu-3-line"></i></div>

        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#chi-siamo">Chi Siamo</a></li>
            
            <li class="dropdown">
                <a href="#">Servizi <i class="ri-arrow-down-s-line"></i></a>
                <div class="dropdown-content">
                    <a href="formazione.html">Formazione e Consulenza</a>
                    <a href="coaching.html">Coaching</a>
                    <a href="universita.html">Orientamento Universitario</a>
                    <a href="italiano.html">Corsi Italiano Stranieri</a>
                </div>
            </li>

            <li><a href="carta-qualita.html">Carta Qualità</a></li>
            <li><a href="index.html#progetti">Progetti</a></li>
            <li><a href="index.html#contatti" class="btn btn-primary" style="padding: 10px 20px;">Contattaci</a></li>
        </ul>
    </nav>
    `;

    // --- 2. DEFINIZIONE DEL FOOTER ---
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo" style="margin-bottom: 20px;">
                        <img src="assets/img/logo_fabricamente.png" alt="Logo" style="height: 40px; opacity: 0.8;">
                    </div>
                    <p style="font-size: 0.9rem; line-height: 1.6;">
                        Formazione, consulenza e orientamento universitario. La tua crescita è la nostra missione.
                    </p>
                </div>
                <div class="footer-col">
                    <h4>Link Rapidi</h4>
                    <ul>
                        <li><a href="formazione.html">Formazione Aziendale</a></li>
                        <li><a href="coaching.html">Coaching</a></li>
                        <li><a href="universita.html">Università Telematiche</a></li>
                        <li><a href="italiano.html">Italiano per Stranieri</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contatti</h4>
                    <ul>
                        <li><i class="ri-map-pin-line" style="color:var(--primary)"></i> Via Roma 10, Città</li>
                        <li><i class="ri-mail-line" style="color:var(--primary)"></i> info@fabricamente.it</li>
                        <li><i class="ri-phone-line" style="color:var(--primary)"></i> +39 012 345 6789</li>
                    </ul>
                </div>
            </div>
            <div style="text-align: center; padding-top: 40px; border-top: 1px solid var(--border);">
                <p>&copy; 2025 Fabricamente. Tutti i diritti riservati. - <a href="privacy.html" style="text-decoration: underline;">Privacy & Cookie Policy</a></p>
            </div>
        </div>
    </footer>
    `;

    // --- 3. INIEZIONE NELLA PAGINA ---

    // Inseriamo l'header all'inizio del body (o dentro un div specifico se preferisci)
    const headerContainer = document.getElementById('header-placeholder');
    if (headerContainer) headerContainer.innerHTML = headerHTML;

    // Inseriamo il footer alla fine
    const footerContainer = document.getElementById('footer-placeholder');
    if (footerContainer) footerContainer.innerHTML = footerHTML;


    // --- 4. LOGICA MENU MOBILE (Spostata qui da main.js per sicurezza) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggle = document.querySelector('.dropdown > a');
    const dropdownParent = document.querySelector('.dropdown');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('ri-menu-3-line')) {
                icon.classList.remove('ri-menu-3-line');
                icon.classList.add('ri-close-line');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-3-line');
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

    // --- 5. EVIDENZIA PAGINA CORRENTE ---
    const currentPage = window.location.pathname.split("/").pop(); // es. 'coaching.html'
    const menuLinks = document.querySelectorAll('.nav-links a');

    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.style.color = "var(--primary)";
            link.style.fontWeight = "700";
        }
    });

});