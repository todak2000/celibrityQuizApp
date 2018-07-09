// function addName(){
//     alert('hi');
//     var nameInput = $('#name').val();
//     var hname = document.getElementById('nameing');
//     hname.innerHTML = nameInput; 
    
// }
$(document).ready(function(){
    $("#pol_mobile").click(function(){
     $("#right-side_two").removeClass("hidden-xs");
     $(".lefty").addClass("hide_div");
     $(".containea").removeClass("hide_div");
     $(".lifeline").removeClass("hide_div");
     nextQuestions();
    })
   
    
 })
 $(document).ready(function(){
    $("#end_quiz").click(function(){
     $("#right-side_two").addClass("hidden-xs");
     $(".lefty").removeClass("hide_div");
     $(".containea").addClass("hide_div");
     $(".lifeline").addClass("hide_div");
     
    })
   
    
 })

$(document).ready(function(){
   $(".info_button").click(function(){
    $(".politics").removeClass("hide_div");
    $(".containea").removeClass("hide_div");
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




