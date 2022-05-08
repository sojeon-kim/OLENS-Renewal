$(document).ready(function(){ 
    // const checkDesktop = window.matchMedia('screen and (min-width : 1306px)');
    // const checkTablet = window.matchMedia('screen and (min-width : 769px)');
    $(window).scroll(function(){
        var scrollPosition = $(window).scrollTop();

        var contentsPosition = $('.ad_poster').eq(0).offset().top - $(window).height();
        var contentsPosition2 = $('.ad_poster').eq(1).offset().top - $(window).height();
        var contentsPosition3 = $('.ad_poster').eq(2).offset().top - $(window).height();
        var contentsPosition4 = $('.ad_poster').eq(3).offset().top - $(window).height();

        var footerPosition = $('footer').offset().top - $(window).height();
        //푸터 이전 까지의 문서 높이 - 윈도우 높이 = 스크롤이 푸터 바로 이전에 도착하는 높이

        // 매장찾기 탑에서 부터의 높이
        var positionStore = $('#store').offset().top - $(window).height();
    
        // 포스터 위로 슬라이드
        if(scrollPosition >= contentsPosition){
            $('.ad_poster').eq(0).addClass('active');
        };
        if(scrollPosition >= contentsPosition2){
            $('.ad_poster').eq(1).addClass('active');
        };
        if(scrollPosition >= contentsPosition3){
            $('.ad_poster').eq(2).addClass('active');
        };
        if(scrollPosition >= contentsPosition4){
            $('.ad_poster').eq(3).addClass('active');
        };

        //화면 높이에 따른 탑버튼 위치
        if(scrollPosition != 0){
            $('.top_btn').show();
            if(scrollPosition >= footerPosition){
                $('.top_btn').addClass('bot');
            }else{
                $('.top_btn').removeClass('bot');
            }
        }else if(scrollPosition == 0){
            $('.top_btn').hide();
        };

        if($(window).width = 1305 && scrollPosition >= positionStore){
            $('.top_btn').css('background', '#fff');
        }else if($(window).width = 1305 && scrollPosition < positionStore){
            $('.top_btn').css('background', 'rgba(5, 5, 5, 0.15)');
        };

    
    });
        
    goTop();
   
    //a이벤트 막기 
    $('nav li a').click(function(event){
        event.preventDefault();
    });

    // 반응형 그레이 배경 높이 변경
   $(window).resize(function(){
        grayH();
   });

    //****************** function ******************//
    // 베스트
    var swiper = new Swiper("#best .mySwiper", {
        // spaceBetween: 39,
        // slidesPerView: 4.3,
        //centeredSlides: true, //(화면 줄일 때 사용)
        scrollbar: {
            el: "#best .swiper-scrollbar",
            hide: false
        },
        breakpoints: {
            320: {
                slidesPerView: 2.1,
              spaceBetween: 10,
            },
            391: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            769: {
              slidesPerView: 3.2,
              spaceBetween: 10,
            },
            1061: {
                slidesPerView: 3.8,
                spaceBetween: 20,
              },
            1306: {
              slidesPerView: 4.3,
              spaceBetween: 39,
            },
          },
    });

    // 추천상품
    var swiper = new Swiper("#recom .mySwiper", {
        // spaceBetween: 39,
        // slidesPerView: 4.3,
        //centeredSlides: true, //(화면 줄일 때 사용)
        scrollbar: {
            el: "#recom .swiper-scrollbar",
            hide: false
        },
        breakpoints: {
            320: {
                slidesPerView: 2.1,
                spaceBetween: 10,
            },
            391: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            769: {
              slidesPerView: 3.2,
              spaceBetween: 10,
            },
            1061: {
                slidesPerView: 3.8,
                spaceBetween: 20,
              },
            1306: {
              slidesPerView: 4.3,
              spaceBetween: 39,
            },
          },
    });

    // 반응형 그레이 배경 높이 변경
    function grayH(){
        var graygbH = $('#gray_bg').height();
        var posterH = $('#poster').height();
        var changeGrayH = posterH - 200;

        $('#gray_bg').css('height', changeGrayH +'px');
    };

    //탑버튼
    function goTop(){
    $('.top_btn').on('click', function(event){
        $(window).scrollTop(0);
        event.preventDefault();
      });
    };

});
