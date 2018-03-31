$(document).ready(function() {

  // Reveal objects on scroll
    window.sr = ScrollReveal({ mobile: false });
    sr.reveal('.work-list-item', { duration: 1000, easing: 'ease-out', scale: 1, distance: '150px', viewFactor: 0.5, });


  // Screen transitions
  if ($(window).width() > 639) {
    Barba.Pjax.start();

    Barba.Prefetch.init();
  }

});
