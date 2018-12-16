import Swiper from 'swiper';
import $ from 'jquery';
export default function home() {
    if($(window).width() < 480){
      var specialtiesList = new Swiper('.home__specialties_list', {
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
      if($(window).width() > 480){
        if(specialtiesList){
          specialtiesList.destroy();
          specialtiesList = null;
        }        
      }else{
        if(!specialtiesList){
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
    });

  }

    