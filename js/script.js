jQuery(function($) {
	"use strict";

  //Mobile menu
  $('.menu__btn').click(function() {
    $('.menu').toggleClass('menu--opened');
    $('.menu__list').slideToggle();
  });
  
  //Additional navigation
  $('.menu__catalog-btn').click(function() {
    $('.menu').toggleClass('menu--catalog');
    $('.menu__catalog-wrap').slideToggle();
  });

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
