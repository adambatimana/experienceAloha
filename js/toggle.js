$(document).ready(function(){
  $('body').addClass('toggle');
  // create variables of the menu link and the nav
  var $menu = $('#menu'),
  $menulink = $('.menu-link');

  // when clicking toggle the .active class
  $menulink.click(function(evt){
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  //don't go to any page on click
  evt.preventDefault();
  }); //closing click event
}); //closes doc ready