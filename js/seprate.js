$('#wbAbouts-carousel').owlCarousel({       
    stagePadding: 99,     
    loop:true,
    margin:9,
    nav:false,
    dots: true,
    lazyLoad: true,
    navContainerClass: 'owl-nav-custam',
    navClass: ['icon-arrow-right', 'icon-arrow-left'],
    dotsClass: 'owl-dots-custam',
    dotClass: 'owl-dot-item',
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    slideTransition: `linear`,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            stagePadding: 380,
            margin:24,
            items: 1
        },
        1280:{
            stagePadding:195,
            margin:24,
            items: 2,
        },
        1440:{
            stagePadding:38,
            margin:24,
            items: 3,
        },
        1920:{
            stagePadding:38,
            margin:24,
            items: 4,
        }
    }
})
$('#Specialities-carousel').owlCarousel({            
    loop:true,
    margin:0,
    nav: true,
    dots: false,
    lazyLoad: true,
    navContainerClass: 'owl-nav-custam',
    navClass: ['icon-arrow-right', 'icon-arrow-left'],
    dotsClass: 'owl-dots-custam',
    dotClass: 'owl-dot-item',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})   
$('#meetOurTeam-carousel').owlCarousel({            
    loop:true,
    margin:28,
    nav:true,
    dots: false,
    lazyLoad: true,
    navContainerClass: 'owl-nav-custam',
    navClass: ['icon-arrow-right', 'icon-arrow-left'],
    dotsClass: 'owl-dots-custam',
    dotClass: 'owl-dot-item',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})
$('#Healthcare-carousel').owlCarousel({  
    stagePadding: 100,          
    loop:true,
    margin:12,
    nav:false,
    dots: true,
    lazyLoad: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    slideTransition: `linear`,
    navContainerClass: 'owl-nav-custam',
    navClass: ['icon-arrow-right', 'icon-arrow-left'],
    dotsClass: 'owl-dots-custam',
    dotClass: 'owl-dot-item',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            stagePadding: 0,
            margin:24,
            items:3
        }
    }
})      
$('#wbTestimonials-carousel').owlCarousel({            
    loop:true,
    margin:12,
    nav:false,
    dots: true,
    lazyLoad: true,
    navContainerClass: 'owl-nav-custam',
    navClass: ['icon-arrow-right', 'icon-arrow-left'],
    dotsClass: 'owl-dots-custam',
    dotClass: 'owl-dot-item',
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    slideTransition: `linear`,
    responsive:{
        0:{
            items:1.2
        },
        600:{
            items:1
        },
        1000:{
            items:3,
            margin:0,
        }
    }
})

$('.faqAccHeader').click(function(){           
    $(this).parent().toggleClass('faqAccordian-open');
})

$(window).scroll(function() {
if ($(this).scrollTop() > 124){  
    $('.wbHeader').addClass("sticky");
  }
  else{
    $('.wbHeader').removeClass("sticky");
  }
});

$(document).ready(function(){
    $('#menuButton').click(function(){
       $('.wbNavMenu').css({"left":"0"});
       $('.wbOverLay').addClass("wbopen-overlay");
       $('body').addClass("fixed");
    });

    $('.wbOverLay, .wbNavMenu > ul li a').click(function(){
        $('.wbNavMenu').css({"left":"-216px"});
        $('.wbOverLay').removeClass("wbopen-overlay");;
        $('body').removeClass("fixed");

    });
})

$(".mobileNofield input").focusout(function(){
    if ($(this).val() !== '') {
        $(this).addClass('active');
    } else {
        $(this).removeClass('active');
    }
});

$('.otpfield input').focusout(function(e) {
  $('.otpfield .otpBullets').hide();
  $('.otpfield .otpBullets').click(function() {
     $(this).hide();
     $('.otpfield input').focus();
  })
  if ($(this).val() !== ''){
    $('.otpfield .otpBullets').hide();
  }
  else {
    $('.otpfield .otpBullets').show();
  }  
});


