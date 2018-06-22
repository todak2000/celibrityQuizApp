// function addName(){
//     alert('hi');
//     var nameInput = $('#name').val();
//     var hname = document.getElementById('nameing');
//     hname.innerHTML = nameInput; 
    
// }

$(document).ready(function(){
   $(".info_button").click(function(){
    $(".politics").removeClass("hide_div");
    nextQuestions();
   })
   $('#pol').click(function(){
    alert('hi');
    var nameInput = $("#nameIn").val();
    var h_name = $("#h-name");
    var hname = $('#nameing');
    var test = $('#test');
    h_name.append("Hello "+$("#nameIn").val());
    hname.append("Hello "+$("#nameIn").val());

   })
   
})
function buttonHome(){
    var nameInput = $("#nameIn").val();
    console.log(nameInput);
}
// var score_table = $(".score");
// score_table.fadeIn();
// score_table.html(score);
// Next button on question 1
// $(document).ready(function(){
//     $("#next_pol01").click(function(){
//         $(".pol_questions02").removeClass("hide_div");
//         $(".pol_questions01").addClass("hide_div");
//         $(".img-circle").addClass("hide_div");
//         showQuestion();
        
//     })
    

//  })
//  // Next button on question 2
// $(document).ready(function(){
//     $("#next_pol02").click(function(){
//         console.log("hi")
//         $(".pol_questions03").removeClass("hide_div");
//         $(".pol_questions01").addClass("hide_div");
//         $(".pol_questions02").addClass("hide_div");
//         $(".img-circle").addClass("hide_div");

        
//     })
    

//  })
//  // Next button on question 3
// $(document).ready(function(){
//     $("#next_pol03").click(function(){
//         $(".pol_questions04").removeClass("hide_div");
//         $(".pol_questions01").addClass("hide_div");
//         $(".pol_questions02").addClass("hide_div");
//         $(".pol_questions03").addClass("hide_div");
//         $(".img-circle").addClass("hide_div");

        
//     })
    

//  })
//  // Next button on question 4
// $(document).ready(function(){
//     $("#next_pol04").click(function(){
//         $(".pol_questions05").removeClass("hide_div");
//         $(".pol_questions01").addClass("hide_div");
//         $(".pol_questions02").addClass("hide_div");
//         $(".pol_questions03").addClass("hide_div");
//         $(".pol_questions04").addClass("hide_div");
//         $(".img-circle").addClass("hide_div");

        
//     })
    

//  })
//  $(document).ready(function(){
//     $("#next_pol05").click(function(){
//         $(".pol_questions05").removeClass("hide_div");
//         $(".pol_questions01").addClass("hide_div");
//         $(".pol_questions02").addClass("hide_div");
//         $(".pol_questions03").addClass("hide_div");
//         $(".pol_questions04").addClass("hide_div");
//         $(".pol_questions05").addClass("hide_div");
//         $(".img-circle").addClass("hide_div");

        
//     })
  

//  })

// modal for Lifeline
 $(document).ready(function(){
    $(".button_yes").click(function(){
        $(".img-circle").removeClass("hide_div");
        
 })
});
// function to remove bubbles
$(document).ready(function(){
    $("body").click(function(){
        $(".bg-bubbles").addClass("hide_div");
        
 })
});

// $(document).ready(function(){
//     $("#op1a").click(function(){
//         correctSound();
//         setTimeout(function() {
//             $(".bg-bubbles").removeClass("hide_div");
//         }, 20);
      
//  })
//  $("#op2c").click(function(){
//     correctSound();
//     setTimeout(function() {
//         $(".bg-bubbles").removeClass("hide_div");
//     }, 20);
  
// })
// $("#op3d").click(function(){
//     correctSound();
//     setTimeout(function() {
//         $(".bg-bubbles").removeClass("hide_div");
//     }, 20);
  
// })
// $("#op4b").click(function(){
//     correctSound();
//     setTimeout(function() {
//         $(".bg-bubbles").removeClass("hide_div");
//     }, 20);
  
// })
// $("#op5c").click(function(){
//     correctSound();
//     setTimeout(function() {
//         $(".bg-bubbles").removeClass("hide_div");
//     }, 20);
  
// })
//  })



