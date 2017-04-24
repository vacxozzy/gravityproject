$( document ).ready(function() {
    
    $("#pic").click(function(){
        // Add some code here to make the picture move DOWN by 10px.g
    setInterval(function(){$("#pic").css("top", $("#pic").offset().top + 10)}, 1000);
    });
});
