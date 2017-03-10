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
	

	var jsonCars = '[{"nombre": "Line","minute_code": 3,"imageURL": '+
		'"image/uno.png"},{"nombre": "Lyft","minute_code": 1,"imageURL":'+'"image/dos.png"},{"nombre": "Plus","minute_code": 4,"imageURL":'+'"image/tres.png"},{"nombre": "Premier","minute_code": 3,"imageURL":'+'"image/cuatro.png"}]';
	
var carros = JSON.parse(jsonCars);
var leng = carros.length; 
console.log(carros[0].nombre);
	
var lista = $("#lista");
var listaFinal = '';	
	for (var i=0; i < leng; i++){

	var html = '<a href="#"><li><img src="'+carros[i].imageURL+'" alt="" width="25px;" class="pull-left car" id="car"><span id="nombreCar" class="pull-left nameCar">'+carros[i].nombre+'</span> <span class="minutos" >'+carros[i].minute_code+'</span><br><small>Shared 2 riders max</small><small style="margin-left: 35px;">Min</small></li></a>'; 
		
		listaFinal +=html;
	
	}
	
	lista.html(listaFinal); 
	
	var lis=$('li');

	for(var i= 0; i<lis.length; i++)
	{
		lis[i].addEventListener('click',onLinkClick);
	}
	
};

function onLinkClick(evt){

 	var imageCar=evt.currentTarget.getElementsByClassName('car')[0].src;
	var nameCar=evt.currentTarget.getElementsByClassName('nameCar')[0].textContent;
	var minuteCar=evt.currentTarget.getElementsByClassName('minutos')[0].textContent;
localStorage.setItem('src', imageCar);
localStorage.setItem('name', nameCar);
localStorage.setItem('minute', minuteCar);
	
}	







/*function init(){

   function eventoClick(){
	var lista = $('li');
	$.each(lista, function(){
		$(this).on('click', onClickLista)
	});
}

function onClickLista (evt){
	var imageCar = $(event.currentTarget).find("#car").src;
	localStorage.setItem('src', imageCar);
	var nameCar = $(event.currentTarget).find("#nombreCar").text;
	localStorage.setItem('text', nameCar);
}

    var lista= $('#lista'); 
    $('#lista').children('li').click(function(){
    //var valor= localStorage.setItem('carNum', JSON.stringify(lista.val()));//
 		alert('ho');
		console.log($(this));
    });
    
};*/



/*
<ul class="dropdown-menu" id="lista">
			 <li><a href="#"><img src="image/uno.png" alt="" width="25px;" class="pull-left" id="car"><h6 id="nombreCar" class="pull-left">Line <span style="margin-left:92px;" >3</span><br><small>Shared 2 riders max</small><small style="margin-left: 35px;">Min</small></h6></a></li>


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
