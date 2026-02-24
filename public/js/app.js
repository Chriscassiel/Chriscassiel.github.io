document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('app');
    const links = document.querySelectorAll('a[data-route]');
    const themeBtn = document.getElementById('theme-btn');

    // Routing Logic
    const routes = {
        '/': 'tpl-home',
        '/comparador': 'tpl-comparador',
        '/equipamiento': 'tpl-equipamiento',
        '/segunda-mano': 'tpl-segunda-mano',
        '/motogp': 'tpl-motogp',
        '/moto': 'tpl-moto-detail',
        '/noticia': 'tpl-news-detail'
    };

    const navigate = async (path) => {
        window.history.pushState({}, "", path);
        const pathParts = path.split('/').filter(p => p);
        const baseRoute = pathParts.length > 0 ? `/${pathParts[0]}` : '/';
        const templateId = routes[baseRoute] || 'tpl-home';

        render(templateId, pathParts);
    };

    const render = async (tplId, parts) => {
        const template = document.getElementById(tplId);
        if (!template) return;

        const clone = template.content.cloneNode(true);
        main.innerHTML = '';
        main.appendChild(clone);

        // Fetch data based on route
        if (tplId === 'tpl-comparador') loadMotos();
        if (tplId === 'tpl-moto-detail') loadMotoDetail(parts[1]);
        if (tplId === 'tpl-motogp') loadNews();
        if (tplId === 'tpl-equipamiento') loadGear();
        if (tplId === 'tpl-segunda-mano') loadUsedMotos();
    };

    // Data Loaders
    const loadMotos = async () => {
        const grid = document.getElementById('moto-grid');
        grid.innerHTML = '<p>Cargando máquinas...</p>';

        try {
            const snap = await db.collection('motos').get();
            grid.innerHTML = '';
            snap.forEach(doc => {
                const data = doc.data();
                grid.innerHTML += createCard({
                    title: `${data.marca} ${data.modelo}`,
                    info: `${data.cilindrada}cc | ${data.potencia} CV`,
                    price: `${data.año}`,
                    img: data.imagen,
                    link: `/moto/${doc.id}`
                });
            });
        } catch (e) { console.error(e); }
    };

    const loadMotoDetail = async (id) => {
        const content = document.getElementById('moto-content');
        try {
            const doc = await db.collection('motos').doc(id).get();
            if (doc.exists) {
                const d = doc.data();
                content.innerHTML = `
                    <div class="detail-header">
                        <img src="${d.imagen}" class="full-img">
                        <h1>${d.marca} ${d.modelo}</h1>
                        <p class="specs">${d.tipo} | ${d.cilindrada}cc | ${d.potencia} CV | ${d.peso}kg</p>
                    </div>
                `;
                updateSEO(d.marca + ' ' + d.modelo);
            }
        } catch (e) { console.error(e); }
    };

    const loadNews = async () => {
        const grid = document.getElementById('news-grid');
        try {
            const snap = await db.collection('motogp_noticias').get();
            grid.innerHTML = '';
            snap.forEach(doc => {
                const d = doc.data();
                grid.innerHTML += createCard({
                    title: d.titulo,
                    info: d.resumen,
                    price: d.fecha,
                    img: d.imagen,
                    link: `/motogp/${doc.id}`
                });
            });
        } catch (e) { console.error(e); }
    };

    // Helper: Card Generator
    const createCard = (d) => `
        <div class="card">
            <img src="${d.img}" class="card-img" alt="${d.title}">
            <div class="card-body">
                <h3 class="card-title">${d.title}</h3>
                <p class="card-info">${d.info}</p>
                <div class="card-footer">
                    <span class="price">${d.price}</span>
                    <a href="${d.link}" class="btn btn-primary" data-route>Ver más</a>
                </div>
            </div>
        </div>
    `;

    // SEO Dynamic Update (Client Side fallback)
    const updateSEO = (title) => {
        document.title = `${title} - MotoCore Platform`;
    };

    // Event Delegation for links
    document.addEventListener('click', e => {
        if (e.target.matches('[data-route]')) {
            e.preventDefault();
            navigate(e.target.getAttribute('href'));
        }
    });

    // Theme Toggle
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });

    // Handle initial load and back button
    window.addEventListener('popstate', () => {
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p);
        const baseRoute = parts.length > 0 ? `/${parts[0]}` : '/';
        render(routes[baseRoute] || 'tpl-home', parts);
    });

    // Initial Path
    const initialPath = window.location.pathname;
    const parts = initialPath.split('/').filter(p => p);
    render(routes[parts.length > 0 ? `/${parts[0]}` : '/'] || 'tpl-home', parts);
});
