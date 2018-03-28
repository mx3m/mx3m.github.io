$(document).ready(function() {

  // Reveal objects on scroll
    window.sr = ScrollReveal();
    sr.reveal('.slideIn', { duration: 1000, scale: 1, distance: '150px' });


  // Screen transitions

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(window).scrollTop(0);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      $el.animate({ opacity: 1 }, 400, function() {
        _this.done();
      });
    },
  });

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };

  Barba.Pjax.start();

  Barba.Prefetch.init();

});
