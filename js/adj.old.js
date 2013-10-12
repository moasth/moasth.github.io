// Display png logo when svg isn't supported
// Update
if(!Modernizr.svg) {
	var imgs = $('img[data-fallback]');
	imgs.attr('src', imgs.data('fallback'));
}

var Map = function () {
    var _config = {
        mapElementId: 'map',
        mapId: 'moasth.map-y1unod03,moasth.map-czvq0pvt',
        options: {
            minZoom: 11, 
            maxZoom: 19,
            maxBounds: [[41.275605,-13.64502],[52.534491,19.665527]]/*, 
TODO
            tileLayer: {
                detectRetina: true, retinaVersion: 'moasth.map-14d5d9tc,moasth.map-wdsgqecq'
            }*/
        }
    }

markerLayer.loadURL('my_local_markers.geojson');

//*******************************************************************

var map = L.mapbox.map('map', 'moasth.map-y1unod03,moasth.map-czvq0pvt', 
    { 
        minZoom: 11, 
        maxZoom: 19,
        maxBounds: [[41.275605,-13.64502],[52.534491,19.665527]]
    }).setView([47.145894, 2.581787], 6);

var markerLayer = L.mapbox.markerLayer()
    .loadURL('http://temp.sharesand.info/prison/mortsPrisons.geojson')
    .addTo(map);

var douze = document.getElementById('douze');
var all = document.getElementById('filter-all');

    douze.onclick = function(e) {
        all.className = '';
        this.className = 'active';
        // The setFilter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markerLayer.setFilter(function(f) {
            // reGex on DateTime
              var stryear = f.properties['DateTime']; 
              var reg20 = /20\d*/g;
            // Select only the first array
              return stryear.match(reg20)[0] == '2012';
        });
        return false;
    };

    all.onclick = function() {
        douze.className = '';
        this.className = 'active';
        markerLayer.setFilter(function(f) {
            // Returning true for all markers shows everything.
            return true;
        });
        return false;
    };


// Listen for individual marker clicks. Date format will be changed.
markerLayer.on('click',function(e) {
    e.layer.unbindPopup();

    var feature = e.layer.feature;
    var info = '<h2>' + feature.properties.Prison + ' : ' + feature.properties.NombreParPrisonEtParAn + ' mort(e)(s) en 2013' + '</h2>' +
               'Nom : ' + feature.properties.Noms + '<br>' +
               'Mort(e) le : ' + feature.properties.DateTime + '<br>' +
               'Age : ' + feature.properties.Age + '<br>' +
               'Sexe : ' + feature.properties.Sexe + '<br>' + 
               'Mort(e) par: ' + feature.properties.MortPar ;

    document.getElementById('info').innerHTML = info;
});

// Clear the tooltip when map is clicked
map.on('click',function(e){
    document.getElementById('info').innerHTML = '';
});