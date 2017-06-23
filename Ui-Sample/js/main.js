
    window.sr = ScrollReveal();
    sr.reveal('.navbar', {
      duration: 2000,
      origin:'bottom',
      rotate : {x:20,y:30,z:160},
      opacity : 0.2,
      scale : 1.2,
      delay : 0.2
    });
    sr.reveal('.showcase-left', {
      duration: 2000,
      origin:'left',
      distance : '1000px',
      reset : false,
      mobile: true,
      rotate : {x:20,y:30,z:160},
      opacity : 0.2,
      scale : 2.2,
      delay : 1400
    });
    sr.reveal('.showcase-right', {
      duration: 2000,
      origin:'right',
      distance:'300px',
      rotate : {x:360}
    });
    sr.reveal('.showcase-btn', {
      duration: 2000,
      delay: 2000,
      origin:'bottom'
    });
    sr.reveal('#testimonial div', {
      duration: 2000,
      origin:'bottom'
    });
    sr.reveal('.info-left', {
      duration: 2000,
      origin:'left',
      distance:'300px',
      viewFactor: 0.2
    });
    sr.reveal('.info-right', {
      duration: 2000,
      origin:'right',
      distance:'300px',
      viewFactor: 0.2
    });



$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#myCarousel"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).on('ready', function() {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $(".variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true
  });
});
