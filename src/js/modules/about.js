export default function thinking() {	
	$('#about-filter').click(function(d){
		if(window.innerWidth < 900){
			$('.about .filters--list').toggleClass('active');
		}
	})

	let modalTransactions = function(){
		$('.profile .modal__transactions ul').removeAttr('style');
		$('.profile .modal__transactions ul').each(function(i, el){
			let summ = 0;
			let h = $(el).height() / 2;
			$(el).find('li').each(function(i, el){
				if(summ > h)return;
				summ += ($(el).height());
			})				
				$(el).height(summ + 100);
		});		  	
	};

	if($('.profile .modal__transactions').length){
		modalTransactions();
	}

	$(window).resize(function(){
		if($('.profile .modal__transactions').length){
			modalTransactions();
		}
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
	$('.dropdown li.sub').mouseenter(function(){		
		$(this).find('.dropdown__list_sub').slideDown(150);
	});
	$('.dropdown').mouseleave(function(){
		let el = $(this);
		$(this).removeClass('hover');
		$(this).find('.dropdown__list_sub').slideUp(200);
		$(this).find('.dropdown__list').slideUp(200, function(){
			el.removeClass('index');
		});
	});	
	$('.dropdown__list li:not(.sub)').click(function(){
		let el = $(this);
		let val = $(this).attr('data-value');
		let text = $(this).text();
		$('#about-name-filter').val('');
		$('.about__team_filters .dropdown').removeClass('selected');
		$('.about__team_filters .dropdown').each(function(i, el){
			let plaeceholder = $(el).find('.current').attr('data-placeholder');
			console.log($(el).find('.current'));
			$(el).find('.current').text(plaeceholder);
			$(el).find('li.selected').removeClass('selected');
			$(el).removeClass('selected');
			
		})


		$(this).closest('.dropdown').addClass('selected');
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
				$('.modal-about .modal__article .solo').removeClass('solo');				
				if($('.modal-about .modal__article p').length == 1)$('.modal-about .modal__article p').addClass('solo');								
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
		
		$("#about-name-filter").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$(".about__team_list li").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});
		
};