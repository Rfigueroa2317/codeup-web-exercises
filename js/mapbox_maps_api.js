// 1. Generate a Mapbox API Key using the steps from above

const mapboxToken = 'pk.eyJ1IjoicmZpZ3Vlcm9hMjMxNyIsImEiOiJja3BwbXgwMGIxNWQ5Mnd1ZWo3aTlxNjBkIn0.kqbbHqqF_z-Gss77NrYrBA'

// 2. Create a new file named mapbox_maps_api.html and add a map using the next steps.

// *** DONE ***

// 3. Generate a map that shows the city with your favorite restaurant using geocoding.

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-98.4936,29.4241],
    zoom: 10
});

// 4. Redraw the map of the above location at zoom levels 5, 15, and 20. Do this by simply changing the value of zoom level where the map properties are initially set and refresh the page to see the changes. Can the zoom be changed programmatically after the initial map is drawn?

// ** NOTES on the zoom level \\
// The smaller the number the farther away the map is. the bigger the number, the closer to the street level it will be \\


// 5. Create a marker on your map of the exact location of your favorite restaurant set the zoom to allow for best viewing distance.

function createMarker(){

}