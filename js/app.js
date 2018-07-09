// QUESTION 0
var score = 0;
function correct(){
    console.log("correct score function was effected")
    score = score + 5;
    alert(score);
    console.log("Your current score is: "+ score);
     var score_table = $(".score");
     score_table.fadeIn();
     score_table.html(score);
     if(score >=15){
        alert("CONGRATULATIONS, you are now a rookie");
     }
}
function useLifeline(){
    console.log("Lifeline used, hence score reduced by 5%")
    scoreLifeLine = score * 0.1;
    score = Math.floor(score - scoreLifeLine);
    alert(score);
    console.log("Your current score is: "+ score);
     var score_table = $(".score");
     score_table.fadeIn();
     score_table.html(score);
     
}
function wrong(){
    console.log("wrong score function was effected")
    score = score -3;
    alert(score);
    console.log("Your current score is: "+ score);
     var score_table = $(".score");
     score_table.html(score);
     if(score >=15){
        alert("CONGRATULATIONS, you are now a rookie");
     }
}
$(document).ready(function(){
    $("div #op0a").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
        
    })
    
})

 $(document).ready(function(){
    $("div #op0b").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong(); 
        $(".lifeline").removeClass("hide_div"); 

    })
    
})

 $(document).ready(function(){
    $("div #op0c").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
})
 $(document).ready(function(){
    $("div #op0d").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
})
// END OF QUESTION 0

// QUESTION 1

$(document).ready(function(){
    $("div #op1a").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
    })
    
 })

 $(document).ready(function(){
    $("div #op1b").click(function(){
        wrongSound();
        nextQuestion();  
        wrong();
        $(".lifeline").removeClass("hide_div"); 

    })
    
 })

 $(document).ready(function(){
    $("div #op1c").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })
 $(document).ready(function(){
    $("div #op1d").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })
// END OF QUESTION 1

// QUESTION 2
$(document).ready(function(){
    $("div #op2a").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })

 $(document).ready(function(){
    $("div #op2b").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })

 $(document).ready(function(){
    $("div #op2c").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
    })
    
 })
 $(document).ready(function(){
    $("div #op2d").click(function(){ 
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })
// END OF QUESTION 2

// QUESTION 3
$(document).ready(function(){
    $("div #op3a").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })

 $(document).ready(function(){
    $("div #op3b").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })

 $(document).ready(function(){
    $("div #op3c").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })
 $(document).ready(function(){
    $("div #op3d").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
    })
    
 })
// END OF QUESTION 3

// QUESTION 4
$(document).ready(function(){
    $("div #op4a").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })

 $(document).ready(function(){
    $("div #op4b").click(function(){
        correctSound();
        nextQuestion(); 
        correct();
        console.log("correct answer");
    })
    
 })

 $(document).ready(function(){
    $("div #op4c").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })
 $(document).ready(function(){
    $("div #op4d").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })
// END OF QUESTION 4

// QUESTION 5
$(document).ready(function(){
    $("div #op5a").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");

    })
    
 })

 $(document).ready(function(){
    $("div #op5b").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })

 $(document).ready(function(){
    $("div #op5c").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
    })
    
 })
 $(document).ready(function(){
    $("div #op5d").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
     
    })
    
 })
// END OF QUESTION 5
// *******************************
// QUESTION 6
$(document).ready(function(){
    $("div #op6a").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
        
    })
    
})

 $(document).ready(function(){
    $("div #op6b").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong(); 
        $(".lifeline").removeClass("hide_div"); 

    })
    
})

 $(document).ready(function(){
    $("div #op6c").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
})
 $(document).ready(function(){
    $("div #op6d").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
})
// END OF QUESTION 6

// QUESTION 7

$(document).ready(function(){
    $("div #op7a").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
    })
    
 })

 $(document).ready(function(){
    $("div #op7b").click(function(){
        wrongSound();
        nextQuestion();  
        wrong();
        $(".lifeline").removeClass("hide_div"); 

    })
    
 })

 $(document).ready(function(){
    $("div #op7c").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })
 $(document).ready(function(){
    $("div #op7d").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })
// END OF QUESTION 7

// QUESTION 8
$(document).ready(function(){
    $("div #op8a").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })

 $(document).ready(function(){
    $("div #op8b").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })

 $(document).ready(function(){
    $("div #op8c").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
    })
    
 })
 $(document).ready(function(){
    $("div #op8d").click(function(){ 
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })
// END OF QUESTION 8

// QUESTION 9
$(document).ready(function(){
    $("div #op9a").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })

 $(document).ready(function(){
    $("div #op9b").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })

 $(document).ready(function(){
    $("div #op9c").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })
 $(document).ready(function(){
    $("div #op9d").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
    })
    
 })
// END OF QUESTION 9

// QUESTION 10
$(document).ready(function(){
    $("div #op10a").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })

 $(document).ready(function(){
    $("div #op10b").click(function(){
        correctSound();
        nextQuestion(); 
        correct();
        console.log("correct answer");
    })
    
 })

 $(document).ready(function(){
    $("div #op10c").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })
 $(document).ready(function(){
    $("div #op10d").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
    })
    
 })
// END OF QUESTION 10

// QUESTION 11
$(document).ready(function(){
    $("div #op11a").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");

    })
    
 })

 $(document).ready(function(){
    $("div #op11b").click(function(){
        wrongSound();
        nextQuestion(); 
        wrong();
        $(".lifeline").removeClass("hide_div");
    })
    
 })

 $(document).ready(function(){
    $("div #op11c").click(function(){
        correctSound();
        nextQuestion();
        correct();
        console.log("correct answer");
    })
    
 })
 $(document).ready(function(){
    $("div #op11d").click(function(){
        wrongSound();
        nextQuestion();
        wrong();
        $(".lifeline").removeClass("hide_div"); 
     
    })
    
 })
// END OF QUESTION 11


function nextQuestion(){

var next = Math.floor(Math.random()*11);
console.log(next);
var question = $(".pol_questions0"+next); 
    $(".img-circle").addClass("hide_div");
    $(".politic:not(question)").addClass("hide_div");
     question.removeClass("hide_div");
     
}
// **************************************************

function nextQuestions(){
    var previousChild=  $('.politics:nth-child(1)')
    previousChild.addClass("hide_div");
    previousChild.hide();
    nextQuestion();
    
  }
  



// FUNCTIONS FOR AUDIO INPUT
// function for when the correct answer is clicked
function correctSound(){
    var Csound = new sound ("audio/correct_score.mp3");
    Csound.play();
    setTimeout(function() {
      $(".bg-bubbles").removeClass("hide_div");
       }, 20);
}
// function for when the wrong answer is clicked
function wrongSound(){
    var Csound = new sound ("audio/wrong.mp3");
    Csound.play();
}
// function for when the time is up
function TimeUpSound(){
    var Csound = new sound ("audio/timeup.mp3");
    Csound.play();
}
// function for when a player becomes a scholar
function ScholarSound(){
    var Csound = new sound ("audio/scholar_sound.mp3");
    Csound.play();
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}