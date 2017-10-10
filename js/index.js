window.onload = function () {
    var mySwiper = new Swiper('.swiper-container',{
        onInit:function(swiper){
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd:function(swiper){
            swiperAnimate(swiper);
        },
        direction:'vertical',
        loop:false,
    });
    $('.bgm-bg').click(function(){
        if($('audio')[0].paused){
            $('audio')[0].play();
        }else{
            console.log('stop');
            $('audio')[0].pause();
        }
    })
}


