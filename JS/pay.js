$(document).ready(init);

function init(){
	solicitarConductor();
	solicitarEstimado();
}


function solicitarConductor(){
   $.ajax(
	   { url:"https://clientes.geekadvice.pe/api/carrera",
		  data:{ tipo: 2}
       		}).done(function(_data){
	   			console.log(_data);
	   			update(_data);
	   
   });
	

};

function update(_info){
	//alert(_info.destino);
	  $('.foto').css('background-image', 'url(' + _info.conductor.url+ ')');
	$('#conductor').html(_info.conductor.name);
}


function solicitarEstimado(){
$.ajax({
url:"https://clientes.geekadvice.pe/api/estimado",
data:{tipo:4}
}).done(function(_data){
//console.log(_data);
       update2(_data);
});
};

function update2(_info){
//alert(_info.precio);
  $('#precio').html('<h3 id="precio">'+_info.estimado.moneda+_info.estimado.min+'<small>ⓘ</small>  </h3>');
  
}