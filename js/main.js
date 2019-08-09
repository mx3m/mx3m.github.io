$(document).ready(function() {

  // Screen transitions
  Barba.Pjax.start();

  if ($(window).width() > 639) {
    Barba.Prefetch.init();
  }

  // Reveal objects on scroll
  window.sr = ScrollReveal({ mobile: false });
  sr.reveal('.work-list-item', {
    duration: 500,
    easing: 'ease-out',
    scale: 0.85,
    distance: '150px',
    viewFactor: 0.20,
  });

});
