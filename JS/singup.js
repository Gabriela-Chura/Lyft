$(document).ready(function(){
   var button = $("#next"); 
    var flagTwo=$("#flagTwo");
	var codePais=$("#codePais");
	var srcLocal=localStorage.getItem('src');
	var codeLocal=localStorage.getItem('code');
    $('#flagTwo').attr('src', srcLocal);
    $("#codePais").html(codeLocal);
	//flagTwo.src=srcLocal;
	//codePais.textContent=codeLocal;
//SI HAY ALGO QUE NO SE CHANGE LOG JQUERY
    
    $("#next").click(function(){
     
        var inputNum = $('#number');
        var regex = /^([0-9])*$/;
	
   if(inputNum.val()===""||(!regex.test(inputNum.val()))|| inputNum.val().length>9) {
        alert("Campo inválido");
       return false; 
          }
	
	var input = $('#number');
    localStorage.setItem('number', input.value);
	
	
	var aleatorio; 
    aleatorio = Math.round(Math.random() * (100 - 999) + 999);
    alert('LAB-'+aleatorio);
	
	redireccionar();  
        
        
        
    });
    
   function redireccionar() {
	
	location.href='login.html';
} 
    
    
    
});




/*
function init (){
   var button = document.getElementById("next");
	button.addEventListener('click', onNextClick);
 
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

*/



