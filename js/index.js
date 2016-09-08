/**
 * Created by meng on 2016/8/28.
 */
var swiper1 = new Swiper(".swiper-container",{
    direction:'vertical',
    loop:true
    //pagination:'.swiper-pagination',
    //autoplay:2000
    ,onSlidChangeEnd:function(swiper){
        var slideAry =  swiper.slides,
            curIn = swiper.activeIndex,
            total= slideAry.length;
        // 计算id是page？
        var targetId = 'page';
        switch (curIn){
            case 0 : targetId+ total-2; break;
            case total-1 : targetId+ 1; break;
            default: targetId+=curIn;
        }
        //console.log(slideAry);
        //->给当前的活动块设置ID即可
        slideAry[curIn].id = targetId;
        [].slice.forEach.call(slideAry,function(item,index){

        });

    }


    ,effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    }

});

~function () {
    var desw = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW / desw;
    var oMain = document.getElementById("main");
    //->如果当前屏幕的宽度已经大于设计稿了，为了保证图片的良好展示，我们一般都不然过其在继续变大了，以设计稿的宽度为最后宽度，剩余部分
    if(winW>desw){
        oMain.style.width = desw+"px";
        oMain.style.margin = '0 auto';
        return;
    }
    document.documentElement.style.fontSize = ratio*100 +'px';
}();

//var  swiper1 = new Swiper(".swiper-container",{
//    loop:true, //无缝衔接轮播滚动
//    pagination:'.swiper-pagination',
//    autoplay:2000,
//    // 如果需要前进后退按钮
//    nextButton: '.swiper-button-next',
//    prevButton: '.swiper-button-prev',
//    // 如果需要滚动条
//    scrollbar: '.swiper-scrollbar',
//
//    effect:'cube',//方块
//    autoplayDisableOnInteraction:false, //操作后还可以继续使用，
////        paginationType:'progress', //进度图
//    lazyLoading:true, //图片延时加载
//    lazyLoadingInPrevNext:true //左右延时加载， 对左右一张做处理
//    ,onInit:function(swiper1){
//        console.log(1);
//    }
//});  // 实现位置 参数配置信息