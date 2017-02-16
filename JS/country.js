function init(){
	var jsonPaises = '[{ "nombre": "Afganistán","phone_code":"93","imageURL": '+
		'"image/af.png"},{"nombre":"Albania","phone_code": "355","imageURL": "image/al.png"}]';

var paises = JSON.parse(jsonPaises);
var leng = paises.length; 
console.log(paises[0].nombre);
	
var lista = document.getElementById("lista-paises");
	
	for (var i=0; i < leng; i++){

		var html = '<a id="country" href="singup.html"><li class="list-group-item">'+'<img class="flag" src="'+ paises[i].imageURL+'" style="height:20px; width: 30px;" alt=""><p class="country">'+paises[i].nombre+'</p><span class="codigo">'+paises[i].phone_code+'</span>'+'</li></a>'; 
		
		lista.innerHTML += html; 
	}
	
	var lis=document.getElementsByTagName('li');
	
	for(var i= 0; i<lis.length; i++){
		lis[i].addEventListener('click',onLinkClick);
	}
	
}


function onLinkClick(evt){

 	var srclocal=evt.currentTarget.getElementsByClassName('flag')[0].src;
	var codelocal=evt.currentTarget.getElementsByClassName('codigo')[0].textContent;
localStorage.setItem('src', srclocal);
localStorage.setItem('code', codelocal);
	
	
}


/*
function onLinkClick(){
	
	var country = localStorage.setItem('country', this.textContent);
	
}*/


 

 