var apikey = 'AIzaSyAVRcQaZXipelHJy9FFybcFT9VJDmbyBvA';
var map;
var infoWindow;

var toronto = [43.6532, 79.3832]
var lat = toronto[0];
var lng = toronto[1];




// this is the map function
function initMap() {
    var location =  google.maps.LatLng(lat,lng)
    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 8
    });
}


var init = function(){
    scriptElem = document.createElement('script');
    scriptElem.async = true;
    scriptElem.defer = true;
    scriptElem.src=`https://maps.googleapis.com/maps/api/js?key=${apikey}&callback=initMap`
    scriptElem.type="text/javascript">
    document.getElementsByTagName('head')[0].appendChild(scriptElem)
    console.log(document.getElementsByTagName('head')[0])

}


// this will load the map after the document is ready
// document.onload = init();






//!!!!!!!!!!!!!!!!!!!!!!

