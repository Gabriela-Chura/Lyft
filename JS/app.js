var map;
var latlong={
    lat: -16.457389199999998,
    lng: -71.5315308
}
var opcionesMapa = {
    enableHighAccuracy: true
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: latlong.lat,
            lng: latlong.lng},
            zoom: 12
        });
};

function centrarMapa(position){
    map.setZoom(12);
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    var marker = new google.maps.Marker
	({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: map,
        icon: "image/bloggif_58a70bf41eac6.png"
    });
};


function init(){
    if(navigator.geolocation)
	{
        console.log('soportado');
        navigator.geolocation.watchPosition(centrarMapa);
    }
    else
    {
        console.log('no soportado');
    }
};




/*var myLatLng = {
	lat: -16.457389199999998, 
	lng: -71.5315308
};
	
var myLatLng1 = {
	lat: -16.457389199992998, 
	lng: -71.4315458
};

 var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Aquí hellooo!',
	icon: "image/bloggif_58a70bf41eac6.png"
  });
	
	new google.maps.Marker({
    position: myLatLng1,
    map: map,
    label: '2',
	icon: "image/bloggif_58a70bf41eac6.png"
  });*/
