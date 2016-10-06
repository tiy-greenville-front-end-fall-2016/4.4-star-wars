var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');

if(githubtoken !== undefined){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken.token
    }
  });
}


$.ajax('http://swapi.co/api/planets/').then(displayPlanetList);

function displayPlanetList(data){
  var planets = data.results;
  var $planetContainer = $('#planet-list');

  var source = $('#plaent-template').html();
  var template = Handlebars.compile(source);

  _.each(planets, function(planet){
    $planetContainer.append(template(planet));
  });
}
