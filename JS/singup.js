/*
function validarDatos (){
    var inputNum = document.getElementById('number').value;
    
    if(inputNum==="") {
        alert("Campo obligatorio");
       return false; 
          }
  
   init ();
    onNextClick();
    
}
*/

function init (){
   var button = document.getElementById("next"); 
  
   button.addEventListener('click', onNextClick); 
    
    if(localStorage.getItem('country')){
        
    setCountry();
    
    }
}

function setCountry(){
   
  var cName = document.getElementById('country-name');
   cName.textContent = localStorage.getItem('country');
}

function onNextClick(){
    var input = document.getElementById('number');
    localStorage.setItem('number', input.value);
    
    var aleatorio; 
    aleatorio = Math.round(Math.random() * (100 - 999) + 999);
    alert('LAB-'+aleatorio);
}




