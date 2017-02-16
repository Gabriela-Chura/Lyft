function init (){
   var button = document.getElementById("next");
	button.addEventListener('click', onNextClick);
   /*var pais = document.getElementById("country-name");
	
pais.addEventListener('click', paisesFlags); 
	
button.addEventListener('click', onNextClick); 
    
  if(localStorage.getItem('country')){
        
    setCountry();
    
    }*/
}

function paisesFlags() {
	window.location.href='../lyft/country.html';
}

/*function setCountry(){
  var imagenFlag = localStorage.getItem('flag');
document.getElementById('flagTwo').value = imagenFlag;
 var flagTwo = document.getElementById("flagTwo")
flagTwo.setAttribute('src', imagenFlag);
	}*/
  
	/*var cName = document.getElementById('country-name');
   cName.textContent = localStorage.getItem('');*/
 

function onNextClick(){
	
var inputNum = document.getElementById('number').value;
	
   if(inputNum==="") {
        alert("Campo obligatorio");
       return false; 
          }
	
	var input = document.getElementById('number');
    localStorage.setItem('number', input.value);
	
	
	var aleatorio; 
    aleatorio = Math.round(Math.random() * (100 - 999) + 999);
    alert('LAB-'+aleatorio);
	
	redireccionar();
 }


function redireccionar() {
	
	window.location.href='../lyft/login.html';
}

