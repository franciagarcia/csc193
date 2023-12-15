function radioHandleOnChange(){

var boxArea = document.getElementById("UserInput");
 var fancyShmancyRadio = document.getElementById("fancyShmancy");
var boringBettyRadioo = document.getElementById("boringBetty");
    if (fancyShmancyRadio.checked) {
        // Apply styles for "FancyShmancy"
        boxArea.style.fontWeight = "bold";
        boxArea.style.color= "blue";
        boxArea.style.textDecoration = "underline";
        
    } 
    else if(boringBettyRadioo.checked){
        boxArea.style.fontWeight = "normal";
        boxArea.style.fontcolor= "";
        boxArea.style.textDecoration = "none";

    }    else {
        
       //do nothing
        
    }

}
function handleMooButtonClick(){
    var boxArea = document.getElementById("UserInput");
    var textVal =boxArea.value;

    
    var words = textVal.split( " ");

    for (var i=0; i< words.length; i++ ){
        var wordArray = words[i].split("");
        wordArray[wordArray.length -1] +="-Moo";
        words[i] = wordArray.join("");
        
    }
    var newText = words.join(" ");
    newText = newText.toUpperCase();
    boxArea.value = newText;
}
function handleBiggerButtonClick() {
    alert('Hello, World!');
    document.getElementById("UserInput").style.fontSize = "24pt";
}
