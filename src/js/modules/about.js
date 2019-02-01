export default function thinking() {	
	$('#about-filter').click(function(d){
		if(window.innerWidth < 900){
			$('.about .filters--list').toggleClass('active');
		}
	})

	$(window).resize(function(){
		if($('.modal').is(':visible')){
			$('.modal').fadeOut(300, function(){
				$('body').removeClass('no-scroll');
				$('.modal').removeClass('modal-show');				
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
	  $('.about__team_list li').click(function(e){
		$('body').addClass('no-scroll');
		$('.modal-about').addClass('modal-show');
		
		if($('.modal-about .modal__article').length){      
		  $('.modal-about .modal__article').removeAttr('style');
		  let h = ($('.modal-about .modal__article').height() / 2 + 120);
		  $('.modal-about .modal__article').height(h);
		}		
		if($('.modal-about .modal__transactions').length){
			$('.modal-about .modal__transactions ul').removeAttr('style');
			$('.modal-about .modal__transactions ul').each(function(i, el){
				let h = ($(el).height() / 2 + 200);
		  		$(el).height(h);
			});		  	
		}    
		$('body').addClass('no-scroll');
		$('.modal-specialties').addClass('modal-show');    
	  });
};