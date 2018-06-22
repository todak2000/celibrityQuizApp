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
// for (var numbers=[],i=0;i<6;++i) numbers[i]=i;

// function shuffle(array) {
//   var tmp, current, top = array.length;
//   if(top) while(--top) {
//     current = Math.floor(Math.random() * (top + 1));
//     tmp = array[current];
//     array[current] = array[top];
//     array[top] = tmp;
//   }
//   return array;
// }

// numbers = shuffle(numbers);
function nextQuestion(){
//   if(numbers.length ==0){
//       console.log("Starting over again");
//       generateNumbers();
//   }
//   var rand = Math.floor(Math.random()*numbers.length);
//   var num = numbers[rand];
//   console.log(num);
var next = Math.floor(Math.random()*6);
console.log(next);
var question = $(".pol_questions0"+next);

    // console.log("Question "+ num+" is picked")
    // numbers.splice(num,1);
    // console.log(numbers.splice(num,1));
    $(".img-circle").addClass("hide_div");
    $(".politic:not(question)").addClass("hide_div");
     question.removeClass("hide_div");
     
}
// **************************************************
// function nextQuestiona(){
     
//     var next = Math.floor(Math.random()*6);
//     console.log(next);
//     var question = $(".pol_questions0"+next);
//         $(".img-circle").addClass("hide_div");
//         $(".politic:not(question)").addClass("hide_div");
//          question.removeClass("hide_div");
     
        
//     }

// for ok button modal
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