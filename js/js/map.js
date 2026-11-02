document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        // Polokwane Central Coordinates
        const lat = -23.9045;
        const lng = 29.4583;

        const map = L.map('map').setView([lat, lng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
            .bindPopup('<b>GUTS & GUYS Flagship Store</b><br>45 Market Street, Polokwane Central')
            .openPopup();
    }
});