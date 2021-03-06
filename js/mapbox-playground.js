// const mapboxToken = 'pk.eyJ1IjoicmZpZ3Vlcm9hMjMxNyIsImEiOiJja3BwbXgwMGIxNWQ5Mnd1ZWo3aTlxNjBkIn0.kqbbHqqF_z-Gss77NrYrBA';

// *** mapbox playground token ***
// pk.eyJ1IjoicmZpZ3Vlcm9hMjMxNyIsImEiOiJja3BwbjhjaXowMGszMnZtbGl0bmpuZGcyIn0.-Z7O25kIRTpqkD5BG8SiFg

// ============ *** ===== CLASS NOTES ===== *** =============== \\

mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241],
    zoom: 12
});
console.log(map)
function initMapbox(){
    mapboxgl.accessToken =  MAPBOX_TOKEN;
    map = getMap();
    console.log(map)
}

// call function to create method and give initial point
let marker = setMarker([-98.4936, 29.4241]);

// call addMapEvent AFTER the marker has been initially set
addMapEvent(marker);

let geocoder = setGeocoder();
addGeocoderToMap(geocoder);
addGeocoderEvent(geocoder);
setPopup("This is my popup! woo!");
//creates and returns a new GeoCoder (search box)

// let geocoder = (function (){
//
// })();

// *** or ***

function setGeocoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}
// adds geocoder to map
function addGeocoderToMap(geocoder){
    map.addControl(geocoder);
}

// adds event listener to geocoder and sets new marker location
function addGeocoderEvent(geocoder){
    geocoder.on("result", function(event){
        console.log(event);
        marker.setLngLat(event.result.geometry.coordinates)

        setPopup(event.result.resultPlaceName);
    })
}

function getMap(){
    return new mapboxgl.Map({
        container:'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center:[-98.4936, 29.4241],
        zoom: 12
    })
}

// creates the marker
function setMarker(point){
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map); // returns this.marker
}

// adds event to map that changes location of marker based on where the user clicks
function addMapEvent(){
    map.on('click', function(event){
        console.log(event.lngLat)
        marker.setLngLat(event.lngLat)
            .addTo(map);
    })
}

function setPopup(textDetails){
    let popup = new mapboxgl.Popup().setHTML(`<p>#{textDetails}</p>`).addTo(map);

    marker.setPopup(popup);
}

// adds click event to map with a callback...

function setMapClickEvent(marker){
    map.on('click', function (event){
        marker.setLngLat(event.lngLat)
            .addTo(map);

        let point = [event.lngLat.lng,event.lngLat.lat];

        getReverseGeocode(point,marker);
    })
}

function getPopup(textDetails){
    return new mapboxgl.Popup()
}

// function getReverseGeocode(point, marker){
//     $.ajax({
//         url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?access_token=${mapboxgl.accessToken}`,
//         success: function(data){
//             marker.setPopup(getPopup(data.features[0].place_name)).togglePopup(); // This will only execute once the success callback is invoked // It guarantees that the response is returned AND successful before trying to do anything with the expected data
//         }
//     })
// }