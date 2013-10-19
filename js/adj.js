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
var _selectedLayer;

markerLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;
    
    feature['marker-color'] = '#24A6E8';
    marker.setIcon(L.mapbox.marker.icon(feature));

    var data = feature.properties;

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

    var popupContent = '<div class="image"><img src="../img/adj1.jpg"><h4><span>' + data.libelle + '</span></h4></div>' + '<small><p class="muted">' + data.adresse + '</p><p>' + description + '</p></small>';

    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 320
    });
});

markerLayer.on('click',function(e) {
    if(_selectedLayer) _setIcon(_selectedLayer, false);
    _setIcon(e.layer, true);
    _selectedLayer = e.layer;
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

 function _setIcon(e, isSelected) {
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