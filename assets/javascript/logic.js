
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
  });

$("#prev").click(function() {
    $('.carousel').carousel('prev');
});

$("#next").click(function() {
    $('.carousel').carousel('next');
});