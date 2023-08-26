let __counter = 0;

function next() {
    return __counter++;
}

class Screen {
    static HOME = next();
    static DISASTER = next();
    static DISASTER_DETAIL = next();
    static GOOD_NEWS = next();
    static GOOD_NEWS_DETAIL = next();
}

const HIDDEN = 'hidden', VISIBLE = 'visible';
let MapContainer = document.getElementById('map-container');

function reload() {
    MapContainer.style.visibility = HIDDEN;
}

function toggleMap() {
    if (MapContainer.style.visibility === HIDDEN) {
        MapContainer.style.visibility = VISIBLE;
    } else {
        MapContainer.style.visibility = HIDDEN;
    }
}

reload();

// create the map

// trigger a load screen for 3 seconds
window.onload = setTimeout(toggleMap, 3000);

const map = L.map('map-container').setView([51.505, -0.09], 2.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);