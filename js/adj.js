// Display png logo when svg isn't supported
// Update
if(!Modernizr.svg) {
	var imgs = $('img[data-fallback]');
	imgs.attr('src', imgs.data('fallback'));
}

var map = L.mapbox.map('map', 'moasth.map-y1unod03,moasth.map-czvq0pvt', 
    { 
        minZoom: 11, 
        maxZoom: 19,
        //maxBounds: [[48.356705,7.35878],[48.74238,8.563843]] // TODO
    });

var markerLayer = L.mapbox.markerLayer().addTo(map);
var _selectedLayer;

markerLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;
    
    feature['marker-color'] = '#24A6E8';
    marker.setIcon(L.mapbox.marker.icon(feature));
});

markerLayer.on('click',function(e) {
    //markerLayer._geojson.features.length;
/*    e.layer.unbindPopup();
    var feature = e.layer.feature;
    //console.warn(feature);
    var info = '<h2>' + feature.properties.Prison + ' : ' + feature.properties.NombreParPrisonEtParAn + ' mort(e)(s) en 2013' + '</h2>' +
               'Nom : ' + feature.properties.Noms + '<br>' +
               'Mort(e) le : ' + feature.properties.DateTime + '<br>' +
               'Age : ' + feature.properties.Age + '<br>' +
               'Sexe : ' + feature.properties.Sexe + '<br>' +
               'Mort(e) par: ' + feature.properties.MortPar ;

    document.getElementById('info').innerHTML = info;
*/

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