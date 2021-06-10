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

// *** DONE *** \\

// *** NOTES on the zoom level *** \\
// The smaller the number the farther away the map is. the bigger the number, the closer to the street level it will be \\


// 5. Create a marker on your map of the exact location of your favorite restaurant. Set the zoom to allow for best viewing distance.

let markerForFavRestaurant = new mapboxgl.Marker()
    .setLngLat([-98.56124536012952,29.504703406746525])
    .addTo(map)
;//29.504703406746525, -98.56124536012952 Ray's Pizzeria on medical center.


// function settingUpTheGeocoder(){
//     return new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//         marker: false
//     })
// }

function settingUpTheGeocode(search, token) {
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return fetch(url + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            return data.features[0].center;
        });
}
//******** What these functions are doing is for the marker to be set up so you can see it on the map. both of these functions are doing the same thing. on line 36 you're accessing the code that was created on line 11 which is the one that allows access to the map.


// .6 Create a popup with the name of the restaurant.

function settingUpReverseGeocode(coordinates, token){
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return fetch(url + coordinates.lng + "," + coordinates.lat + "j.son" + "?" + "access_token" + token).then(function (res){
        return res.json();
    }).then(function (data){
            return data.features[0].place_name;
        })
}

let popup = new mapboxgl.Popup()
    .setLngLat([-98.56124536012952,29.504703406746525])
    .setHTML("<p>Ray's Pizzeria</p>")
    .addTo(map)


// .7 Make sure the info window does not display until the marker has been clicked on.
// HINT HINT: click event ***

let raysPizzeriaInfo = {
    address: '5252 Fredericksburg Rd, San Antonio, TX 78229',
    popupHTML: "<p>Ray's Pizzeria</p>"
}
function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function(coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
}
placeMarkerAndPopup(raysPizzeriaInfo, mapboxToken, map);