function init (){
   var button = document.getElementById("next");
	button.addEventListener('click', onNextClick);
   /*var pais = document.getElementById("country-name");
	
pais.addEventListener('click', paisesFlags); 
	
button.addEventListener('click', onNextClick); 
    
  if(localStorage.getItem('country')){
        
    setCountry();
    
    }*/
	var flagTwo=document.getElementById("flagTwo");
	var codePais=document.getElementById("codePais");
	var srcLocal=localStorage.getItem('src');
	var codeLocal=localStorage.getItem('code');
	flagTwo.src=srcLocal;
	codePais.textContent=codeLocal;
	
}

 

function onNextClick(){
	
var inputNum = document.getElementById('number').value;
var regex = /^([0-9])*$/;
	
   if(inputNum===""||(!regex.test(inputNum))|| inputNum.length>9) {
        alert("Campo inválido");
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
	
	location.href='login.html';
}

