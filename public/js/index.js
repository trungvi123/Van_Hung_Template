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

// big-circle
var big_circle = document.querySelector('.big-circle')

window.onscroll = ()=> {
  if(document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100){
    big_circle.style.transform =  'rotate(0)';
  }else {
    big_circle.style.transform =  'rotate(-90deg)';
  }
}

  