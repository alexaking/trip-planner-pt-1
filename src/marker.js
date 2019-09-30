const markerDomEl = require("./index.js");


const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);

const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, long, lat) {
    var marker = new mapboxgl.Marker()
    .setLngLat([30.5, 50.5])
    .addTo(map);
};


// const buildMarker = (latitude, longitude, type) => {new mapboxgl.Marker(markerDomEl).setLngLat([latitude, longitude]).addTo(map);}