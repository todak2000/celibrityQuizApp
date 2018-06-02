function addName(){
    alert("hi");
    var nameInput = document.getElementById("name").value;
    var hname = document.getElementById("h-name");
    hname.append(nameInput); 
}

$(document).ready(function(){
   $(".info_button").click(function(){
       $(".politics").removeClass("hide_div");
  
   })

})
// Next button on question 1
$(document).ready(function(){
    $("#next_pol01").click(function(){
        // $(".pol_questions02").removeClass("hide_div");
        // $(".pol_questions01").addClass("hide_div");
        $(".img-circle").addClass("hide_div");
        showQuestion();
        
    })
    

 })
 // Next button on question 2
$(document).ready(function(){
    $("#next_pol02").click(function(){
        console.log("hi")
        $(".pol_questions03").removeClass("hide_div");
        $(".pol_questions01").addClass("hide_div");
        $(".pol_questions02").addClass("hide_div");
        $(".img-circle").addClass("hide_div");

        
    })
    

 })
 // Next button on question 3
$(document).ready(function(){
    $("#next_pol03").click(function(){
        $(".pol_questions04").removeClass("hide_div");
        $(".pol_questions01").addClass("hide_div");
        $(".pol_questions02").addClass("hide_div");
        $(".pol_questions03").addClass("hide_div");
        $(".img-circle").addClass("hide_div");

        
    })
    

 })
 // Next button on question 4
$(document).ready(function(){
    $("#next_pol04").click(function(){
        $(".pol_questions05").removeClass("hide_div");
        $(".pol_questions01").addClass("hide_div");
        $(".pol_questions02").addClass("hide_div");
        $(".pol_questions03").addClass("hide_div");
        $(".pol_questions04").addClass("hide_div");
        $(".img-circle").addClass("hide_div");

        
    })
    

 })
 $(document).ready(function(){
    $("#next_pol05").click(function(){
        $(".pol_questions05").removeClass("hide_div");
        $(".pol_questions01").addClass("hide_div");
        $(".pol_questions02").addClass("hide_div");
        $(".pol_questions03").addClass("hide_div");
        $(".pol_questions04").addClass("hide_div");
        $(".pol_questions05").addClass("hide_div");
        $(".img-circle").addClass("hide_div");

        
    })
    

 })

// modal for Lifeline
 $(document).ready(function(){
    $(".button_yes").click(function(){
        $(".img-circle").removeClass("hide_div");
 
 })
});





