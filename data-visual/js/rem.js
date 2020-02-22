// 变量防污染 自调用函数
(function () {
    //   封装
    function getFont() {
        // 获取
        // var html = document.documentElement;
        // var html = $('html');
        // 此方法获取的jq对象 不能使用clientWidth 可使用.css  .width() .innerWidth()

        var html = document.querySelector('html');
        var width = html.clientWidth;
        // 计算
        if (width < 1024) width = 1024;
        if (width > 1920) width = 1920;
        var fontSize = width / 80 + 'px';
        // 设置
        html.style.fontSize = fontSize;
    }
    // 自调用
    getFont();
    // 注册事件 改变窗口大小 执行
    // $(window).on('resize', function () {
    //     getFont();
    // })
    window.onresize = function () {
        getFont();
    }

})();