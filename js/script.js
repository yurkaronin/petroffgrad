$(document).ready(function () {
  var button = document.querySelector('.menu-icon');
  button.addEventListener('click', function (){
    button.classList.toggle('open');
  });

  var navMain = document.querySelector('.navigation__wrapper');
  var navToggle = document.querySelector('.navigation__button');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });

  var items = document.querySelectorAll('.navigation__item');
      for (i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function(i) { hideMenu();
    }.bind(this, i));
  }

  function hideMenu() {
      if (navMain.classList.contains('main-nav--opened')) {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
        navToggle.classList.remove('open');
      } else {
        navMain.classList.add('main-nav--closed');
        navToggle.classList.remove('open');
        navMain.classList.remove('main-nav--opened');
        
      }
  }

  $('.show_popup').click(function () {
    var popup_id = '#' + $(this).attr('rel');

    // $('.overlay_popup').show();

    // $('body').addClass('noscroll');

    // $(popup_id).show(function(){
    //   // var height = $(popup_id).height();
    //   // var mt = -1 * height/2;
    //   // $(popup_id).css('top', '50%' );
    //   // $(popup_id).css('marginTop', mt + 'px' );      
    // });

    $.fancybox.open({
          src: popup_id,
          padding: 0,
          smallBtn : false,
          toolbar: false,
          backFocus : false,
          autoFocus: false, // Try to focus on the first focusable element after opening
          backFocus: false, // Put focus back to active element after closing
          trapFocus: false // Do not let user to focus on element outside modal content
    });

  })

  // $('.overlay_popup').click(function () {
  //   $('.overlay_popup, .popup').hide();
  //   $('body').removeClass('noscroll');
  // })

  // $('.close-popup').click(function () {
  //   $('.overlay_popup, .popup').hide();
  //   $('body').removeClass('noscroll');
  // });


  var houseGallerySm = new Swiper('.house-gallery-sm', {
    spaceBetween: 30,
    slidesPerView: 3,
   freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    loop: true
  });
  // var houseGalleryBig = new Swiper('.house-gallery-big', {
  //   spaceBetween: 10,
  //   slidesPerView: 1,
  //   observer: true,
  //   observeParents: true,
    
  //   thumbs: {
  //     swiper: houseGallerySm
  //   }
  // });

  $(document).on('click', '.house-gallery-sm-wrap', function(){
    
    var img_thumb_src = $(this).find('img').attr('src');  
    var img_big = $(this).closest('.finished-house__wrapper').find('.finished-house__top-picture');

    img_big.attr('src', img_thumb_src);
  });

  $(document).on('click', '.close-popup', function(){
    $.fancybox.close();
  });

});