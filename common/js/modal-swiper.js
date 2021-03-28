function popupImage() {
    var popup = document.getElementById('swiper-popup');
    if(!popup) return;
  
    var blackBg = document.getElementById('swiper-black-bg');
    var closeBtn = document.getElementById('swiper-close-btn');
    var showBtn = document.getElementById('swiper-show-popup');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
      });
    }
  }
  popupImage();