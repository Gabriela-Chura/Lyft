function init(){
	var lista = document.getElementById("lista-paises");
	console.log("djf");

	for (var i=0; i < jsonPaises.length; i++){
		
		
		var html = '<a href="singup.html"><li><img src="'+jsonPaises[i].flag+'" alt=""><p>'+jsonPaises[i].nombre+'</p> <p>'+jsonPaises[i].phone_code+'</p></li></a>'; 
		
		lista.innerHTML += html; 
	}
}



/*function onLinkClick(){
	localStorage.setItem('country', this.textContent);
}*/