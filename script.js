$( document ).ready(function() {

$(".iter").on("click", function() {
    $(".top-button").each(function() {
        console.log("We're iterating!")
        })
    });

$('.top-button').on("click", function (){
    var id = $(this).data('assigned-id'); 
    $("body").find("#" + id).removeClass("hidden");
    $(".card-hider").not(document.getElementById(id)).addClass("hidden");
    });

$( "#proxy-button" ).on( "click", function () {
    setTimeout( $.proxy( function () {
        $( this ).addClass( "hidden" );
    }, this), 1000);
 });
});
