function init () {
	var button = document.getElementById("next");
	var check = document.getElementById("check").value;
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
	
	window.location.href='../lyft/app.html';
}

