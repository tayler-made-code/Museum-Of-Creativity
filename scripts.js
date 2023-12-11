// target the slick slider center element and enlarge it //

$(document).ready(function(){
  $('.exhibitCarousel').slick({
    centerMode: true,
    arrows: true,
    centerPadding: '100px',
    slidesToShow: 3,
    loop: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
      // placeholder //
      }
    },
    {
      breakpoint: 480,
      settings: {
      // placeholder //
      }
    }
    ]
  });
});

function enlargeCenter() {
  var center = document.querySelector('.slick-current');
  center.classList.add('enlarge');
}