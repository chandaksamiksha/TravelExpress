$(document).ready(function(){
    $("#hotelButton").on("click",function(){
    $("#hotel").css("display","flex");
    $("#flight").css("display","none");
  
});
});

$(document).ready(function(){
    $("#flightButton").on("click",function(){
    $("#flight").css("display","flex");
    $("hotel").css("display","none");
    })
});