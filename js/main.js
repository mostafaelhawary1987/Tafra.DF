$(window).on("load", function () {
  $(".preloader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });


});
 // Sidemenu 

 $("#nav-icon").click( function() {
  $('#nav-icon').toggleClass('nav-icon_open');
  $('.sidenav').toggleClass('open');
  $(this).toggleClass('open');   
  $('body').toggleClass('ovh');
});
$("#openNav").click( function() {

     
});
// tabs-sec
var $mediaElements = $('.course');
$('.tabs-sec .tab-a').click(function (e) {
    e.preventDefault();
    var filterVal = $(this).data('filter');
    $(".tabs-sec .tab-a").not(this).removeClass("active");
    $(this).toggleClass("active");
    if (filterVal === 'all') {
        $mediaElements.show();
    } else {
        $mediaElements.hide().filter('.' + filterVal).show();
    }
});

$(".closebtn,.overlay").click( function() {
  $('.sidenav').removeClass('open');
  $('.overlay').fadeOut();
  $('body').removeClass('ovh');
});

// overlay
$('.overlay-om , header nav .close-xs').on("click", function (e) {
    $(".search-om-form").removeClass("active");
    $(".overlay-om").removeClass("active");
    $('body').css('overflow', 'auto');
    $(".nav-xs-om").removeClass("active");
});

$('.slider-head').owlCarousel({
  autoplay: false,
  rtl: true,
  loop: false,
  dots:true,
  nav: false,
  items: 1,
  navText: [" <i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],



});
$('.partner_slider').owlCarousel({
  items:5,
  autoplay:false,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
     dots:true,
  responsive:{
    0:{
      items:1
    },
    425:{
      items:2
    },
    768:{
      items:3
    },
    991:{
      items:4
    },
    1199:{
      items:4
    },
    1200:{
      items:4
    }
  }
}); 
$('.partners_slider').owlCarousel({
  items:5,
  autoplay:false,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
     dots:true,
  responsive:{
    0:{
      items:1
    },
    425:{
      items:2
    },
    768:{
      items:3
    },
    991:{
      items:4
    },
    1199:{
      items:5
    },
    1200:{
      items:5
    }
  }
}); 
$('.vedio_slider').owlCarousel({
  items:2,
  autoplay:false,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
     dots:true,
  responsive:{
    0:{
      items:1
    },
    425:{
      items:1
    },
    768:{
      items:1
    },
    991:{
      items:2
    },
    1199:{
      items:2
    },
    1200:{
      items:2
    }
  }
}); 
$('.services-slider').owlCarousel({
  items:4,
  autoplay:false,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
  dots:true,
  responsive:{
    0:{
      items:1
    },
    425:{
      items:2
    },
    768:{
      items:3
    },
    991:{
      items:3
    },
    1199:{
      items:4
    },
    1200:{
      items:4
    }
  }
}); 
   $('.testimonials_slider').owlCarousel({
  
  autoplay:false,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
     dots:true,
  responsive:{
    0:{
      items:1
    },
    768:{
      items:2
    },
    991:{
      items:2
    },
    1199:{
      items:3
    },
    1200:{
      items:3
    }
  }
}); 
var a = 0;
$(window).scroll(function () {
  if ($("div").hasClass("numbers-flex")) {
    if (
      a === 0 &&
      $(this).scrollTop() >= $(".numbers-flex").offset().top - 500
    ) {
      $(".number span").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      a = 1;
    }
  }
});



$(".down[data-toggle='collapse']").on('click', function() {
  $(this).parent().children('.collapse').collapse('toggle');
  $(this).parent().siblings().find('.collapse.in').collapse('hide');
});
$(".title[data-toggle='collapse']").on('click', function() {
    $(this).parent().children('.collapse').collapse('toggle');
    $(this).parent().siblings().find('.collapse.in').collapse('hide');
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    $('.top').addClass('fixedheader');
  } else {
    $('.top').removeClass('fixedheader');
  }
}


$(function() {
        
  // contact form animations 
  $('#contact').click(function() {
  $('#contactForm').fadeIn();
  $('.contact-over').fadeIn();
  
  })
  $(document).mouseup(function (e) {
  var container = $("#contactForm");

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
      container.fadeOut();
      $('.contact-over').fadeOut();
  }
  });
  
});

$('#contactForm button.close').on('click ', function(event) {
  $('#contactForm').fadeOut();
  $('.contact-over').fadeOut();
});

if ($(window).width() <= 480){ 
    $(".wow").removeClass("wow");
    }
