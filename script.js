const motoData = [
    // --- SUPERBIKE ---
    { id: 1, name: "S 1000 RR", brand: "BMW", cc: 999, hp: 210, price: 21120, type: "Superbike", image: "images/models/S 1000 RR.jpg" },
    { id: 2, name: "Panigale V4", brand: "Ducati", cc: 1103, hp: 215, price: 29890, type: "Superbike", image: "images/models/Ducati-MY25-Panigale-V4-Tricolore-overview-hero-1600x1000-01.jpg" },
    { id: 3, name: "CBR1000RR-R Fireblade SP", brand: "Honda", cc: 1000, hp: 218, price: 29700, type: "Superbike", image: "images/models/honda-cbr1000rr-r-fireblade-2024-1103130.jpg" },
    { id: 4, name: "YZF-R1", brand: "Yamaha", cc: 998, hp: 200, price: 23200, type: "Superbike", image: "images/models/maxresdefault.jpg" },
    { id: 5, name: "Ninja ZX-10R", brand: "Kawasaki", cc: 998, hp: 203, price: 22500, type: "Superbike", image: "images/models/23MY_NinjaZX10R_WEB_1920x1152px.jpg" },
    { id: 6, name: "GSX-R1000R", brand: "Suzuki", cc: 1000, hp: 202, price: 19900, type: "Superbike", image: "images/models/2zcl8ewxo39jmctwdxzfn5cduc6jxdorzissyl3u.jpg" },
    { id: 7, name: "Ninja H2 ABS", brand: "Kawasaki", cc: 998, hp: 231, price: 36000, type: "Superbike", image: "images/models/Kawasaki_Ninja_H2.jpg" },

    // --- NAKED ---
    { id: 8, name: "1390 Super Duke R", brand: "KTM", cc: 1350, hp: 190, price: 22849, type: "Naked", image: "images/models/ktm-1390-super-duke-r-2024-graphics-revel-chalk-1.jpg" },
    { id: 9, name: "Monster", brand: "Ducati", cc: 937, hp: 111, price: 12490, type: "Naked", image: "images/models/Monster-937-AG-MY22-Model-Preview-1050x650-v06.jpg" },
    { id: 10, name: "MT-09", brand: "Yamaha", cc: 890, hp: 119, price: 11299, type: "Naked", image: "images/models/2024-Yamaha-MT09DX-35-EU-Icon_Performance-Studio-001-03.jpg" },
    { id: 11, name: "Street Triple RS", brand: "Triumph", cc: 765, hp: 128, price: 13195, type: "Naked", image: "images/models/Triumph_Street-Triple-RS-2020-6.jpg" },
    { id: 12, name: "Z900RS", brand: "Kawasaki", cc: 948, hp: 111, price: 13500, type: "Naked", image: "images/models/Z900rs.jpg" },
    { id: 13, name: "CB750 Hornet", brand: "Honda", cc: 755, hp: 92, price: 7900, type: "Naked", image: "images/models/Square-Honda-CB750-Hornet-04.jpg" },

    // --- TRAIL ---
    { id: 14, name: "R 1300 GS", brand: "BMW", cc: 1300, hp: 145, price: 21290, type: "Trail", image: "images/models/BMW-1300-GS_3.jpg" },
    { id: 15, name: "CRF1100L Africa Twin", brand: "Honda", cc: 1084, hp: 102, price: 15500, type: "Trail", image: "images/models/Honda-Africa-Twin-Adventure-Sports_02.jpg" },
    { id: 16, name: "1290 Super Adventure R", brand: "KTM", cc: 1301, hp: 160, price: 21500, type: "Trail", image: "images/models/ktm 1290.jpg" },
    { id: 17, name: "V-Strom 1050DE", brand: "Suzuki", cc: 1037, hp: 107, price: 15999, type: "Trail", image: "images/models/Imagen-de-WhatsApp-2025-12-01-a-las-15.38.13_4ecd610d.jpg" },
    { id: 18, name: "Tiger 1200 GT", brand: "Triumph", cc: 1160, hp: 150, price: 19650, type: "Trail", image: "images/models/images.jpg" },
    { id: 19, name: "Multistrada V4", brand: "Ducati", cc: 1158, hp: 170, price: 20990, type: "Trail", image: "images/models/f.elconfidencial.com_original_2ab_4b7_805_2ab4b78054bc0dad2fb1fc1bb3a617c3.jpg" },

    // --- CUSTOM / RETRO ---
    { id: 20, name: "Fat Boy 114", brand: "Harley-Davidson", cc: 1868, hp: 95, price: 28500, type: "Custom", image: "images/models/fatboy.jpg" },
    { id: 21, name: "Scout Bobber", brand: "Indian", cc: 1133, hp: 100, price: 15690, type: "Custom", image: "images/models/scout bobber.jpg" },
    { id: 22, name: "Bonneville T120", brand: "Triumph", cc: 1200, hp: 80, price: 14250, type: "Retro", image: "images/models/Triumph_Bonneville_IMG_2733.jpg" },
    { id: 23, name: "Continental GT 650", brand: "Royal Enfield", cc: 648, hp: 47, price: 7400, type: "Retro", image: "images/models/royal enfield continental.jpg" },
    { id: 24, name: "Scrambler Icon", brand: "Ducati", cc: 803, hp: 73, price: 10990, type: "Retro", image: "images/models/Scrambler-single-bike-icon-focus-1080x1080-1.jpg" },
    { id: 25, name: "R 18", brand: "BMW", cc: 1802, hp: 91, price: 22900, type: "Custom", image: "images/models/BMW R18.jpg" }
];

