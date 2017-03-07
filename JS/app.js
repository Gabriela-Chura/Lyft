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
   
    var lista= $('#lista'); 
    $('#lista').children('li').click(function(){
    //var valor= localStorage.setItem('carNum', JSON.stringify(lista.val()));//
 		alert('ho');
		console.log($(this));
    });
    
};



/*
<li><a href="#"><img src="image/1%20(1).png" alt="" width="25px;" class="pull-left" id="car"><h6 class="pull-left">Line <span style="margin-left:92px;" >3</span><br><small>Shared 2 riders max</small><small style="margin-left: 35px;">Min</small></h6></a></li>*/


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
