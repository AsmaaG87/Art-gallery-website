const lat = 41.4882;
const lng = -71.3126;

const map = L.map('map', {
    trackResize: true
}).setView([lat, lng], 15);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap contributors © CARTO'
}).addTo(map);


const customIcon = L.icon({
  iconUrl: './resources/images/icon-location.svg',
  iconSize: [66, 88],
  iconAnchor: [23, 56],
});

L.marker([lat, lng], { icon: customIcon }).addTo(map);