import $ from 'jquery';

$(".menu-icon").click(function() {
    $(".menu-icon").find('i').toggle();
    if ($(".menu-open").length > 0){
        $(".navbar").removeClass("menu-open");
        $(".navbar").addClass("menu-close");
    } else {
        $(".navbar").removeClass("menu-close");
        $(".navbar").addClass("menu-open");
    }
  });

  const reviewSlider = $(".review-slider");
  const reviewLeftIcon = $('.review-carousel-btn-left');
  const reviewRightIcon = $('.review-carousel-btn-right');

  var sectionIndex = 0;

    reviewLeftIcon.on('click', function() {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0
        reviewSlider.css('transform','translate(' + (sectionIndex) * 50 + '%)');
    })

    reviewRightIcon.on('click', function() {
        sectionIndex = (sectionIndex < 1) ? sectionIndex + 1 : 1
        reviewSlider.css('transform','translate(' + (sectionIndex) * -50 + '%)');
    })

const clientSlider = $(".client-slider");
const clientLeftIcon = $('.client-carousel-btn-left');
const clientRightIcon = $('.client-carousel-btn-right');

const clientCarouselWidth = $(".client-carousel").width();

clientLeftIcon.on('click', function() {
    clientSlider.css('transform','translateX(0)');
})

clientRightIcon.on('click', function() {
    clientSlider.css('transform','translateX(' + -clientCarouselWidth + 'px)');
})