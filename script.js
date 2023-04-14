$(document).ready(function() {
    02
        $('.fadeonload').each( function(i){
    03
            $(this).animate({'opacity':'1','margin-left':'0px'},1000);
    04
        });
    05
    });


    
$(document).ready(function() {
    02
        $(window).scroll( function(){
    03
            $('.fadein').each( function(i){
    04
                    
    05
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    06
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    07
                    
    08
                if( bottom_of_window > bottom_of_element ){
    09
                    $(this).animate({'opacity':'1'},1000);
    10
                }
    11
                    
    12
            });
    13
        });
    14
    });
    
