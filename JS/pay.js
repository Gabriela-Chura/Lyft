
function init(){
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
}


