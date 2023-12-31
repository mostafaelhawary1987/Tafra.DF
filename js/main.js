$(window).on("load", function () {
  $(".preloader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });


});
 // Sidemenu 
 $("#openNav").click( function() {

  $('.sidenav').addClass('open');
  $('.overlay').fadeIn();
  $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
  $('.sidenav').removeClass('open');
  $('.overlay').fadeOut();
  $('body').removeClass('ovh');
});
$(".advanced-search-btn").click(function () {
  $(".advanced-input").slideToggle("300");
});

var $mediaElements = $('.course');
$('.tabs-sec .tab-a').click(function (e) {
    e.preventDefault();
    var filterVal = $(this).data('filter');
    $(".tabs-sec .tab-a").not(this).removeClass("active");
    $(this).toggleClass("active");
    $mediaElements.removeClass("active").filter('.' + filterVal).addClass("active");
    // if (filterVal === 'one') {
    //   $mediaElements.show();
    // } else {
        
    // }
});


 $("#nav-icon").click( function() {
  $('#nav-icon').toggleClass('nav-icon_open');
  $('.sidenav').toggleClass('open');
  $(this).toggleClass('open');   
  $('body').toggleClass('ovh');
});
$("#openNav").click( function() {

     
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
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".loader").fadeOut(500, function () {
      $('body').css("overflow", "visible");


  });
});
$('.slider-head').owlCarousel({
  autoplay: true,
  rtl: true,
  loop: true,
  dots:true,
  nav: false,
  items: 1,
  navText: [" <i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],



});
$('.partner_slider').owlCarousel({
  items:5,
  autoplay:true,
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
      items:2
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

    //////////** Events slider **//////////
    var evswiper = new Swiper(".events-home-section .swiper-container", {
      spaceBetween: 0,
      centeredSlides: true,
      loop: false,
      autoplay:false,
      // autoplay: {
      //   delay: 5300,
      // },
      navigation: {
        nextEl: ".events-one-section .swiper-btn-next",
        prevEl: ".events-one-section .swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
       
      },
    });
    var evswiper = new Swiper(".events-one-section .swiper-container", {
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5300,
      },
      navigation: {
        nextEl: ".events-one-section .swiper-btn-next",
        prevEl: ".events-one-section .swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
       
      },
    });
    var evswiper = new Swiper(".events-two-section .swiper-container", {
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5300,
      },
      navigation: {
        nextEl: ".events-one-section .swiper-btn-next",
        prevEl: ".events-one-section .swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
       
      },
    });
    var evswiper = new Swiper(".events-thr-section .swiper-container", {
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5300,
      },
      navigation: {
        nextEl: ".events-one-section .swiper-btn-next",
        prevEl: ".events-one-section .swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
       
      },
    });
$('.partners_slider').owlCarousel({
  items:5,
  autoplay:true,
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
      items:2
    },
    991:{
      items:3
    },
    1199:{
      items:4
    },
    1200:{
      items:5
    }
  }
}); 
$('.side-news').owlCarousel({
  autoplay: true,
  rtl: true,
  margin:15,
  loop:true,
  nav: false,
  dots:false,
  navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"],
  responsive: {
      0: {
          items: 1
      },
      480: {
          items: 2
      },
      767: {
          items: 3
      },
      991: {
          items: 3   
      },
      1199: {
          items: 4
      },
      1200: {
          items: 4
      }
  }
});
$('.ge-slider-one').owlCarousel({
  items:6,
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
      items:4
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
      items:1
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
var owl = $("#banner-slider-demo-1").owlCarousel({
  items: 1,
  rtl: true,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true, 
  dots: true,
  dotsContainer: '#carousel-custom-dots',
  navRewind: true,
  loop: false, });
  $('.owl-dot').click(function(){owl.trigger('to.owl.carousel', [$(this).index(), 300]);});
  //Random index generator
  function randomPosition(){
  var r_hb = $('#carousel-custom-dots li').length;
  var randomize = null;
  
  
  randomize=1
  
  
  if (randomize != 0) {
  return (Math.floor(Math.random()* r_hb));
  }
  else { return 0 ;}
  }
  //Sort random function
  function random(owlSelector){
  owlSelector.children().sort(function(){
  return Math.round(Math.random()) - 0.5;
  }).each(function(){
  $(this).appendTo(owlSelector);
  });
  }
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
      items:2
    },
    1200:{
      items:2
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


