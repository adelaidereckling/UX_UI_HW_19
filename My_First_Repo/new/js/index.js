console.log ("Your index.js file is loaded correctly!");


$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "purple");
    });
  });

