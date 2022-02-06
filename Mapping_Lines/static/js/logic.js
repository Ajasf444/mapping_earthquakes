// Add console.log to check to see if our code is working.
console.log('working');

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 5);

// Create the map object with a center and zoom level. ALTERNATIVE WAY
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Read in the cities data in cities.js.
// let cityData = cities;

// Coordinates for each point to be used in the line.
let line = [
    [37.615223, -122.389977],
    [30.12, -97.67],
    [39.3036, -94.7093],
    [43.6777, -79.6248],
    [40.641766, -73.780968]
  ];

// Create a polyline connecting the two points above and color it red.
L.polyline(line, {
    color: 'blue',
    dashArray: '10',
    weight: 4,
    opacity: 0.5
}).addTo(map);

// Loop through the cities array and create one marker for each city.
// cityData.forEach((city) => {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200E3,
//         weight: 4,
//         color: 'orange',
//         fillColor: 'orange'
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