// custom select box
//TOGGLING NESTED ul
$(".wbDropDown .selected").click(function() {
    $(".wbDropDown .options ul").toggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".wbDropDown .options ul li").click(function() {
    var text = $(this).children('.name').children().html();             
    if (!$(this).hasClass('current')) {
        $('.wbDropDown .options ul li').removeClass('current');
        $(this).addClass('current');
        $(".wbDropDown .selected").html(text);
    }            
    $(".wbDropDown .options ul").hide();
    
    $('.addFamilyMemField').hide();
    if($(this).hasClass('addFamilyMemOption')) {
        $('.addFamilyMemField').show();
    }
}); 


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("wbDropDown"))
        $(".wbDropDown .options ul").hide();
});

$(document).ready(function() {    

    $('#bkSelectOptions .wb_control input:not(:first)').addClass('inactive');
    $('.bkTab-container').hide();
    $('.bkTab-container:first').show();
        
    $('#bkSelectOptions .wb_control input').click(function(){
        var t = $(this).attr('id');
      if($(this).hasClass('inactive')){ //this is the start of our condition 
        $('#bkSelectOptions .wb_control input').addClass('inactive');           
        $(this).removeClass('inactive');
        
        $('.bkTab-container').hide();
        $('#'+ t + 'C').fadeIn('slow');
     }
    });

});


$(document).ready(function() { 

    // $('#bkcloseBtn').click(function(){
    //     $('.bookingFormPopUp').hide();
    //     $('.bookingSuccesFull').hide();
    //     $('.bookingFromModel').click(function(event){
    //          event.stopPropagation();
    //          console.log('clicked');
    //          $('.bookingFormPopUp').show();
    //      });           
    // })

    $('#ContinueId').click(function() {
        if ($('#LoginSelectedId').is(':checked')) {
            $('#LoginScreen').hide();
            $('#LoginOrRegisterScreen').show();
        }
    });
    $('#ContinueId2').click(function() {
        $('#LoginScreen').hide();
        $('#LoginOrRegisterScreen').hide();
        $('#LoginBookScreen').show();
    });
    $('#ContinueId3').click(function() {
        $('#LoginScreen').hide();
        $('#LoginOrRegisterScreen').hide();
        $('#LoginBookScreen').hide();
        $('#PaymentScreen').show();
    });

    $('#BookNowID').click(function(){
        $('#LoginScreen').show();
        $('#LoginScreen #bkcloseBtn').click(function(){
            $('#LoginScreen').hide();
        })
    });

    $('#LoginOrRegisterScreen #bkcloseBtn').click(function(){
        $('#LoginOrRegisterScreen').hide();
         $('#LoginScreen').show();
    })

    $('#LoginBookScreen #bkcloseBtn').click(function(){
        $('#LoginOrRegisterScreen').show();
         $('#LoginBookScreen').hide();
    })
    
    $('#PaymentScreen #bkcloseBtn').click(function(){
        $('#LoginBookScreen').show();
         $('#PaymentScreen').hide();
    })

    $('#bookingSuccesFullOpen').click(function() {
        $('#LoginScreen').hide();
        $('#LoginOrRegisterScreen').hide();
        $('#LoginBookScreen').hide();
        $('#PaymentScreen').hide();
        $('#bookingSuccesFull').show();
    })
    $('#OKID').click(function(){
        $('.bookingFormPopUp').hide(); 
    })

    $('#wbUserLogin').click(function(){
        $('#LoginPopUp').show();       
    })      
    $('#LoginPopUpClose').click(function(){
        $('.bookingFormPopUp').hide();       
    })          
})

// audio playar JS
 $(function() {
    $('audio').audioPlayer();
});

 // Sticky Btn
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 800) { 
            $('.side-sticky-btn').show(); 
        } else { 
            $('.side-sticky-btn').hide(); 
        } 
    }); 
    // $('.side-sticky-btn').click(function(){ 
    //     $("html, body").animate({ scrollTop: 0 }, 600); 
    //     return false; 
    // }); 
});