$(function(){
    var jx = 'https://jx.bozrc.com:4433/player/?url=' ;
    var sg = 'https://v.sogou.com/v?query=' ;


    // 获取到视频链接
    $('#btn-search').on('click', function(){
        var movie = $('#search-box').val();
        var url = sg + movie ;
        $('#search-a').attr('href',url);
    });

    // 实现解析播放
    $('#submit').on('click',function(){
        var moviePlay =jx + $('#play-box').val() ;
        $('#play-a').attr('href',moviePlay);
    });

});