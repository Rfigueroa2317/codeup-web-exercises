
// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather",
//     type: "GET",
//     data: {
//         APPID: OPEN_WEATHERMAP_TOKEN,
//         lat: 29.4241,
//         lon: -98.4936,
//         units: "Imperial"
//     },
//     success: function(data){
//         // let date = new Date(epochVal)
//         console.log(data);
//     }
// });

$.ajax({
    url:"http://api.openweathermap.org/data/2.5/forecast",
    type: "GET",
    data: {
        APPID: OPEN_WEATHERMAP_TOKEN,
        lat: 29.4241,
        lon: -98.4936,
        unit: "Imperial"
    },
    success:function(data){
        console.log(data);
    }
})

