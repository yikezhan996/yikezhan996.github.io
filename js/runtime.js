
!(function () {
    /** 计时起始时间，自行修改 **/
    var start = new Date("2022/5/5 00:00:00");

    function update() {
        var weekStr = "日一二三四五六";
        var now = new Date();
        var year = now.getFullYear(); // 年
        var month = now.getMonth() + 1; // 月 0--11
        var today = now.getDate(); // 日
        var week = now.getDay(); // 星期 0--6
        now.setTime(now.getTime() + 250);
        days = (now - start) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - start) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if (String(hnum).length === 1) {
            hnum = "0" + hnum;
        }
        minutes = (now - start) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if (String(mnum).length === 1) {
            mnum = "0" + mnum;
        }
        seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if (String(snum).length === 1) {
            snum = "0" + snum;
        }
        document.getElementById("nowTime").innerHTML = "现在是&nbsp" + year + "年" + month + "月" + today + "日 星期" + weekStr[week];
        document.getElementById("timeDate").innerHTML = "本站艰难的存活了&nbsp" + dnum + "&nbsp天";
        document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
    }

    update();                   //执行更新方法
    setInterval(update, 1000); //每秒更新一次
})();