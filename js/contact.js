// Display png logo when svg isn't supported (thank you @walterstephanie)
if(!Modernizr.svg) {
	var imgs = $('img[data-fallback]');
	imgs.attr('src', imgs.data('fallback'));
}

// Load map
var map = L.mapbox.map('map', 'moasth.map-lugeyx1g', {minZoom: 5});
$(".leaflet-control-zoom").remove();