/**
 * Created by KRM on 1/18/17.
 */

$(document).ready(function(){

    // Animating the "go-to" anchor scroll
    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -30
        }, 800);

        $('.collapse').removeClass('in');
        $(collapseToggleButton).removeClass('rotator');

    });



});