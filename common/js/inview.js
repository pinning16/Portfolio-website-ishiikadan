$(function() {
  $('img').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('img-blur');
    } else {
    //表示領域から出た時
      $(this).removeClass('img-blur');
    }
  });
});