if(!Modernizr.svg) {
	var imgs = $('img[data-fallback]');
	imgs.attr('src', imgs.data('fallback'));
}

var map = L.mapbox.map('map', 'moasth.map-y1unod03,moasth.map-czvq0pvt', 
    { 
        center: [48.5827,7.7477],
        zoom: 13,
        minZoom: 11, 
        maxZoom: 19,
        maxBounds: [[48.0303,6.3775],[49.0342,9.1571]]
    });

var markerLayer = L.mapbox.markerLayer().addTo(map);
var selectedLayer;

markerLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;
    
    feature['marker-color'] = '#24A6E8';
    marker.setIcon(L.mapbox.marker.icon(feature));

    var data = feature.properties;

    // Oui je sais, il faut factoriser
    var description = '';
    if (data.BS > 0) description += 'Bac à sable : ' + data.BS + '<br/>';
    if (data.BH > 0) description += 'Balançoire horizontale : ' + data.BH + '<br/>';
    if (data.BP > 0) description += 'Balançoire portique : ' + data.BP + '<br/>';
    if (data.EF > 0) description += 'Escalade ou filets : ' + data.EF + '<br/>';
    if (data.JE > 0) description += 'Jeu d\'équilibre : ' + data.JE + '<br/>';
    if (data.JS > 0) description += 'Jeu de sable : ' + data.JS + '<br/>';
    if (data.MA > 0) description += 'Maisonnette : ' + data.MA + '<br/>';
    if (data.MN > 0) description += 'Manège : ' + data.MN + '<br/>';
    if (data.MSR > 0) description += 'Mobile sur ressort : ' + data.MSR + '<br/>';
    if (data.ML > 0) description += 'Mobilier ludique : ' + data.ML + '<br/>';
    if (data.MPN > 0) description += 'Mobilier pique nique : ' + data.MPN + '<br/>';
    if (data.SMA > 0) description += 'Structure multi-activité : ' + data.SMA + '<br/>';
    if (data.TE > 0) description += 'Téléphérique : ' + data.TE + '<br/>';
    if (data.TO > 0) description += 'Toboggan : ' + data.TO + '<br/>';

    var picnum = getRandomInt(1, 4);
    var warning = '';
    if (data.pos != 'ok') warning = '<div class="alert alert-info"><strong>Remarque </strong>La position de cette aire de jeux n\'a pas pu être déterminée avec précision.</div>' 
    var displayPage = '<a onClick="javascript:displayFilter(); return false;" id="js-display-page" class="close-icon" href="#">Afficher les filtres</a><div class="clearfix"></div>';
    var popupContent = '<div class="image"><img src="../img/adj' + picnum + '.jpg"><h4><span>' + data.libelle + '</span></h4></div>' + '<small><p class="muted">' + data.adresse + '</p>' + warning + '<p>' + description + '</p></small>' + displayPage;

    marker.bindPopup(popupContent,{
        closeButton: true,
        minWidth: 280
    });
});

markerLayer.on('click',function(e) {
    if(selectedLayer) setIcon(selectedLayer, false);
    setIcon(e.layer, true);
    selectedLayer = e.layer;
});

markerLayer.loadURL('../data/airesdejeux.geojson')

var filters = document.getElementById('filters');
var checkboxes = document.getElementsByClassName('filter');

function change() {
    var on = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) on.push(checkboxes[i].value);
    }
    markerLayer.setFilter(function (f) {
        on.indexOf(f.properties['marker-symbol']) !== -1;
        
        for (var i = 0; i < on.length; i++) {
            if (f.properties[on[i]] > 0) return true;
        }   
        return false;
    });
    return false;
}

function setIcon(e, isSelected) {
    var iconUrl = 'http://a.tiles.mapbox.com/v3/marker/';
    var layer = e.target == null ? e : e.target;
    var iconElem = L.DomUtil.get(layer._icon);
    var icon, height, width, marginLeft, marginTop;

    if (isSelected) {
        icon = 'pin-l-circle-stroked+24A6E8.png';
        height = '90px';
        width = '35px';
        marginLeft = '-17.5px';
        marginTop = '-45px';
    } else {
        icon = 'pin-m+24A6E8.png';
        height = '70px';
        width = '30px';
        marginLeft = '-15px';
        marginTop = '-35px';
    }

    if(iconElem) {
        iconElem.src = iconUrl + icon;
        iconElem.style.height = height;
        iconElem.style.width = width;
        iconElem.style.marginLeft = marginLeft;
        iconElem.style.marginTop = marginTop;
    }
};

filters.onchange = change;

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fermeture de la pop-up de contenu sur mobile
var $page = $('#js-page');
$page.find('#js-close-page').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $page.addClass('invisible');
});

function displayFilter() {
    $('#js-page').removeClass('invisible');
};

function checkAll(formname, checktoggle)
{
  var checkboxes = new Array(); 
  checkboxes = document[formname].getElementsByTagName('input');
 
  for (var i=0; i<checkboxes.length; i++)  {
    if (checkboxes[i].type == 'checkbox')   {
      checkboxes[i].checked = checktoggle;
      if (checktoggle)
        $(checkboxes[i].parentNode).addClass("checked");
    else 
        $(checkboxes[i].parentNode).removeClass("checked");
    }
  }
}