let photoDatabase = null;

// Fetch Photo Database
async function initPhotoDatabase() {
    try {
        const response = await fetch('data/motorcycle_photos.json');
        photoDatabase = await response.json();
    } catch (error) {
        console.error("Error loading photo database:", error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await initPhotoDatabase();

    const motoGrid = document.getElementById('moto-grid');
    const template = document.getElementById('moto-card-template');
    const searchInput = document.getElementById('moto-search');
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');

    // --- I18N LOGIC ---
    const translations = {
        es: {
            navHome: "Inicio",
            navComp: "Comparador",
            navNews: "Noticias",
            navEquip: "Equipamiento",
            heroTitle: "Domina el asfalto",
            heroSub: "La comparativa definitiva para apasionados de las dos ruedas.",
            btnStart: "Empezar a comparar",
            btnFeatured: "Ver destacadas",
            sectionTitle: "Encuentra tu moto ideal",
            searchPlaceholder: "Busca por marca o modelo...",
            loader: "Cargando máquinas...",
            traySelected: "motos seleccionadas",
            btnCompareNow: "Comparar ahora",
            btnClear: "Limpiar",
            footerCopy: "&copy; 2026 MotosComparador. Diseñado para la velocidad.",
            compModalTitle: "Comparativa Técnica",
            specMotor: "Motor",
            specPower: "Potencia",
            btnGallery: "Galería",
            btnCompare: "Comparar",
            alertMax: "Puedes comparar un máximo de 3 motocicletas.",
            tableSpec: "Especificaciones",
            tablePrice: "Precio",
            tableCC: "Cilindrada",
            tableHP: "Potencia",
            tableType: "Tipo",
            noResults: "No se encontraron máquinas...",
            btnEquip: "Comprar Equipamiento",
            equipUrl: "https://www.motocard.com/es",
            btnUsed: "Motos de Ocasión",
            usedUrl: "https://www.moto-ocasion.com/",
            newsTitle: "Últimas Noticias MotoGP 2026",
            readMore: "Leer más",
            btnNews: "Noticias MotoGP",
            navAcc: "Accesibilidad",
            navTrends: "Tendencias",
            trendsHeroTitle: "Tendencias <span>Globales</span>",
            trendsHeroSub: "Análisis diario de lo que mueve el mundo hoy a través de los datos de Google Trends.",
            trendsSecTitle: "Lo más buscado hoy",
            trendsRic: "Búsquedas",
            trendsExplore: "Explorar Datos"
        },
        it: {
            navHome: "Inizio",
            navComp: "Comparatore",
            navNews: "Notizie",
            navEquip: "Equipaggiamento",
            heroTitle: "Domina l'asfalto",
            heroSub: "Il confronto definitivo per gli appassionati delle due ruote.",
            btnStart: "Inizia a confrontare",
            btnFeatured: "Vedi in evidenza",
            sectionTitle: "Trova la tua moto ideale",
            searchPlaceholder: "Cerca per marca o modello...",
            loader: "Caricamento macchine...",
            traySelected: "moto selezionate",
            btnCompareNow: "Confronta ora",
            btnClear: "Pulisci",
            footerCopy: "&copy; 2026 MotosComparador. Progettato per la velocità.",
            compModalTitle: "Confronto Tecnico",
            specMotor: "Motore",
            specPower: "Potenza",
            btnGallery: "Galleria",
            btnCompare: "Confronta",
            alertMax: "Puoi confrontare un massimo di 3 motociclette.",
            tableSpec: "Specifiche",
            tablePrice: "Prezzo",
            tableCC: "Cilindrata",
            tableHP: "Potenza",
            tableType: "Tipo",
            noResults: "Nessuna macchina trovata...",
            btnEquip: "Compra Equipaggiamento",
            equipUrl: "https://www.motostorm.it/it/",
            btnUsed: "Moto Usate",
            usedUrl: "https://www.moto.it/moto-usate",
            newsTitle: "Ultime Notizie MotoGP 2026",
            readMore: "Leggi di più",
            btnNews: "Notizie MotoGP",
            navAcc: "Accessibilità",
            navTrends: "Tendenze",
            trendsHeroTitle: "Tendenze <span>Globali</span>",
            trendsHeroSub: "Analisi quotidiana di ciò che sta muovendo il mondo oggi attraverso i dati di Google Trends.",
            trendsSecTitle: "Cosa si cerca oggi",
            trendsRic: "Ricerche",
            trendsExplore: "Esplora Dati"
        }
    };

    let currentLang = localStorage.getItem('motosLang') || 'es';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('motosLang', lang);
        document.documentElement.lang = lang;
        if (langText) langText.textContent = lang.toUpperCase();

        const t = translations[lang];

        // Update static elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.innerHTML = t[key];
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) el.placeholder = t[key];
        });

        // Update External links
        const equipNav = document.querySelector('a[data-i18n="navEquip"]');
        if (equipNav) equipNav.href = t.equipUrl;

        const equipBtn = document.querySelector('a[data-i18n="btnEquip"]');
        if (equipBtn) equipBtn.href = t.equipUrl;

        const usedBtn = document.querySelector('a[data-i18n="btnUsed"]');
        if (usedBtn) usedBtn.href = t.usedUrl;

        // Refresh dynamic content SAFELY
        if (document.getElementById('moto-grid')) filterMotos();
        if (document.getElementById('news-grid')) fetchNews();
        if (document.getElementById('trends-container')) fetchTrends();

        const compModal = document.getElementById('comparison-modal');
        if (compModal && compModal.classList.contains('active')) {
            showComparison();
        }
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const nextLang = currentLang === 'it' ? 'es' : 'it';
            applyLanguage(nextLang);
        });
    }

    // Modal Elements
    const modal = document.getElementById('gallery-modal');
    const modalClose = document.getElementById('modal-close');
    const modalImage = document.getElementById('modal-main-image');
    const modalThumbnails = document.getElementById('modal-thumbnails');
    const modalTitle = document.getElementById('modal-title');

    // --- COMPARATOR LOGIC ---
    let compareList = [];

    function updateComparisonTray() {
        const tray = document.getElementById('comparison-tray');
        const countSpan = document.getElementById('tray-count');
        const trayItems = document.getElementById('tray-items');
        const compareBtn = document.getElementById('btn-compare-now');

        countSpan.textContent = compareList.length;
        trayItems.innerHTML = '';

        if (compareList.length > 0) {
            tray.classList.add('active');
        } else {
            tray.classList.remove('active');
        }

        compareList.forEach(moto => {
            const item = document.createElement('div');
            item.className = 'tray-item';
            item.innerHTML = `
                <img src="${moto.image}" alt="${moto.brand} ${moto.name}" loading="lazy">
                <div class="tray-item-remove" data-id="${moto.id}">×</div>
            `;
            item.querySelector('.tray-item-remove').addEventListener('click', () => {
                toggleCompare(moto);
            });
            trayItems.appendChild(item);
        });

        compareBtn.disabled = compareList.length < 2;

        // Update all card buttons
        document.querySelectorAll('.btn-compare-add').forEach(btn => {
            const cardId = parseInt(btn.closest('.moto-card').dataset.id);
            if (compareList.some(m => m.id === cardId)) {
                btn.classList.add('selected');
                btn.textContent = '×';
            } else {
                btn.classList.remove('selected');
                btn.textContent = '+';
            }
        });
    }

    function toggleCompare(moto) {
        const index = compareList.findIndex(m => m.id === moto.id);
        if (index > -1) {
            compareList.splice(index, 1);
        } else if (compareList.length < 3) {
            compareList.push(moto);
        } else {
            alert(translations[currentLang].alertMax);
            return;
        }
        updateComparisonTray();
    }

    function showComparison() {
        if (compareList.length < 2) return;

        const container = document.getElementById('comparison-table-container');
        const modal = document.getElementById('comparison-modal');

        // Calculate "Best" values
        const minPrice = Math.min(...compareList.map(m => m.price));
        const maxHp = Math.max(...compareList.map(m => m.hp));
        const maxCc = Math.max(...compareList.map(m => m.cc));

        const t = translations[currentLang];
        let html = `<table class="comparison-table"><thead><tr><th>${t.tableSpec}</th>`;

        compareList.forEach(moto => {
            html += `
                <th>
                    <img src="${moto.image}" class="compare-moto-img">
                    <div class="compare-moto-name">${moto.brand} ${moto.name}</div>
                </th>
            `;
        });

        html += `</tr></thead><tbody>`;

        // Row: Price
        html += `<tr><td>${t.tablePrice}</td>`;
        compareList.forEach(moto => {
            const isBest = moto.price === minPrice;
            html += `<td class="${isBest ? 'best-value' : ''}">${moto.price.toLocaleString()}€</td>`;
        });
        html += `</tr>`;

        // Row: CC
        html += `<tr><td>${t.tableCC}</td>`;
        compareList.forEach(moto => {
            const isBest = moto.cc === maxCc;
            html += `<td class="${isBest ? 'best-value' : ''}">${moto.cc} cc</td>`;
        });
        html += `</tr>`;

        // Row: HP
        html += `<tr><td>${t.tableHP}</td>`;
        compareList.forEach(moto => {
            const isBest = moto.hp === maxHp;
            html += `<td class="${isBest ? 'best-value' : ''}">${moto.hp} CV</td>`;
        });
        html += `</tr>`;

        // Row: Type
        html += `<tr><td>${t.tableType}</td>`;
        compareList.forEach(moto => {
            html += `<td>${moto.type}</td>`;
        });
        html += `</tr>`;

        html += `</tbody></table>`;
        container.innerHTML = html;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // --- NEWS LOGIC ---
    async function fetchNews() {
        const newsGrid = document.getElementById('news-grid');
        try {
            const response = await fetch('news.json');
            if (!response.ok) throw new Error("News source not found");
            const news = await response.json();
            renderNews(news);
        } catch (err) {
            console.warn("Could not load MotoGP news:", err);
            newsGrid.innerHTML = '<div class="no-results">News update in progress...</div>';
        }
    }

    function renderNews(newsItems) {
        const newsGrid = document.getElementById('news-grid');
        const t = translations[currentLang];
        newsGrid.innerHTML = '';

        newsItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'news-card glass-card';
            card.innerHTML = `
                <div class="news-content">
                    <h3 class="news-card-title">${item.title}</h3>
                    <p class="news-desc">${item.description}</p>
                    <a href="${item.link}" target="_blank" class="news-link">${t.readMore}</a>
                </div>
            `;
            newsGrid.appendChild(card);
        });
    }
    // Modal Logic (Gallery)
    function openGallery(moto) {
        if (!photoDatabase) return;

        let photos = [];
        for (const category in photoDatabase.categories) {
            const found = photoDatabase.categories[category].find(m => m.modelo === moto.name && m.marca === moto.brand);
            if (found) {
                photos = found.fotos;
                break;
            }
        }

        if (photos.length === 0) {
            photos = [moto.image];
        }

        modalTitle.textContent = `${moto.brand} ${moto.name}`;
        modalImage.src = photos[0];

        modalThumbnails.innerHTML = '';
        photos.forEach((photoUrl, index) => {
            const thumb = document.createElement('img');
            thumb.src = photoUrl;
            thumb.classList.add('gallery-thumb');
            if (index === 0) thumb.classList.add('active');

            thumb.addEventListener('click', () => {
                modalImage.src = photoUrl;
                document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            modalThumbnails.appendChild(thumb);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- RENDER LOGIC UPDATE ---
    function renderMotos(motos) {
        motoGrid.innerHTML = '';
        const t = translations[currentLang];
        if (motos.length === 0) {
            motoGrid.innerHTML = `<div class="no-results">${t.noResults}</div>`;
            return;
        }

        motos.forEach(moto => {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector('.moto-card');
            card.dataset.id = moto.id;

            const img = clone.querySelector('img');
            img.src = moto.image;
            img.alt = moto.name;

            clone.querySelector('.badge-price').textContent = `${moto.price.toLocaleString()}€`;
            clone.querySelector('.moto-name').textContent = moto.name;
            clone.querySelector('.moto-brand').textContent = moto.brand;

            const specLabels = clone.querySelectorAll('.spec-label');
            specLabels[0].textContent = t.specMotor;
            specLabels[1].textContent = t.specPower;

            clone.querySelector('.spec-cc').textContent = `${moto.cc}cc`;
            clone.querySelector('.spec-hp').textContent = `${moto.hp} CV`;

            const galleryBtn = clone.querySelector('.btn-gallery');
            galleryBtn.textContent = t.btnGallery;
            galleryBtn.addEventListener('click', () => openGallery(moto));

            const compareBtn = clone.querySelector('.btn-compare');
            compareBtn.textContent = t.btnCompare;
            compareBtn.addEventListener('click', () => toggleCompare(moto));

            const addBtn = clone.querySelector('.btn-compare-add');
            addBtn.addEventListener('click', () => toggleCompare(moto));

            motoGrid.appendChild(clone);
        });

        updateComparisonTray(); // Keep state across renders
    }

    // --- EVENT LISTENERS ---
    const btnCompareNow = document.getElementById('btn-compare-now');
    if (btnCompareNow) btnCompareNow.addEventListener('click', showComparison);

    const btnClearCompare = document.getElementById('btn-clear-compare');
    if (btnClearCompare) btnClearCompare.addEventListener('click', () => {
        compareList = [];
        updateComparisonTray();
    });

    const compareModalClose = document.getElementById('compare-modal-close');
    if (compareModalClose) compareModalClose.addEventListener('click', () => {
        document.getElementById('comparison-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // ... (rest of the code: filter, theme toggle, initial render)

    // Sorting & Filtering
    function filterMotos() {
        const query = searchInput.value.toLowerCase();

        let filtered = motoData.filter(moto =>
            moto.name.toLowerCase().includes(query) ||
            moto.brand.toLowerCase().includes(query)
        );

        renderMotos(filtered);
    }

    // --- ACCESSIBILITY WINDOW LOGIC ---
    const accModal = document.getElementById('acc-modal');
    const accBtn = document.getElementById('acc-btn-simple');
    const accClose = document.getElementById('acc-modal-close');
    const btnContrast = document.getElementById('btn-contrast-new');
    const btnTextSize = document.getElementById('btn-text-size-new');
    const btnDyslexic = document.getElementById('btn-dyslexic-new');

    if (accBtn) {
        accBtn.addEventListener('click', () => {
            accModal.classList.toggle('active');
        });
    }

    if (accClose) {
        accClose.addEventListener('click', () => {
            accModal.classList.remove('active');
        });
    }

    function toggleAccOption(btn, className) {
        const isActive = document.body.classList.toggle(className);
        if (btn) btn.classList.toggle('active', isActive);
        localStorage.setItem(className, isActive);
    }

    if (btnContrast) btnContrast.addEventListener('click', () => toggleAccOption(btnContrast, 'acc-high-contrast'));
    if (btnTextSize) btnTextSize.addEventListener('click', () => toggleAccOption(btnTextSize, 'acc-large-text'));
    if (btnDyslexic) btnDyslexic.addEventListener('click', () => toggleAccOption(btnDyslexic, 'acc-dyslexic'));

    // Loading states
    if (localStorage.getItem('acc-high-contrast') === 'true') {
        document.body.classList.add('acc-high-contrast');
        if (btnContrast) btnContrast.classList.add('active');
    }
    if (localStorage.getItem('acc-large-text') === 'true') {
        document.body.classList.add('acc-large-text');
        if (btnTextSize) btnTextSize.classList.add('active');
    }
    if (localStorage.getItem('acc-dyslexic') === 'true') {
        document.body.classList.add('acc-dyslexic');
        if (btnDyslexic) btnDyslexic.classList.add('active');
    }

    // Add translations
    translations.es.accTitle = "Accesibilidad";
    translations.es.accContrast = "Alto Contraste";
    translations.es.accTextSize = "Texto Grande";
    translations.es.accDyslexic = "Fuente Lectura";

    translations.it.accTitle = "Accessibilità";
    translations.it.accContrast = "Alto Contrasto";
    translations.it.accTextSize = "Testo Grande";
    translations.it.accDyslexic = "Caratte Lettura";

    if (searchInput) searchInput.addEventListener('input', filterMotos);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
        });
    }

    // --- TRENDS LOGIC ---
    async function fetchTrends() {
        const trendsContainer = document.getElementById('trends-container');
        if (!trendsContainer) return;

        try {
            const response = await fetch('trends.json');
            if (!response.ok) throw new Error("Trends source not found");
            const data = await response.json();

            const dateSpan = document.getElementById('trends-date');
            if (dateSpan && data.date) dateSpan.textContent = data.date;

            renderTrends(data.trends);
        } catch (err) {
            console.warn("Could not load Trends:", err);
            trendsContainer.innerHTML = '<div class="no-results">Trends update in progress...</div>';
        }
    }

    function renderTrends(trends) {
        const container = document.getElementById('trends-container');
        const t = translations[currentLang];
        container.innerHTML = '';

        trends.forEach(item => {
            const card = document.createElement('div');
            card.className = 'glass-card trend-card';
            card.style.padding = '2.5rem';
            card.style.marginBottom = '2rem';

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.8rem; color: var(--primary); margin: 0;"># ${item.title}</h3>
                    <span style="background: rgba(255,255,255,0.1); padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.8rem; font-weight: 800;">${item.traffic}+ ${t.trendsRic}</span>
                </div>
                <p style="font-size: 1.1rem; line-height: 1.8; opacity: 0.9;">${item.paragraph}</p>
                <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
                    <a href="${item.explore_link}" target="_blank" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.8rem;">${t.trendsExplore}</a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    applyLanguage(currentLang);
    if (document.getElementById('moto-grid')) renderMotos(motoData);
    if (document.getElementById('trends-container')) fetchTrends();

    // Initialize Global Features
    checkAdBlock();
    initOffers();
});
/**
 * AdBlock Solution: Fallback for promotional content
 */
function checkAdBlock() {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'ad-banner adsbox ads google-ads-container';
    testAd.style.position = 'absolute';
    testAd.style.left = '-999px';
    document.body.appendChild(testAd);

    window.setTimeout(() => {
        if (testAd.offsetHeight === 0) {
            console.log('AdBlock detected. Showing in-house fallbacks.');
            document.querySelectorAll('.fallback-promo').forEach(el => el.style.display = 'block');
        }
        testAd.remove();
    }, 100);
}

/**
 * Dynamic Offers Logic: Seasonal & Daily Deals
 */
const seasonalOffers = [
    { start: "03-01", end: "05-31", title: "Oferta de Primavera", desc: "20% dto. en equipamiento de lluvia y guantes ligeros." },
    { start: "06-01", end: "08-31", title: "Oferta de Verano", desc: "Chaquetas ventiladas con 15% de descuento directo." },
    { start: "11-01", end: "12-31", title: "Oferta de Invierno", desc: "Protección térmica y puños calefactables al mejor precio." }
];

function initOffers() {
    const offersContainer = document.getElementById('dynamic-offers');
    if (!offersContainer) return;

    const today = new Date();
    const mmdd = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    let currentOffer = { title: "Oferta Diaria", desc: "¡10% de descuento en tu primera comparación hoy!" };

    for (const offer of seasonalOffers) {
        if (mmdd >= offer.start && mmdd <= offer.end) {
            currentOffer = offer;
            break;
        }
    }

    offersContainer.innerHTML = `
        <div class="glass-card promo-spotlight">
            <span class="promo-tag">ESPECIAL</span>
            <h3>${currentOffer.title}</h3>
            <p>${currentOffer.desc}</p>
            <a href="equipamiento.html" class="btn btn-primary btn-sm">Ver Ofertas</a>
        </div>
    `;
}

