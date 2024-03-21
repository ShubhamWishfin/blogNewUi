$(document).ready(function () {
    $(document).on('click', '.MobileSearchWrapperShow', function () {
        $('.MobileSearchWrapper').slideToggle();
    });
    $(document).on('click', '.hamburgerMenuTop', function () {
        $('.headerNav').slideToggle();
    });

    $('.headerNav .group').click(function(){
        if ($(window).width() < 991) {
            $('header').animate({scrollTop: 0}, 'slow');
        }
    });

    $(document).on({
        // click: function () {            
        //     toggleArrowDirection($(this));
        // },
        mouseenter: function () {
            toggleArrowDirection($(this));
        },
        mouseleave: function () {
            toggleArrowDirection($(this));
        }
    }, 'nav li.group');

    $(".topFooterLinks li").click(function(e) { 
        let dataKey = $(this).attr("data-key"); 
        $(".topFooterLinks li").find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        
        $(".topFooterLinks li").removeClass("bg-[#192a43]");
        $(this).addClass("bg-[#192a43]");
        $(".middleFooterLinks ul").addClass("hidden");
        $(".middleFooterLinks ul[data-key='" + dataKey + "']").removeClass("hidden").addClass('flex'); 
    });
    
    
    

    
}); // jquery end

function toggleArrowDirection(element) {
    let arrow = element.find('i');
    if (arrow.hasClass('fa-chevron-down')) {
        arrow.removeClass('fa-chevron-down').addClass('fa-chevron-up');
    } else {
        arrow.removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
}
