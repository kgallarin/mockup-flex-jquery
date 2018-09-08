$(document).ready(function(){
    $('#fullPage').fullpage({
        slidesNavigation: true, 
        lazyLoading: false,
        autoScrolling: false,
        navigation:true
    });

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
})