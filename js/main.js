$(function(){
    $('.slider').slick({
        autoplay: true,
        arrows: true,
        dots: true,
        speed: 2000,
        infinite: true
    });
});


$(function(){
    // phone
    $('.more--btn').on('click', function(){
        var phones = document.querySelector('.col--phone ul');
        if($(phones).is(':visible')){
            $(phones).slideUp();
            $(this).removeClass('open');
        }
        else{
            $(phones).slideDown();
            $(this).addClass('open');
        }
    return false;
    });

  // menu
    $('.nav--btn').on('click', function(){
        var menu = document.querySelector('header .nav');
        if($(menu).is(':visible')){
            $(menu).slideUp();
            $(this).removeClass('close');
        }
        else{
            $(menu).slideDown();
            $(this).addClass('close');
        }
    })
      // phone btn
    $('.phone--btn').on('click', function(){
        var phone = document.querySelector('header .col--phone');
        if($(phone).is(':visible')){
            $(phone).slideUp();
            $(this).removeClass('close');
        }
        else{
            $(phone).slideDown();
            $(this).addClass('close');
        }
        return false;
    });
        // social btn
    $('.social--btn').on('click', function(){
        var social = document.querySelector('header .social');
        $(social).slideDown();
        $(document).bind('touchstart', function(e){
            if(!(e.target).closest('header .social')){
                $(social).slideUp();
            }
            e.stopPropagation();
        })
        return false;
    });

});

// Modal
$(document).ready(function() {
	$('.open--modal').on('click', function(){
		var link = $(this).attr('data-modal');
		$(link).fadeIn();
		return false;
	});

	$('.modal .close, .modal__layer').on('click', function() {
		$(this).parents('.modal, .mobile-contacts').fadeOut();
		return false;	
	});

    $('[name="tel"]').inputmask('+7 (999) 999-99-99');
    
    $('input[type="submit"]').on('click', function(){
		var success = $(this).attr('data-modal');
		$(success).fadeIn();
		return false;
    })
});


