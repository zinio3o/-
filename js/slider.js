//slider.js

$(function(){
    var imgNum = 0; //이미지 번호
    //초기화
    $('#main-visual .slider img')
        .hide()
        .eq(0)
        .show();
        //이미지 자동전환
    setInterval(function(){
    imgNum++; //이미지 증가
        if(imgNum > 2) imgNum = 0;
        $('#main-visual .slider img')
        .fadeOut()
        .eq(imgNum)
        .fadeIn();
    },5000)
    
})


