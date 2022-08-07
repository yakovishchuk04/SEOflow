$(function(){
    $('.services__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
     $('.client__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
     });
     
     $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
     });
});