// target the slick slider center element and enlarge it //

$(document).ready(function(){
  $('.exhibitCarousel').slick({
    mobilefirst: true,
    centerMode: true,
    arrows: true,
    centerPadding: '100px',
    slidesToShow: 3,
    loop: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
      }
    }
    ]
  });
});

function enlargeCenter() {
  var center = document.querySelector('.slick-current');
  center.classList.add('enlarge');
}