/* global $ */
// slider//

$(function () {
    'use strict';
    var leftArrow = $('.fa-chevron-circle-left'),
        rightArrow = $('.fa-chevron-circle-right');
    function checkclint() {
        ($('.person:first').hasClass('enable')) ? leftArrow.fadeOut() : leftArrow.fadeIn();
        ($('.person:last').hasClass('enable')) ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
   
    checkclint();
    $('.testi i').click(function () {
        if ($(this).hasClass('fa-chevron-circle-left')) {
            $('.testi .enable').removeClass('enable').fadeOut(100, function () {
                $(this).prev('.person').addClass('enable').fadeIn();
                $('.pager li.active').removeClass('active').prev('.pager li').addClass('active');
                checkclint();
            });
            
        } else {
            $('.testi .enable').removeClass('enable').fadeOut(100, function () {
                $(this).next('.person').addClass('enable').fadeIn();
                $('.pager li.active').removeClass('active').next('.pager li').addClass('active');
                checkclint();
            });
        }
        
    });
    
    //active class navbar//
    
    $('.navbar ul li ').click(function () {
        $('.navbar ul li.active').removeClass('active');
        $(this).addClass('active');
    });
    
    //scroll to needed part of page//
    //scrollTop: $('classname/idname want to go it').offset().top
    
    $('.navbar ul li a').click(function () {
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    
    //niceScroll//
    
    $('body').niceScroll({
        cursorcolor: "#2dcc70",
        cursorwidth: "7px",
        cursorborderradius: "none",
        cursorborder: "1px solid #2dcc70",
        autohidemode: 'false',
        emulatetouch: false
        
    });
    //scroll top//
    $('i.fa-angle-double-up').click(function () {
        $('html, body').animate({
            scrollTop: '0'
        }, 1000);
    });
});