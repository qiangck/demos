;(function(){
    // 备份jQuery的ajax的方法
    var _ajax = $.ajax;

    // 重写jQuery的ajax的方法
    $.ajax = function(opt){
        // 备份opt中的error和success的方法
        var fn = {
            error:function(XMLHttpRequest,textStatus,errorThrown){},
            success:function(data,textStatus){}
        }
        if(opt.error){
            fn.error = opt.error;
        }
        if(opt.success){
            fn.success = opt.success;
        }

        // 扩展增强处理
        var _opt = $.extend(opt,{
            error:function(XMLHttpRequest,textStatus,errorThrown){
                // 错误方法增强处理
                fn.error(XMLHttpRequest,textStatus,errorThrown);
            },
            success:function(data,textStatus){
                // 成功回调方法增强处理
                fn.success(data,textStatus);
            },
            beforeSend:function(XHR){
                // 提交前回调方法
                alert("正在加载中....")
            },
            complete:function(XHR,TS){
                // 请求完成后回调函数（请求成功或失败之后均调用）
            }
        });
        _ajax(_opt);
    };
})(jQuery);