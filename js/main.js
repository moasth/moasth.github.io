	// Display png logo when svg isn't supported (thank you @walterstephanie)
	if(!Modernizr.svg) {
		var imgs = $('img[data-fallback]');
		imgs.attr('src', imgs.data('fallback'));
	}

	// Load maps
	var map = L.mapbox.map('map', 'moasth.map-pzgtnf9m,moasth.map-czvq0pvt,moasth.chateaux', {minZoom: 5, maxZoom: 15, maxBounds: [[41.275605,-13.64502],[52.427436,17.29248]]});
	
	map.gridLayer
	.on('click',function(o) {
		var $title = $(".content h1");
		if (o.data.name === $title.html()) return;             	
		$title.html(o.data.name);
		$('.content h1~*').remove();
		if (o.data.wikipedia) GetContent(o.data.wikipedia);              
		else {
			if(jqxhr && jqxhr.readystate != 4){
				jqxhr.abort();
			}
			$("<p>Aucune information n'est disponible</p>").insertAfter(".content h1");
		}
	});

	//map.setZoomRange(6, 15);
	//map.setPanLimits([{lat: 35.3073, lon: -19.6518}, {lat: 59.5726, lon: 34.0933}]);

    // Attribute map
    //map.ui.attribution.add().content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');

	// Scrollbar
    $(".content").niceScroll({cursorborder: "none", cursorwidth: "8px", cursorborderradius:0, cursoropacitymin:0.25 , cursorcolor:"#24A6E8"});

	// Navigation bar
    $('.nav-pills a').on("click", function(e) {
    	var  $this = $(this);
    	$("#js-navbar li.active").removeClass("active");
    	$this.parent("li").addClass("active");
    	var     id = $this.attr('id'),
    	contentId = '#' + id + '-content',
    	$data = $(contentId).html();
    	$('.content').html($data);
    });

    var jqxhr;

    function GetContent(t){
    	var nocontent = "<p>Aucune information n'est disponible</p>";
    	var $sidebox = $("#js-sidebox"); 
    	$sidebox.addClass("loading");
    	var $title = $sidebox.find("h1");
    	var $paragraphs = $sidebox.find("p");
    	jqxhr = 
    	$.ajax( {url: "http://fr.wikipedia.org/w/api.php?format=json&action=query&titles="+t+"&prop=extracts", dataType: "jsonp" })
    	.done(function(json) { var pages = json.query.pages;
    		var pageKey = Object.keys(pages)[0];
    		var content = "";
    		$paragraphs.remove();
    		if(pages && pageKey && pages[pageKey].extract) {
    			content = pages[pageKey].extract;
    			content = content.replace(/\[modifier\]/gi,"");
    		}
    		else {
    			content = nocontent;
    		}
    		$(content).insertAfter($title);
    		$sidebox.find("ul.gallery").remove();
			var $todelete = $("#js-sidebox h2:contains(Notes et références), #js-sidebox h2:contains(Articles connexes), #js-sidebox h2:contains(Liens externes), #js-sidebox h2:contains(Bibliographie)");
    		$todelete.nextAll().remove(); 
    		$todelete.remove();
    	})
    	.fail(function(jqXHR, textStatus, errorThrown) { $paragraphs.remove();
    		if(textStatus != 'abort') $(nocontent).insertAfter($title); })
    	.always(function() { $sidebox.removeClass("loading");})
    }
    