$(document).ready(function() {
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
})