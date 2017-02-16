function init(){
	var lista = document.getElementById("lista-paises");
	

	for (var i=0; i < jsonPaises.length; i++){
       
		
		
		var html = '<a href="singup.html" onclick="onLinkClick()" ><li class="list-group-item">'+'<img src="'+ jsonPaises[i].imageURL+'" style="height:20px; width: 30px;" alt=""><p class="country">'+jsonPaises[i].nombre+'</p> <span><strong>+'+jsonPaises[i].phone_code+'</strong></span>'+'</li></a>'; 
		
		lista.innerHTML += html; 
	}
}



/*function onLinkClick(){
	localStorage.setItem('country', this.textContent);
   
   
}


 var inputNumber = document.getElementById("number");
    
    	for (var i=0; i < jsonPaises.length; i++){
            
       	var inputNum = ' <input type="number" min="9" max="80" step="10" placeholder="(+51)" id="number" class="form-control" name="text" value="'+jsonPaises[i].phone_code+'">';
		
		inputNumber.innerHTML += inputNum; 
	}
    
    */


 