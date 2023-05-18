$(document).ready(function () {
    var news_slider = $('.news-slider')
    news_slider.not('.slick-initialized').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      vertical:true,
      verticalSwiping:true
    });

})


var menu = document.querySelector('.menu-overlay')

menu.onclick = ()=> {
  document.querySelector('#open').checked = false;
}