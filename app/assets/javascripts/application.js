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
