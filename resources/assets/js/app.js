$(document).ready(function () {

  // slick slider 
  $('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-left"></i>',
    nextArrow:'<i class="fas fa-arrow-right"></i>',
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  
  });

  // slick slider 
  $('.services-slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-up"></i>',
    nextArrow:'<i class="fas fa-arrow-down"></i>',
    centerMode: true,
    centerPadding: '0'
  });

  // slick slider 
  $('.img-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-up"></i>',
    nextArrow:'<i class="fas fa-arrow-down"></i>',
    centerMode: true,
    centerPadding: '0',
    asNavFor: '.text-slider',
  });


  // slick slider 
  $('.text-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.img-slider',
  });

  // venubox 
  $('.venubox').venobox(); 
   
  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

// slick slider 
$('.sponsor-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
 
});

});