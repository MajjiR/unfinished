if( window.innerWidth<=620){
    alert("Please use landscape");

}
$(document).ready(function(){
    $("i").finish();
    $("i").hover(function(){
        $(this).addClass("animated tada");
        
    });
     $("p").hover(function(){
        $(this).addClass("animated bounce");
        
    });
   
});