    if (window.matchMedia("(min-width: 400px)").matches) {
      /* the viewport is at least 400 pixels wide */
    } else {
      /* the viewport is less than 400 pixels wide */
    }

    if (window.matchMedia("(min-width: 48em)").matches) {
      $('.expand')
        .on('mouseenter', function () {
          var div = $(this);
          div.stop(true, true).animate({
            width: "+=10",
          }, 'fast');
        })
        .on('mouseleave', function () {
          var div = $(this);
          div.stop(true, true).animate({
            width: "-=10",
          }, 'fast');
        });
    } else {
            $('.expand')
        .on('mouseenter', function () {
          var div = $(this);
          div.stop(true, true).animate({
            width: "+=0",
          }, 'fast');
        })
        .on('mouseleave', function () {
          var div = $(this);
          div.stop(true, true).animate({
            width: "-=0",
          }, 'fast');
        });
    }