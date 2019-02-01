import Swiper from 'swiper';
import $ from 'jquery';
export default function specialities() {
  let specialtiesList;
  let specialtiesListType;
  if($(window).width() > 900){
    specialtiesListType = 'desktop';
    specialtiesList = new Swiper('#home-specialties-slider', {
      slidesPerView: 4,
      navigation: {
        nextEl: '#home-specialties-slider .home__main-slider_navigation--arrows .arrow-next',
        prevEl: '#home-specialties-slider .home__main-slider_navigation--arrows .arrow-prev',
      },
      pagination: {
        el: '#home-specialties-slider .home__main-slider_navigation--pagination',
        type : 'fraction',
        formatFractionCurrent : function(current){
          return current < 10 ? '0'+current : current;
        },
        formatFractionTotal : function(total){
          return total < 10 ? '0' + total : total;
        }
      }
    });  
  }else{
    specialtiesListType = 'mobile';
    specialtiesList = new Swiper('.home__specialties_list', {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    }); 
  }
  $(window).resize(function(){
    if($(window).width() > 900){
      if(specialtiesListType == 'mobile'){
        specialtiesList.destroy();
        specialtiesList = null;
        specialtiesListType = 'desktop';
        specialtiesList = new Swiper('#home-specialties-slider', {
          slidesPerView: 4,
          navigation: {
            nextEl: '#home-specialties-slider .home__main-slider_navigation--arrows .arrow-next',
            prevEl: '#home-specialties-slider .home__main-slider_navigation--arrows .arrow-prev',
          },
          pagination: {
            el: '#home-specialties-slider .home__main-slider_navigation--pagination',
            type : 'fraction',
            formatFractionCurrent : function(current){
              return current < 10 ? '0'+current : current;
            },
            formatFractionTotal : function(total){
              return total < 10 ? '0' + total : total;
            }
          }
        });
      }
    }else{
      if(specialtiesListType == 'desktop'){
        specialtiesList.destroy();
        specialtiesList = null;
        specialtiesListType = 'mobile';
        specialtiesList = new Swiper('.home__specialties_list', {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 8,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        }); 
      }
    }
    if($('.modal').is(':visible')){
      $('.modal').fadeOut(300, function(){
        $('body').removeClass('no-scroll');
        $('.modal').removeClass('modal-show');
        $('.modal-specialties .modal__transactions ul').show();
        $('.modal').show();
      });
    }
  }); 
  

  // Modal events

  $('.modal').click(function(e){
    if($(e.target).hasClass('modal__close') || $(e.target).hasClass('modal__scroll')){
      $(e.currentTarget).fadeOut(300, function(){
        $('body').removeClass('no-scroll');
        $(e.currentTarget).removeClass('modal-show');
        $('.modal-specialties .modal__transactions ul').show();
        $(e.currentTarget).show();        
      });
    }
  })

  let modalSwiper;
  $('.home__specialties_list--item').click(function(e){
    console.log(modalSwiper);
    if($('.modal__expertise').length){
      if($('.modal__expertise .swiper-slide').length < 4)$('.modal__expertise_prev, .modal__expertise_next').hide();
      if(modalSwiper)modalSwiper.destroy();
      setTimeout(function(){
        modalSwiper = new Swiper('.modal__expertise .swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            prevEl: '.modal__expertise_prev',
            nextEl: '.modal__expertise_next',
          }        
        });  
      }, 100);
    }
    if($('.modal-specialties .modal__article').length){      
      $('.modal-specialties .modal__article').removeAttr('style');
      let h = ($('.modal-specialties .modal__article').height() / 2 + 120);
      $('.modal-specialties .modal__article').height(h);
    }
    if($('.modal-specialties .modal__transactions').length){      
      $('.modal-specialties .modal__transactions ul').removeAttr('style');
      let h = ($('.modal-specialties .modal__transactions ul').height() / 2 + 60);
      $('.modal-specialties .modal__transactions ul').height(h);
      $('.modal-specialties .modal__transactions ul').hide();
      $('.modal__transactions.open').removeClass('open');
      $('.modal-specialties .modal__transactions').unbind('click');
      $('.modal-specialties .modal__transactions').click(function(e){
        if($('.modal-specialties .modal__transactions ul').is(':hidden')){
          $('.modal-specialties .modal__transactions').addClass('open');
          $('.modal-specialties .modal__transactions ul').fadeIn(300);
        }else{
          $('.modal-specialties .modal__transactions').removeClass('open');
          $('.modal-specialties .modal__transactions ul').fadeOut(300);
        }
      })
    }    
    $('body').addClass('no-scroll');
    $('.modal-specialties').addClass('modal-show');    
  });

}

    