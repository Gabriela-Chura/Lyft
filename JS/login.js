$(document).ready(function(){
    var button = $('#next');
    
    $('#next').click(function(){
    
    var input = $('#nameInput');
    var inputTwo = $('#emailInput');
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var correcto = /([0-9])/g;
        
         if(input.val() ==="" || inputTwo.val() ==="" || input.val().length > 30 || inputTwo.val().length > 50 || (!regex.test(inputTwo.val())) || (correcto.test(input.val()))) 
        {
       alert("Llenar campos correctamente");
       return false; 
          }
	
    var input = $('#nameInput');
    localStorage.setItem('nameInput', input.val());
    var inputTwo = $('#emailInput');
    localStorage.setItem('emailInput', inputTwo.val());
        
    redireccionar();
    })
    
    
    function redireccionar() {
	
	window.location.href='app.html';
}
    
});




/*
function init () {
	var button = document.getElementById("next");
    button.addEventListener('click', onNextClick); 
}


function onNextClick(){
	
var input = document.getElementById('nameInput').value;
var inputTwo = document.getElementById('emailInput').value;
var regex = /([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
	
   if(input==="" || inputTwo==="" || input.length > 30 || inputTwo.length > 50 || (!regex.test(inputTwo)))
   {
       alert("Llenar campos correctamente");
       return false; 
          }
	
	var input = document.getElementById('nameInput');
    localStorage.setItem('nameInput', input.value);
    var inputTwo = document.getElementById('emailInput');
    localStorage.setItem('emailInput', inputTwo.value);
	
	redireccionar();
 }


function redireccionar() {
	
	window.location.href='app.html';
}

*/
