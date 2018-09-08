$(document).ready(function(){
    $('#fullPage').fullpage({
        // slidesNavigation: true, 
        lazyLoading: false,
        scrollOverflow: false,
        // allowPageScroll:true,
        slidesPerView:1,
        spaceBetween:'15px',
        navigation: true
    });
    $.fn.fullpage.setAutoScrolling(false);
    $('ul.tabs li').click(function () {
        let tab_id = $(this).attr('current-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });

})