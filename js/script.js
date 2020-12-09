
$(document).ready(function() {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      320:{
        slidesPerView: 1,
      },
      623:{
        slidesPerView: 2,
      },
      1024:{
        slidesPerView: 3,
      },
    },
  });