function init(){
	
}




var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), 
	{
    center: 
	  {lat: -16.457389199999998, 
	   lng: -71.5315308},
    zoom: 12
  }
);


var myLatLng = {
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
  });
}