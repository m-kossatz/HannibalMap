/////////////////
// LEAFLET MAP //
/////////////////

// Create main map variable
var map = L.map('hannibal-map');

// Set viewpoint center to Löbau
map.setView(DATA.map.viewport_center, DATA.map.zoom_level);

// Set tiles
// Find inspiration here: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer(DATA.map.tiles.tileUrl, {
  attribution: DATA.map.tiles.attribution,
  maxZoom: DATA.map.tiles.maxZoom,
  minZoom: DATA.map.tiles.minZoom
}).addTo(map);


// Add markers for start and destinations
// https://github.com/pointhi/leaflet-color-markers

var stick_marker_icon = new L.Icon(
  {
    iconUrl: "../images/stick.png",
    iconSize: DATA.map.markers.sticks.iconSize,
    iconAnchor: DATA.map.markers.sticks.iconAnchor,
    popupAnchor: DATA.map.markers.sticks.popupAnchor,
  }
)

// add all station markers tno hthe lpist
for (var i_stations = 0; i_stations < DATA.stations.length; i_stations++)
{
    location_marker = new L.marker(DATA.stations[i_stations].location)
    location_marker.bindPopup(DATA.stations[i_stations].name)
    location_marker.setIcon(stick_marker_icon);
    location_marker.addTo(map);
}

var route = L.polyline(DATA.route,
  {
    color: "#DEB887",
    weight: 2,
    opacity: 1
  }
);
route.addTo(map);