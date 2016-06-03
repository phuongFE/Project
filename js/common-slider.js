$(document).ready(function(){
	// $(".rslides").responsiveSlides({
	// 	nav: true,
	// 	prevText: "Previous",
	// 	nextText: "Next"
	// });

	$('.block_new').slick({
        dots: false,
        infinite: false,
        arrows: true,
        autoplay: true,
        speed: 3000,
        slidesToShow:4,
        slidesToScroll: 1,


        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});