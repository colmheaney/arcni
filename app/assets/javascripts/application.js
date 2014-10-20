// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).on('ready page:load', function() {
  site.nav();
  $('.carousel').carousel({
    interval: 5000
  })
  function initialize() {
    var myLatlng = new google.maps.LatLng(54.6676653,-5.9355584);
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);  
});

var site = {
  init : function() {
    this.nav;
  },
  nav : function() {

      name = window.location.pathname;
      $('.nav li').removeClass('selected');
      liOn = $('nav li[name="'+ name +'"]');
      liOn.addClass('selected');

      li = $('nav li');

      li.hover(function() {
        liOn.removeClass('selected');
      }, function() {
        liOn.addClass('selected');
      });
  }
}
