jQuery(document).ready(function() {
	jQuery('#tiva-slideshow').nivoSlider({ 
		effect: jQuery('.tiva-slideshow-attr-effect').val(),
		animSpeed: parseInt(jQuery('.tiva-slideshow-attr-speed').val()),
		pauseTime: parseInt(jQuery('.tiva-slideshow-attr-pause-time').val()),
		directionNav: JSON.parse(jQuery('.tiva-slideshow-attr-direction').val()),
		controlNav: JSON.parse(jQuery('.tiva-slideshow-attr-control').val()),
		pauseOnHover: JSON.parse(jQuery('.tiva-slideshow-attr-pause-hover').val())
	});
});