$(document).ready(function() {

  // Highlight Current Page In Main Navigation
  var currentPage = $('body').data('current-page');
  if (currentPage) {
    $('a[data-page-id="' + currentPage + '"]').addClass('current');
  }

});
