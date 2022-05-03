$(document).ready(function(){
    // 헤더 변경전 css값 = white
    var logo = $('h1 img').attr('src');
    var topMenu1 = $('#mypage img').attr('src');
    var topMenu2 = $('#questions img').attr('src');
    var topMenu3 = $('#addcart img').attr('src');

    // 서브메뉴 슬라이더
    $('nav > ul > li').mouseenter(function(){
        sunMenuSlidDown();
    }).mouseleave(function(){
        sunMenuSlidUp();
    });

    // 헤더 마우스 엔터 및 리브 & 헤더 고정 
    $(document).scroll(function(){
        var srollPosition = $(document).scrollTop();
        headerFixed();
      
        if(srollPosition == 0){
            header_white();
            $('header').mouseenter(function(){
                header_black();
            }).mouseleave(function(){
                header_white();
            });
        }else if(srollPosition != 0){
            header_black();
            $('header').mouseenter(function(){
                header_black();
            }).mouseleave(function(){
                header_black();
            });
        };
    }).trigger('scroll');

    //****************** function ******************//

    // 헤더 마우스 오버
    function header_black(){
        $('h1 img').attr('src', 'img/img_header/h1-logo.png');
        $('#mypage img').attr('src', 'img/img_header/mypage.png');
        $('#questions img').attr('src', 'img//img_header/ico-q.png');
        $('#addcart img').attr('src', 'img//img_header/ico-topmenu.png');
    };
    function header_white(){
        $('h1 img').attr('src', logo);
        $('#mypage img').attr('src', topMenu1);
        $('#questions img').attr('src', topMenu2);
        $('#addcart img').attr('src', topMenu3);
    };

    // 서브메뉴 슬라이더
    function sunMenuSlidDown(){
        $('#sub_bg').stop().slideDown();
        $('.sub_menu').stop().slideDown();
    }
    function sunMenuSlidUp(){
        $('#sub_bg').stop().slideUp();
        $('.sub_menu').stop().slideUp();
    };

    // 헤더 고정
    function headerFixed(){
        var top = $(document).scrollTop();

        if(top > $('header').outerHeight()){
            $('header').addClass('scroll');
        }else{
            $('header').removeClass('scroll');
        };
        // console.log(top, $('header').outerHeight());
    };
})