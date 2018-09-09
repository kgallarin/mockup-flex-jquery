$(document).ready(function(){
    $('#fullPage').fullpage({
        lazyLoading: false,
        scrollOverflow: false,
        spaceBetween:'15px',
        navigation: true,
        autoScrolling: false,
        fitToSection: false,
    });
    $.fn.fullpage.setAutoScrolling(false);
    
    

    let swiperPhoto = '';
    let swiperSocial = '';
    let swiperPr = '';
    let swiperRadio = '';
    $(function () {
        $("#tab").tabs();

        let swiperVideo = new Swiper('.video', {
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });
        $('.photography').click(function() {
            let swiperPhoto = new Swiper('.photography', {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                }
            });
        });
        $('.social').click(function () {
            let swiperSocial = new Swiper('.social', {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                }
            });
        })
        $('.pr').click(function () {
            let swiperPr = new Swiper('.pr', {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                }
            });
        })
        $('.radio').click(function () {
            let swiperRadio = new Swiper('.radio', {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                }
            });
        })
    });
    

})