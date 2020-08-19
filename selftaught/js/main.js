$(document).ready(
    function () {
        
        $('#about').waypoint(
            function(direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '700px'
            }
        )

        $('a').click(function(event) {
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });

        $('.mobile-nav-icon').click(function() {
            $('.main-nav').slideToggle(100);

            if ($('.mobile-nav-icon').hasClass('fa-bars')) {
                $('.mobile-nav-icon').addClass('fa-times');
                $('.mobile-nav-icon').removeClass('fa-bars');
            } else {
                $('.mobile-nav-icon').addClass('fa-bars');
                $('.mobile-nav-icon').removeClass('fa-times');
            }
        });
    }
) 