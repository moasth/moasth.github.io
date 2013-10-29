---
layout: carte_adj
title: Carte des aires de jeux de Strasbourg &bull; visualsace
---
<img class="playground" src="../img/playground.png" alt="Icône aire de jeux">
#Carte des aires de jeux de Strasbourg

{% raw %}
<br/>
<div>
<form id="filters" name="filtres">
<!-- Utilisation d'une table pour faire le buzz... ok bon j'ai prévu de l'enlever -->
<table width="100%">
<tr>
<td width="50%">
<label class="checkbox checked"  for="BS">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="BS" value="BS" data-toggle="checkbox">
  Bac à sable
</label>
<label class="checkbox checked"  for="BH">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="BH" value="BH" data-toggle="checkbox">
  Balançoire horizontale
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="BP" value="BP" data-toggle="checkbox">
  Balançoire portique
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="EF" value="EF" data-toggle="checkbox">
  Escalade ou filets
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="JE" value="JE" data-toggle="checkbox">
  Jeu d'équilibre
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="JS" value="JS" data-toggle="checkbox">
  Jeu de sable
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="MA" value="MA" data-toggle="checkbox">
  Maisonnette
</label>
</td>
<td width="50%">
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="MN" value="MN" data-toggle="checkbox">
  Manège
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="MSR" value="MSR" data-toggle="checkbox">
  Mobile sur ressort
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="ML" value="ML" data-toggle="checkbox">
  Mobilier ludique
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="MPN" value="MPN" data-toggle="checkbox">
  Mobilier pique nique
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="SMA" value="SMA" data-toggle="checkbox">
  Structure multi-activité
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="TE" value="TE" data-toggle="checkbox">
  Téléphérique
</label>
<label class="checkbox checked">
<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>
  <input type="checkbox" checked="checked" class="filter" name="filter" id="TO" value="TO" data-toggle="checkbox">
  Toboggan
</label>	
</td>
</tr>
<tr>
<td><a onClick="javascript:checkAll('filtres', false);change(); return false;" href="#">Tout décocher</a></td>
<td><a onClick="javascript:checkAll('filtres', true);change(); return false;" href="#">Tout cocher</a></td>
</tr>
</table>
</form>
</div><p class="muted" style="margin-top:56px;">
<small>
Données produites par la <a href="http://www.strasbourg.eu/web/strasbourg.eu/ma-situation/professionnel/open-data">Ville de Strasbourg</a><br/>
Date de mise à jour des données : 11/10/2013<br/>
Photos <a href="http://www.flickr.com/photos/carlwwycoff/" target="_blank">Carl Wycoff</a> (licence <a href="http://creativecommons.org/licenses/by/2.0/deed.fr" target="_blank">CC BY 2.0</a>)<br/>
Fond de carte <a href="https://www.mapbox.com/about/maps/" alt="Licence Mapbox">Mapbox</a> et contributeurs d'<a href="http://www.openstreetmap.org/copyright" alt="Copyright et Licence OpenStreetMap">OpenStreetMap</a> ©
</small>
</p>
<div style="float: right">
<img src="../img/logo-strasbourg-europtimist.png" alt="Strasbourg the europtimist">
</div>
{% endraw %}
