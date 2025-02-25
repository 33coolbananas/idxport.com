"use strict";

// Init google map
function initialize(latitude, longitude, address, zoom) {
    var latlng = new google.maps.LatLng(latitude,longitude);

    var myOptions = {
        zoom: zoom,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var marker = new google.maps.Marker({
        position: latlng, 
        map: map, 
        title: "location : " + address
    });
}

// ==== Go to top ====
function go_up(){
    // to top
    jQuery('.go-up').hide();
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > 400) {
            jQuery('.go-up').fadeIn();
        } else {
            jQuery('.go-up').fadeOut();
        }
		
		return false;
    });
    jQuery('.go-up a').on('click', function (e) {
        e.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        
		return false;
    });
}

// ==== Document ready ====
var responsiveflag = false;
jQuery(document).ready(function(){ 
    go_up();

    // ==== Create menu for mobile ====
	jQuery('#all').after('<div id="off-mainmenu"><div class="off-mainnav siderbar-menu"><div class="off-close"><span class="title">Menu</span><span class="close-menu"><i class="fa fa-close"></i></span></div></div></div>');
    jQuery('.tiva-mega-menu').clone().appendTo('.off-mainnav');
	
	jQuery('#btn-menu').on('click', function (e) {
        e.preventDefault();
        jQuery('body').toggleClass('mainmenu-active');
		
		return false;
    });
	jQuery('.off-close .close-menu').on('click', function (e) {
        e.preventDefault();
        jQuery('body').removeClass('mainmenu-active');
		
		return false;
    });
	
	// Module Login in Homepage 4
	if (jQuery(window).width() < 768) {
		jQuery(".home-4 .header_user_info").addClass('dropdown-over');
		jQuery(".home-4 .header_user_info .links").addClass('dropdown-content');
	} else {
		jQuery(".home-4 .header_user_info").removeClass('dropdown-over');
		jQuery(".home-4 .header_user_info .links").removeClass('dropdown-content');
	}

	// ==== Display menu when resize window ====
    jQuery(window).on('resize', function () {
        var win = jQuery(this); //this = window
        if (win.width() >= 1000) {
            jQuery('#main-nav').css({
                display: 'block'
            });
        }
		
		// Module Login in Homepage 4
		if (jQuery(window).width() < 768) {
			jQuery(".home-4 .header_user_info").addClass('dropdown-over');
			jQuery(".home-4 .header_user_info .links").addClass('dropdown-content');
		} else {
			jQuery(".home-4 .header_user_info").removeClass('dropdown-over');
			jQuery(".home-4 .header_user_info .links").removeClass('dropdown-content');
		}
		
		return false;
    });
    
    // ==== Fix menu postion when scroll ====
	if (jQuery('#template-option-fix-header').html() == 'true') {
		jQuery(window).on('scroll', function () {
			if (jQuery(window).scrollTop() > 120) {
				jQuery('#top-header').addClass('fixed');
			} else {
				jQuery('#top-header').removeClass('fixed');
			}
			
			return false;
		});
	}
	
	// Menu on home-3
	jQuery('.siderbar-menu li.mega').each(function() {
		if (jQuery(this).hasClass('haschild')) {
			jQuery(this).find('> a').after('<span class="btn-down"><i class="fa fa-angle-down"></i></span>');
		}
    });
	jQuery('.siderbar-menu li.mega.haschild .btn-down').on('click', function (e) {
		var childcontent = jQuery(this).closest('li.mega').find('> .childcontent');
		if (childcontent.hasClass('active')) {
			childcontent.slideUp(200).removeClass('active');
		} else {
			childcontent.slideDown(200).addClass('active');
		}
    });

    // ==== Display navigation home-1 ====
    jQuery('.icon-trigger').on('click', function (e) {
        e.preventDefault();
        jQuery('.topheader-navholder').toggleClass('open');
        jQuery('.icon-trigger').toggleClass('open');
		
		return false;
    });

    // ==== Display navigation home-3 ====
    jQuery("#btn-bar").on('click', function (e) {
        e.preventDefault();
        jQuery('.siderbarmenu').addClass('siderbarmenu-active');
        jQuery('.bg-over-lay').addClass('show-over-lay');
		
		return false;
    });
	 jQuery(".siderbarmenu .btn-close").on('click', function (e) {
        e.preventDefault();
        jQuery('.bg-over-lay').removeClass('show-over-lay');
        jQuery('.siderbarmenu').removeClass('siderbarmenu-active');
		
		return false;
    });
    jQuery('.bg-over-lay').on('click', function (e) {
        e.preventDefault();
        jQuery('.bg-over-lay').removeClass('show-over-lay');
        jQuery('.siderbarmenu').removeClass('siderbarmenu-active');
		
		return false;
    });

    // ==== Carousel Slider ====
	jQuery('.carousel-1').owlCarousel({
        margin:30,
        stopOnHover : false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop: false
            }
        }
    });
	jQuery('.carousel-2').owlCarousel({
        margin:30,
        stopOnHover : false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop: false
            }
        }
    });
    jQuery('.carousel-3').owlCarousel({
        margin:30,
        stopOnHover : false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop: false
            }
        }
    });
	jQuery('.carousel-4').owlCarousel({
        margin:30,
        stopOnHover : false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop: false
            }
        }
    });

    // ===== Block categories ======
    jQuery('#categories_block_left ul li.parent .arrow').on('click', function (e) {
        e.preventDefault();
        jQuery(this).parents('li.parent').find('ul').slideToggle('medium');
        jQuery(this).toggleClass('active');
		
		return false;
    });
	
    // ==== Popup Screen ====
	if (jQuery('.tiva-popup-screen').length) {
        // Control when window small
        if (screen.width < 500) {
            jQuery('.tiva-popup-screen .popup').css('width', '80%');
        }
        
        // Click to close popup
        jQuery('html').on('click', function (e) {
            if (e.target.id == 'tiva-popupscreen') {
                jQuery('.tiva-popup-screen').remove();
            }
        });
		
        jQuery('.tiva-popup-screen .popup .close').on('click', function (e) {
            e.preventDefault();
            jQuery('.tiva-popup-screen').remove();
        });
        
        // Screen duration
        setTimeout(function() {
            jQuery('.tiva-popup-screen').remove();
        }, 20 * 1000);
    }
    
    // ==== Video Introduction ====
    jQuery('.video-link a').on('click', function (e) {
        e.preventDefault();
        jQuery('.tiva-video-overlay').toggleClass('open');
        jQuery('.video-link').css('display','none');
		
		return false;
    });
	
    jQuery('.video-close a').on('click', function (e) {
        e.preventDefault();
        jQuery('.tiva-video-overlay').toggleClass('open');
        jQuery('.video-link').css('display','table-cell');
		
		return false;
    });

    // ==== Scroll down ====
    jQuery('.scroll-down').on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery(jQuery(this).attr('href')).offset().top}, 500, 'linear');
		
		return false;
    });
	
	// ==== Scroll Bar ====
	if (jQuery('.hottrend .view-listproduct').length) {
        jQuery('.hottrend .view-listproduct .block_content').mCustomScrollbar({
			setTop:"0"
		});
    }
	
	// ==== Full Page ====
	if (jQuery('.index.full-page').length) {
        var autoScroll = (jQuery(window).width() >= 1024) ? true : false;
		jQuery('.index.full-page .columns-container').fullpage({
			autoScrolling: autoScroll
		});
    }
	if (jQuery('.index.full-page-nav').length) {
        var autoScroll = (jQuery(window).width() >= 1024) ? true : false;
		jQuery('.index.full-page-nav .columns-container').fullpage({
			autoScrolling: autoScroll,
			navigation: true,
			navigationPosition: 'right'
		});
    }

	// ===== Product Detail ======
	jQuery('#product-detail.layout-1 .thumb-images').owlCarousel({
		margin: 10,
		loop: true,
		dots: true,
		dotsEach: 1,
		autoplay: false,
		items: 4
	});
	
	if (jQuery('#product-detail .featured-image img').length) {
        jQuery('#product-detail .featured-image img').elevateZoom({zoomType:"inner", cursor:"crosshair", easing:true, scrollZoom:false});
	}
	
	jQuery('#product-detail .thumb-image-item').click(function(){
		jQuery('#product-detail .featured-image').html(jQuery(this).html()).find('img').elevateZoom({zoomType:"inner", cursor:"crosshair", easing:true, scrollZoom:false});
	});
	
	// ====== Accordion ======
	jQuery('.tiva-accordion .accordion-title').click(function(e) {
		e.preventDefault();
		
		var this_content = jQuery(this).parents('.item').find('.accordion-content');
		
		// Close others
		if (this_content.attr('class').indexOf('active') == -1) {
			var other_contents = jQuery(this).parents('.tiva-accordion').find('.accordion-title').not(this).parents('.item').find('.accordion-content');
			other_contents.each(function(index) {
				jQuery(this).parents('.item').find('.accordion-title').removeClass('active');
				jQuery(this).slideUp(300).removeClass('active');
			});
		}
		
		// Toggle this
		if (this_content.attr('class').indexOf('active') == -1) {
			jQuery(this).parents('.item').find('.accordion-title').addClass('active');
			this_content.slideDown(300).addClass('active');
		} else {
			jQuery(this).parents('.item').find('.accordion-title').removeClass('active');
			this_content.slideUp(300).removeClass('active');
		}
    });

    // ====== Map ====== 
    var address = jQuery('.contact-address').html();
    var width = '100%';
    var height = '500px';
    var zoom = 16;
   
    // Create map html
	if (address) {
		jQuery('.contact-map').html('<div id="map_canvas" style="width:' + width + '; height:' + height + '"></div>');
		
		var geocoder = new google.maps.Geocoder();

		geocoder.geocode({'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var latitude = results[0].geometry.location.lat();
				var longitude = results[0].geometry.location.lng();
				initialize(latitude, longitude, address, zoom);
			}
		});
	}

}); //end