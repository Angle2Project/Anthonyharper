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

	//Dropdown
	$('.dropdown').mouseenter(function(){		
		$(this).addClass('hover');
		$(this).addClass('index');
		$(this).find('.dropdown__list').slideDown(200);
	});
	$('.dropdown').mouseleave(function(){
		let el = $(this);
		$(this).removeClass('hover');
		$(this).find('.dropdown__list').slideUp(200, function(){
			el.removeClass('index');
		});
	});
	$('.dropdown__list li').click(function(){
		let el = $(this);
		let val = $(this).attr('data-value');
		let text = $(this).text();
		$(this).closest('.dropdown').find('.current').text(text);
		$(this).closest('.dropdown__list').find('.selected').removeClass('selected');
		$(this).addClass('selected');
		$(this).closest('.dropdown__list').slideUp(200, function(){
			el.closest('.dropdown').removeClass('index');
		});
		$(this).closest('.dropdown').removeClass('hover');
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
				
				let summ = 0;
				let h = ($('.modal-about .modal__article').height() / 2);
				$('.modal-about .modal__article > *').each(function(i, el){			
				if(summ > h)return;
				summ += ($(el).height() + 30);			
				})		  
				$('.modal-about .modal__article').height(summ);
			}		
			if($('.modal-about .modal__transactions').length){
				$('.modal-about .modal__transactions ul').removeAttr('style');
				$('.modal-about .modal__transactions ul').each(function(i, el){
					let summ = 0;
					let h = $(el).height() / 2;
					$(el).find('li').each(function(i, el){
						if(summ > h)return;
						summ += ($(el).height() + 30);
					})				
						$(el).height(summ);
				});		  	
			}    
			$('body').addClass('no-scroll');
			$('.modal-specialties').addClass('modal-show');    
		});
		
};