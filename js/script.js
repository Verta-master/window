jQuery(function($) {
	"use strict";

  //Mobile menu
  $('.menu__btn').click(function() {
    $('.menu').toggleClass('menu--opened');
    $('.menu__list').slideToggle();
  })

  //City choice
  $('.city__btn').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.city__list').slideToggle();
  });
  
  $("body").click(function(){
    $('.city__list').slideUp();
  });
});
