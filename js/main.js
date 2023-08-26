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
  console.log(MapContainer)
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
