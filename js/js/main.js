document.addEventListener('DOMContentLoaded', () => {
    initGalleryLightbox();
    initSearchFilter();
    initAccordions();
    initBackToTopButton();
});

/* --- 1. Gallery Lightbox Feature --- */
function initGalleryLightbox() {
    const images = document.querySelectorAll('main img');
    if (!images.length) return;
    
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        display: none; position: fixed; z-index: 1000; top: 0; left: 0;
        width: 100%; height: 100%; background: rgba(0,0,0,0.85);
        justify-content: center; align-items: center; flex-direction: column;
    `;
    
    const imgElement = document.createElement('img');
    imgElement.style.cssText = 'max-width: 90%; max-height: 80%; border-radius: 8px; box-shadow: 0 0 20px rgba(255,255,255,0.3);';
    
    const caption = document.createElement('p');
    caption.style.cssText = 'color: #ffffff; margin-top: 15px; font-size: 1.1rem; text-align: center; font-family: sans-serif;';

    lightbox.appendChild(imgElement);
    lightbox.appendChild(caption);
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            imgElement.src = img.src;
            caption.innerText = img.alt || 'GUTS & GUYS Menswear Collection';
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

/* --- 2. Dynamic Content Search & Filtering --- */
function initSearchFilter() {
    const searchContainer = document.querySelector('.page-title');
    if (!searchContainer) return;

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'site-search';
    searchInput.placeholder = '🔍 Search items, suits, footwear, or events...';
    searchInput.style.cssText = 'width: 80%; max-width: 450px; padding: 12px 18px; margin-top: 15px; border: 2px solid #333; border-radius: 25px; font-size: 1rem; display: block; margin-left: auto; margin-right: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05); outline: none;';

    searchContainer.appendChild(searchInput);

    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const items = document.querySelectorAll('.card, .service-block, .team-card');

        items.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/* --- 3. Interactive Accordions --- */
function initAccordions() {
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            body.style.display = body.style.display === 'block' ? 'none' : 'block';
        });
    });
}

/* --- 4. Back to Top Button --- */
function initBackToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑ Top';
    btn.style.cssText = `
        display: none; position: fixed; bottom: 20px; right: 20px; z-index: 99;
        background: #222; color: #fff; border: none; padding: 10px 15px;
        border-radius: 5px; cursor: pointer; font-size: 0.9rem; box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}