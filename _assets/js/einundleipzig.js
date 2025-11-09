// ------------------------------------------------------------------------
// Smooth scroll
// ------------------------------------------------------------------------
$(function() {
  $('a[href^="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// ------------------------------------------------------------------------
// fade in
// ------------------------------------------------------------------------
$(document).ready(function() {

  if (document.getElementsByClassName("fade-in-element").length > 0) {
    var element = document.getElementsByClassName("fade-in-element");

    $(element).addClass('js-fade-element-hide');

    $(window).scroll(function() {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show');
        $(element).addClass('js-fade-element-hide');
      }
    });
  }
});


// ------------------------------------------------------------------------
// sidebar affix at footer
// ------------------------------------------------------------------------
$('#sidebaraffix').affix({
  offset: {
    top: 200,
    bottom: function () {
      return (this.bottom = $('#footer').outerHeight(true) + $('#partner').outerHeight(true))
    }
  }
})


// ------------------------------------------------------------------------
// Card flip
// ------------------------------------------------------------------------
$(document).ready(function(){

  $('.flip').click(function(){
    $(this).parents('.card').toggleClass('flipped');
  });

});

// ------------------------------------------------------------------------
// Background infos
// ------------------------------------------------------------------------
$(".toggle-background-info").click(function() {
  $($(this).data("target")).toggleClass('hidden');
})

$(".background-info-close").click(function() {
  $(this).parent().toggleClass('hidden');
})
