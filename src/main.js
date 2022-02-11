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