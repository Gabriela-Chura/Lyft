$(document).ready(init);

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
	
	ajax();
};

function ajax(){
	
   $.ajax(
	   { url:"https://clientes.geekadvice.pe/api/estimado",
		  data:{ tipo: 2}
       		}).done(function(_data){
	   			console.log(_data);
	   			update(_data);
	   
   });
	

};

function update(_info){
	//alert(_info.destino);
	$('#origen').html(_info.origen);
	$('#destino').html(_info.destino);
	//alert(_info.estimado.min);
	$('#precio').html('<small id="precio">'+_info.estimado.moneda+_info.estimado.min+'-'+_info.estimado.max+'</small>');
};




