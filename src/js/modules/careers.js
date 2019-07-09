import Swiper from 'swiper';
export default function contacts() {	

  
  var smax = $('.careers__hero .swiper-slide').length < 10 ? '0'+$('.careers__hero .swiper-slide').length : $('.careers__hero .swiper-slide').length;
  $('.careers__hero .pagination-wrapper .max').html(smax);
	var mySwiper = new Swiper ('#careers-hero-slider', {
    // Optional parameters
    
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      init: function () {
        
      },
      slideChange: function(){        
        var current = this.activeIndex < 10 ? '0'+this.activeIndex : this.activeIndex;        
        $('.careers__hero .pagination-wrapper .min').html(current);
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    }    
  });  
};