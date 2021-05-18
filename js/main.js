
// mailer
$(document).ready(function () {
  jQuery('.service__bonus').niceScroll({
      autohidemode: false,
      cursorwidth: "4px",
      cursorborderradius: "10px",
      cursorcolor: "#00a5e4",
      background: "#f1f1f1",
  });

  $('.comand__slider').owlCarousel({
    items:4,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ["<img src=\"img/comand__slider__arrow__left.svg\">","<img src=\"img/comand__slider__arrow__right.svg\" >"],
    responsive:{
        1100:{
            items:4,
        },
        900: {
          items:3,
        },
        770: {
          nav: true
        },
        600:{
            items:2,

        },
        0:{
            items:1,
            nav: false
        }
    }
  });

  let sending = false;

  $('[data-ajax-form]').on('submit', function (e) {
  	e.preventDefault();

  	if (!sending)
  	{
  		sending = true;

  		const $form = $(this);
  		const $fields = $form.find('[data-ajax-form-field]');
      const $files = $form.find('[data-ajax-form-file]');
  		const $button = $form.find('[data-ajax-form-submit]');
  		const buttonHtml = $button.html();

  		const data = new FormData();

  		// collect field values
  		$fields.each(function () {
      	const $field = $(this);
        data.append($field.attr('data-ajax-form-field'), $field.val());
  		});

      // collect files
      $files.each(function(i, file) {
        const $file = $(this);
        data.append('file', $file[0].files[0]);
      });

  		// send data
  		$button.html('Отправка...');

      $.ajax({
        url: '/ajax/mail.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',

        success: function(response) {
    			if (response === 'OK')
    			{
    				$button.hide();
            $form.find('[data-ajax-form-success]').show();
            yaCounter53983825.reachGoal('lead');
    			}
    		},

        complete: function() {
    			sending = false;
    			$button.html(buttonHtml);
    		}
      });
  	}
  });
});
