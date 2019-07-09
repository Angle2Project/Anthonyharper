

import $ from 'jquery'
//import Scrollbar from 'smooth-scrollbar'
// import WOW from 'wowjs'
import home from './modules/home'
import specialities from './modules/specialities'
import contacts from './modules/contacts'
import thinking from './modules/thinking'
import about from './modules/about'
import careers from './modules/careers'

$(document).ready(() => {})

var app = {
  init: function() {
    if (document.querySelector('.wow')) {
      window.wow = new WOW.WOW({
        live: false
      });
      window.wow.init();
    }
    $('.header__nav_button').click(function(e){
      $('header').toggleClass('menu--active');
    });
    $(document).scroll(function(e){
      if($(document).scrollTop() > 0){
        $('header').addClass('scroll');
      }else{
        $('header').removeClass('scroll');
      }
    });
    var page = $('body').attr('class')
    //Scrollbar.init(document.querySelector('#main-scroll'))
    switch (page) {
      case 'home':
        home()
        break
      case 'specialities':
        specialities()
        break  
      case 'contacts':
        contacts()
        break
      case 'thinking':
        thinking()
        break
      case 'about':
        about()
        break
      case 'careers':
        careers()
        break
      default:
        // statements_def
        break
    }
  }
}

app.init()
