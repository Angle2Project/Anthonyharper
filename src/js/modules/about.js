export default function thinking() {	
	$('#about-filter').click(function(d){
		if(window.innerWidth < 900){
			$('.about .filters--list').toggleClass('active');
		}
	})
};