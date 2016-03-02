var indexTab = function(tit,box,className,iframe){
    var titleList = $(tit),
        boxList = $(box);
    if(typeof className === "undefined"){className='hover';}
    // 默认显示
    titleList.children().eq(0).addClass(className);
    boxList.children().eq(0).show();
    titleList.children().each(function(index, el) {
        $(this).attr("index",index);
    });
    titleList.children().on("click",function(){
        var indexNum = $(this).attr("index");
        $(this).addClass(className).siblings().removeClass(className);
        boxList.children().eq(indexNum).show().siblings().hide();
        if(iframe){
            boxList.children().find('.videoBox').children().remove();
            boxList.children().find('.videoBox').append('<iframe height="100%" width="100%" src="http://player.youku.com/embed/XMTQxNTc3MDk4OA==" frameborder=0 allowfullscreen></iframe>');
        };
    });
};