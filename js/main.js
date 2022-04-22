// ======================================  Custom JavaScript  ================================================

// ===== service-slider (Index Page) =======
$(document).ready(function(){
  $('.service-slider').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
      arrows: false,
	  responsive: [
	  	{
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        dots: true
	      }
	    },
	  ]
  });
});

// ===== offers-slider (Index Page) =======
$(document).ready(function(){
  $('.offers-slider').slick({
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: false,
      arrows: true,
	  infinite: true,
	  cssEase: 'linear',
	  responsive: [
	  {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
  });
});

// ===== Cities-slider (Index Page) =======
$(document).ready(function(){
  $('.cities-slider').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: false,
      arrows: true,
	  responsive: [
	  {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
  });
});

// ====== syncing-slider (Singe_property_v.2 Page) ======
$(document).ready(function(){
	 $('.syncing-slider').slick({
	 	infinite: true,
	  speed: 300,
	  dots: false,

	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.syncing-slider-nav'
	});
	$('.syncing-slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.syncing-slider',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true
	});
});

// ====== image-slider (About Page) ======
$(document).ready(function(){
  $('.image-slider').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false
  });
});

// ===== About-slider (About Page) =======
$(document).ready(function(){
  $('.about-slider').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  dots: false,
      arrows: false,
	  responsive: [
	  {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
  });
});

// ===== Customers-slider (About Page) =======
$(document).ready(function(){
  $('.customers-slider').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
      arrows: true,
  });
});

// ===== Real-estate-slider (Blog Page) =======
$(document).ready(function(){
  $('.real-estate-slider').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
      arrows: false,
	  autoplay: true,
  		autoplaySpeed: 2000,
	  fade: true,
  		cssEase: 'linear'
  });
});


// ======= Property Categories (More Button) ======
	$(document).ready(function () {
		// Toggle CSS Class
		$("#more-property-btn").click(function(){
				$("#more-property-dropdown").toggleClass("more-property-display");
		});
	});

	$(document).ready(function () {
		// Toggle CSS Class
		$("#filter-button").click(function(){
				$("#filterShow").toggleClass("filter-position");
		});
	});


 // ===== Scroll Back to Top =====
 function scrollTopBack() {
 	let scrollTopButton = document.querySelector('#scrollUp');
 	window.onscroll = function () {
 		let scroll = document.documentElement.scrollTop;
 		if (scroll >= 250) {
 			scrollTopButton.classList.add('scrollActive');
 		}else{
			scrollTopButton.classList.remove('scrollActive');
 		}
 	};
 };
 scrollTopBack();


// ====== Navbar Shadow (When Scrolling) ======
 function scrollNavbar() {
  let scrollShadow = document.querySelector('#navbar');
  window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll >= 10) {
      scrollShadow.classList.add('scrollShadow');
    }else{
      scrollShadow.classList.remove('scrollShadow');
    }
  };
 };
 scrollNavbar();
