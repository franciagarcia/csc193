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
    btn.addEventListener("click", ()=> {
      console.log("button press");

    })
    const textbox = document.getElementById("input-text");
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () =>{
        var info = textbox.value;
        info = " ";
        textbox.value = info;

    })

  
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that

})();
