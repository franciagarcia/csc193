function radioHandleOnChange(){

var boxArea = document.getElementById("UserInput");
 var fancyShmancyRadio = document.getElementById("fancyShmancy");
var boringBettyRadioo = document.getElementById("boringBetty");
    if (fancyShmancyRadio.checked) {
        // Apply styles for "FancyShmancy"
        boxArea.style.fontWeight = "bold";
        
    } 
    else if(boringBettyRadioo.checked){
        boxArea.style.fontWeight = "normal";

    }    else {
        
       //do nothing
        
    }

}
function handleBiggerButtonClick() {
    alert('Hello, World!');
    document.getElementById("UserInput").style.fontSize = "24pt";
}
