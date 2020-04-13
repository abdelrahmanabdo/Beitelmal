jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
		var headerHeight = $('.header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    },
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.header').hasClass('is-fixed')) {
		    		$('.header').addClass('is-visible');
		    	} else {
		    		$('.header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.header').hasClass('is-fixed')) $('.header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
			});

	//open/close primary navigation
	// $('.primary-nav-trigger').on('click', function(){
	// 	$('.menu-icon').toggleClass('is-clicked');
	// 	$('.header').toggleClass('menu-is-open');
	//
	// 	//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
	// 	if( $('.primary-nav').hasClass('is-visible') ) {
	// 		$('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
	// 			$('body').removeClass('overflow-hidden');
	// 		});
	// 	} else {
	// 		$('.primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
	// 			$('body').addClass('overflow-hidden');
	// 		});
	// 	}
	// });
});



//
jQuery(document).ready(function($){
	var formModal = $('.user-modal'),
		formLogin = formModal.find('#login'),
		formSignup = formModal.find('#signup'),
		formForgotPassword = formModal.find('#reset-password'),
		formModalTab = $('.switcher'),
		tabLogin = formModalTab.children('li').eq(0).children('a'),
		tabSignup = formModalTab.children('li').eq(1).children('a'),
		forgotPasswordLink = formLogin.find('.form-bottom-message a'),
		backToLoginLink = formForgotPassword.find('.form-bottom-message a'),
		mainNav = $('.main-nav');

	//open modal
	// mainNav.on('click', function(event){
	// 	$(event.target).is(mainNav) && mainNav.children('ul').toggleClass('is-visible');
	// });

	//open sign-up form
	mainNav.on('click', '.signup', signup_selected);
	//open login-form form
	mainNav.on('click', '.signin', login_selected);

	//close modal
	formModal.on('click', function(event){
		if( $(event.target).is(formModal) || $(event.target).is('.close-form') ) {
			formModal.removeClass('is-visible');
		}
	});
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		formModal.removeClass('is-visible');
	    }
    });

	//switch from a tab to another
	formModalTab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( tabLogin ) ) ? login_selected() : signup_selected();
	});

	//hide or show password
	$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');

		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'إخفاء' == togglePass.text() ) ? togglePass.text('إظهار') : togglePass.text('إخفاء');
		//focus and move cursor to the end of input field
		passwordField.putCursorAtEnd();
	});

	//show forgot-password form
	forgotPasswordLink.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	//back to login from the forgot-password form
	backToLoginLink.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.addClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.addClass('selected');
		tabSignup.removeClass('selected');
	}

	function signup_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.removeClass('is-selected');
		formSignup.addClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.removeClass('selected');
		tabSignup.addClass('selected');
	}

	function forgot_password_selected(){
		formLogin.removeClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.addClass('is-selected');
	}

	//REMOVE THIS - it's just to show error messages
	formLogin.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formLogin.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});
	formSignup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formSignup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});


	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}

});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.focus();
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};

$(document).ready(function(){
	$('.hidden-info').fadeOut();
	$(".btn-show-hide").click(function(){
	    $(".hidden-info").fadeToggle();
	});
});
