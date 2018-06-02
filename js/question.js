
    function showQuestion(){
   var questionArray = document.getElementsByClassName("politic");
   var polArray = jQuery.makeArray(questionArray);

   for (var index = 0; index < polArray.length; index++){
       var getQuestion = polArray[index];
       var randomQuestion = Math.floor(Math.random()*polArray.length);
       var question = getQuestion[randomQuestion];
       $(question).removeClass("hide-div");
   }
} 
