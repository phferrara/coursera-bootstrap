$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');   
            $('#carouselButton').children('span').removeClass('fa-pause'); 
            $('#carouselButton').children('span').addClass('fa-play');                
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');   
            $('#carouselButton').children('span').removeClass('fa-play'); 
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
$(document).ready(function(){
    $("#reserveTableButton").click(function(){
        $("#reserveTableModal").modal();
    });
    $("#reserveTableModal button").click(function(){
        $("#reserveTableModal").modal('hide');
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal();
    });
    $("#loginModal button").click(function(){
        $("#loginModal").modal('hide');
    });
});