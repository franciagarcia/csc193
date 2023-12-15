/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
 
  
  //console.log("Window loaded!");
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const btn = document.getElementById("encrypt-it");
    const textbox = document.getElementById("input-text");
    const resetButton = document.getElementById("reset");
   
      //this is the element <p> where result will be added
      const pText = document.getElementById("result");
    // this the div where result is
    const element = document.getElementById("result-area");

    
    btn.addEventListener("click", ()=> {
      var txt = textbox.value;
      var strgText = shiftChipher(txt);




      const node = document.createTextNode(strgText);
      pText.appendChild(node);
      element.appendChild(pText);



    })
    resetButton.addEventListener("click", () =>{
        var info = textbox.value;
        info = " ";
        textbox.value = info;

    })
    function shiftChipher( input){
      var info = input.toLowerCase();
      var result = "";
      for( var i = 0; i< info.length; i++){
  
        if(info[i] < 'a' || info[i] > 'z'){
  
          result += info[i];
        }else if(info[i]=='z'){
          result+='a';
  
        }else{
            var letter = info.charCodeAt(i);
            var answer = String.fromCharCode(letter + 1);
            result += answer;
  
        }
  
      }
      return result;
    }
  
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  
})();
