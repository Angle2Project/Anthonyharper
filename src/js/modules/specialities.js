import Swiper from 'swiper';
import $ from 'jquery';
export default function home() {
  let specialtiesList;
    let specialtiesListType;
    if($(window).width() > 480){
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
      if($(window).width() > 480){
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
    }); 
  }

    