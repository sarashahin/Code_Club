$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });


    /* Scroll on buttons using the waypoints.js library */
    $('.js--scroll-to-cities').click(function () {
        $('html, body').animate({scrollTop: $('#cities').offset().top}, 1000); 
     });
     
     $('.js--scroll-to-involved').click(function () {
        $('html, body').animate({scrollTop: $('#involved').offset().top}, 1000); 
     });

     /*
     * Here’s the code snippet from css tricks website to 
     * perform a smooth page scroll to an anchor on the same page.
     * It has some logic built in to identify those jump links,
     * and not target other links.
     * 
     */
     //https://css-tricks.com/snippets/jquery/smooth-scrolling/

     // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

  });