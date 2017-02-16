function init () {
	var button = document.getElementById("next");
	var check = document.getElementById("check").value;
    button.addEventListener('click', onNextClick); 
}



function onNextClick(){
    var input = document.getElementById('nameInput');
    localStorage.setItem('nameInput', input.value);
    var inputTwo = document.getElementById('emailInput');
    localStorage.setItem('emailInput', inputTwo.value);
    
}

