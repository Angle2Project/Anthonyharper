import Swiper from 'swiper';
//import $ from 'jquery';
import IMask from 'imask';
export default function home() {
  var phoneMask = new IMask(
  document.getElementById('form-phone'), {
    mask: '(00)000 0000'
  });

  // Swiper init  
  var homeTopSwiper = new Swiper('.home__main-slider .swiper-container', {
      navigation: {
        nextEl: '#home-top-slider .home__main-slider_navigation--arrows .arrow-next',
        prevEl: '#home-top-slider .home__main-slider_navigation--arrows .arrow-prev',
      },      
      pagination: {
        el: '#home-top-slider .home__main-slider_navigation--pagination',
        type : 'fraction',
        formatFractionCurrent : function(current){
          return current < 10 ? '0'+current : current;
        },
        formatFractionTotal : function(total){
          return total < 10 ? '0' + total : total;
        }
      },      
      slidesPerView: 1,
      speed: 700      
      //watchOverflow : true
      //spaceBetween: 1
    });	
    let specialtiesList;
    let specialtiesListType;
    if(window.innerWidth > 900){
      specialtiesListType = 'desktop';
      specialtiesList = new Swiper('#home-specialties-slider', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
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
        slidesPerColumnFill: 'row',
        spaceBetween: 8,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }); 
    }
    $(window).resize(function(){      
      if(window.innerWidth > 900){
        if(specialtiesListType == 'mobile'){
          specialtiesList.destroy();
          specialtiesList = null;
          specialtiesListType = 'desktop';
          specialtiesList = new Swiper('#home-specialties-slider', {
            slidesPerView: 4,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
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
            slidesPerColumnFill: 'row',
            spaceBetween: 8,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          }); 
        }
      }
    });    
    // if($(window).width() < 480){
    //   specialtiesList = new Swiper('.home__specialties_list', {
    //     slidesPerView: 2,
    //     slidesPerColumn: 2,
    //     spaceBetween: 8,
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     }
    //   });  
    // }
    
    // $(window).resize(function(){      
    //   if($(window).width() > 480){
    //     if(specialtiesList){
    //       specialtiesList.destroy();
    //       specialtiesList = null;
    //     }        
    //   }else{
    //     if(!specialtiesList){
    //       specialtiesList = new Swiper('.home__specialties_list', {
    //         slidesPerView: 2,
    //         slidesPerColumn: 2,
    //         spaceBetween: 8,
    //         pagination: {
    //           el: '.swiper-pagination',
    //           clickable: true,
    //         }
    //       });  
    //     }
    //   }
    // });
  

    var GoogleMapsLoader = require('google-maps'); // only for common js environments
    GoogleMapsLoader.KEY = 'AIzaSyCTLKxdfN261yLSnwttv5tfc7Vzzjz7BVQ';
     
    GoogleMapsLoader.load(function(google) {        
      //var center = (page == 'home' ? {lat: -40.971740, lng: 180.760507} : {lat: -40.971740, lng: 174.760507})
      var center = (window.innerWidth > 900 ? {lat: -40.971740, lng: 180.760507} : {lat: -39.971740, lng: 173.760507});

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        scrollwheel: false,
        center: center,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP
          },
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#e26d27"
              },
              {
                "saturation": -35
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.icon",
            "stylers": [
              {
                "color": "#e26d27"
              },
              {
                "saturation": -100
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#797d7a"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#191919"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2d2c"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#263c3f"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6b9a76"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#38414e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#212a37"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9ca5b3"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#333433"
              },
              {
                "lightness": 5
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#e26d27"
              },
              {
                "saturation": -35
              },
              {
                "lightness": -35
              },
              {
                "weight": 1
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#1f2835"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#f3d19c"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#333433"
              },
              {
                "saturation": 5
              },
              {
                "lightness": -5
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2f3948"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#252525"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#515c6d"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          }
        ]
      });
      
      var image = {
            url : './img/map-marker.svg',
            size : new google.maps.Size(73,73),
            anchor : new google.maps.Point(36,36),
            origin: new google.maps.Point(0, 0)
        };        
        var myLatLng1 = {lat: -36.846758, lng: 174.763095};
        var myLatLng2 = {lat: -43.531304, lng: 172.631966};    

        var marker1 = new google.maps.Marker({
            icon : image,
            position : myLatLng1,
            map : map,
            //title: 'ул.Спасская, 25, г. Вышгород'
        });
        var marker2 = new google.maps.Marker({
            icon : image,
            position : myLatLng2,
            map : map,
            //title: 'ул.Спасская, 25, г. Вышгород'
        });
        var contentString1 = '<div class="marker-window-info"><p class="marker-window-info__orange">Level 6, Chorus House, 66 Wyndham Street, PO Box 2646</p><p>Auckland 1140, New Zealand</p><p>P: +64 9 920 6400, F: +64 9 920 9599</p><p>Email: <a href="mailto:info@ah.co.nz">info@ah.co.nz</a></p></div>';
        var contentString2 = '<div class="marker-window-info"><p class="marker-window-info__orange">Level 9 HSBC Tower, 62 Worcester Boulevard, PO Box 2646</p><p>Christchurch 8140, New Zealand</p><p>P: +64 3 379 0920, F: +64 3 366 9277</p><p>Email: <a href="mailto:info@ah.co.nz">info@ah.co.nz</a></p></div>';
        var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
      });
      var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
      });
      
        marker1.addListener('click', function(e) {    
          infowindow2.close();
          console.log(infowindow1);
          infowindow1.open(map, marker1);
        });
        marker2.addListener('click', function(e) {    
          infowindow1.close();
          infowindow2.open(map, marker2);
        });  
      });
}