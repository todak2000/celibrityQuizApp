// function addName(){
//     alert('hi');
//     var nameInput = $('#name').val();
//     var hname = document.getElementById('nameing');
//     hname.innerHTML = nameInput; 
    
// }
$(document).ready(function(){
    $("#pre_quiz").click(function(){
     $("#select").removeClass("hidden");
     $("#instructions").addClass("hide_div");
     
    })
   
    
 })
$(document).ready(function(){
    $("#pol_mobile").click(function(){
     $("#right-side_two").removeClass("hidden-xs");
     $(".lefty").addClass("hide_div");
     $(".lefto").removeClass("hide_div");
     $(".containea").removeClass("hide_div");
     $(".lifeline").removeClass("hide_div");
     nextQuestions();
    })
   
    
 })
 $(document).ready(function(){
    $("#next_sum").click(function(){
     $("#right-side_two").removeClass("hidden-xs");
     $(".lefty").addClass("hide_div");
     $(".lefto").removeClass("hide_div");
     $(".containea").removeClass("hide_div");
     $(".lifeline").removeClass("hide_div");
     $(".summary").addClass("hide_div");
     $(".summary-scholar").addClass("hide_div");
     $(".summary-expert").addClass("hide_div");
        $(".politics").removeClass("hide_div");
        $("#end_quiz").removeClass("hide_div");
        $(".right-timeline").addClass("hide_div");
     nextQuestions();
    })
    $("#next_sum1").click(function(){
        $("#right-side_two").removeClass("hidden-xs");
        $(".lefty").addClass("hide_div");
        $(".lefto").removeClass("hide_div");
        $(".containea").removeClass("hide_div");
        $(".lifeline").removeClass("hide_div");
        $(".summary").addClass("hide_div");
        $(".summary-scholar").addClass("hide_div");
        $(".summary-expert").addClass("hide_div");
           $(".politics").removeClass("hide_div");
           $("#end_quiz").removeClass("hide_div");
           $(".right-timeline").addClass("hide_div");
        nextQuestions();
       })
       $("#next_sum2").click(function(){
        $("#right-side_two").removeClass("hidden-xs");
        $(".lefty").addClass("hide_div");
        $(".lefto").removeClass("hide_div");
        $(".containea").removeClass("hide_div");
        $(".lifeline").removeClass("hide_div");
        $(".summary").addClass("hide_div");
        $(".summary-scholar").addClass("hide_div");
        $(".summary-expert").addClass("hide_div");
           $(".politics").removeClass("hide_div");
           $("#end_quiz").removeClass("hide_div");
           $(".right-timeline").addClass("hide_div");
        nextQuestions();
       })
 })
 $(document).ready(function(){
    $("#end_quiz").click(function(){
     $("#right-side_two").addClass("hidden-xs");
     $(".lefto").addClass("hide_div");
     $(".lefty").removeClass("hide_div");
     $("#select").addClass("hidden");
     $("#instructions").removeClass("hide_div");
     $(".containea").addClass("hide_div");
     $(".lifeline").addClass("hide_div");
     resetScore();
     
    })
   
    
 })
 $(document).ready(function(){
    $("#end_sum").click(function(){
     $("#right-side_two").addClass("hidden-xs");
     $(".lefto").addClass("hide_div");
     $(".lefty").removeClass("hide_div");
     $("#select").addClass("hidden");
     $("#instructions").removeClass("hide_div");
     $(".containea").addClass("hide_div");
     $(".summary").addClass("hide_div");
     $(".summary-scholar").addClass("hide_div");
     $(".summary-expert").addClass("hide_div");
     $(".politics").removeClass("hide_div");
     $(".lifeline").addClass("hide_div");
     resetScore();
     
    })
    $("#end_sum1").click(function(){
        $("#right-side_two").addClass("hidden-xs");
        $(".lefto").addClass("hide_div");
        $(".lefty").removeClass("hide_div");
        $("#select").addClass("hidden");
        $("#instructions").removeClass("hide_div");
        $(".containea").addClass("hide_div");
        $(".summary").addClass("hide_div");
        $(".summary-scholar").addClass("hide_div");
        $(".summary-expert").addClass("hide_div");
        $(".politics").removeClass("hide_div");
        $(".lifeline").addClass("hide_div");
        resetScore();
        
       })
       $("#end_sum2").click(function(){
        $("#right-side_two").addClass("hidden-xs");
        $(".lefto").addClass("hide_div");
        $(".lefty").removeClass("hide_div");
        $("#select").addClass("hidden");
        $("#instructions").removeClass("hide_div");
        $(".containea").addClass("hide_div");
        $(".summary").addClass("hide_div");
        $(".summary-scholar").addClass("hide_div");
        $(".summary-expert").addClass("hide_div");
        $(".politics").removeClass("hide_div");
        $(".lifeline").addClass("hide_div");
        resetScore();
        
       })
 })

$(document).ready(function(){
   $(".info_button").click(function(){
    $(".politics").removeClass("hide_div");
    $(".containea").removeClass("hide_div");
    nextQuestions();
   })
   $('#pol').click(function(){
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


// modal for Lifeline
 $(document).ready(function(){
    $(".button_yes").click(function(){
        $(".img-circle").removeClass("hide_div");
        useLifeline();
        
 })
});
// function to remove bubbles
$(document).ready(function(){
    $("body").click(function(){
        $(".bg-bubbles").addClass("hide_div");
        
 })
});




