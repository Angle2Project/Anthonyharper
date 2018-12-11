import $ from 'jquery'
import Scrollbar from 'smooth-scrollbar'
// import WOW from 'wowjs'
import home from './modules/home'
import contacts from './modules/contacts'
import thinking from './modules/thinking'

$(document).ready(() => {})
var app = {
  init: function() {
    if (document.querySelector('.wow')) {
      window.wow = new WOW.WOW({
        live: false
      })

      window.wow.init()
    }
    var page = $('body').attr('class')
    Scrollbar.init(document.querySelector('#main-scroll'))
    switch (page) {
      case 'home':
        home()
        break
      case 'contacts':
        contacts()
        break
      case 'thinking':
        thinking()
        break
      default:
        // statements_def
        break
    }
  }
}

app.init()
