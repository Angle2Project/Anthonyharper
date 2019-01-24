import datePicker from 'air-datepicker';
import en from 'air-datepicker/dist/js/i18n/datepicker.en.js';
export default function thinking() {
	var position;	
	$('#datepicker').datepicker({
	    language: 'en',
	    position : $(window).width() > 900 ? 'bottom left' : 'bottom right'
	  });  
};