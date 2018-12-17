import datePicker from 'air-datepicker';
import en from 'air-datepicker/dist/js/i18n/datepicker.en.js';
export default function thinking() {
	var position;	
	$('#datepicker').datepicker({
	    language: 'en',
	    position : $(window).width() > 480 ? 'bottom left' : 'bottom right'
	  });  
};