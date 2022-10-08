// 获取当前时间的脚本

// 1.定义获取当前时间的函数

// 页面启动时加载
window.onload = function () {
    setInterval(() => {
        var nowdate = new Date();
        var year = nowdate.getFullYear(),
            month = nowdate.getMonth() + 1,
            date = nowdate.getDate(),
            day = nowdate.getDay(),
            week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            h = nowdate.getHours(),
            m = nowdate.getMinutes(),
            s = nowdate.getSeconds(),
            h = checkTime(h),
            m = checkTime(m),
            s = checkTime(s);
        var nowtime = year + "年" + month + "月" + date + "日" + week[day] + " " + h + ":" + m + ":" + s;
        document.querySelector('#now-time').innerHTML = nowtime;
    }, 1000);
}
// 2.定义一个补零函数
function checkTime(n) {
    return n >= 10 ? n : "0" + n;
}

