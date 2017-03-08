$(document).ready(init);

function init(){
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


