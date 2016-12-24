function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

dedlineHours = getCookie("dedlineHours");
dedlineMinutes = getCookie("dedlineMinutes");
dedlineSeconds = getCookie("dedlineSeconds");

hourX = 0; minuteX = 0; secX= 5;

if (!dedlineHours) {
    dateStart = new Date();

    dedlineHours = dateStart.getHours() + hourX;
    dedlineMinutes = dateStart.getMinutes() + minuteX;
    dedlineSeconds = dateStart.getSeconds() + secX + 1;
    document.cookie = "dedlineHours="+dedlineHours;
    document.cookie = "dedlineMinutes="+dedlineMinutes;
    document.cookie = "dedlineSeconds="+dedlineSeconds;

    delete dateStart;
}

//проверка, был ли отчет
var timerRun = false;

function CountBox() {
    dateNow = new Date();
    amount = ((dedlineHours - dateNow.getHours())*60*60 + (dedlineMinutes - dateNow.getMinutes())*60 + (dedlineSeconds - dateNow.getSeconds()))*1000;
    delete dateNow;
    if (amount < 0) {
        out = //"<span class='countbox-num'><span id='countbox-days1'><span></span>0</span><span id='countbox-days2'><span></span>0</span><span id='countbox-days-text'></span></span>" +
			// "<span class='countbox-space'></span>" +
			// "<span class='countbox-num'><span id='countbox-hours1'><span></span>0</span><span id='countbox-hours2'><span></span>0</span><span id='countbox-hours-text'></span></span>" +
			// "<span class='countbox-space'></span>" +
			"<span class='countbox-num'><span id='countbox-mins1'><span></span>0</span><span id='countbox-mins2'><span></span>0</span></span>" +
			"<span class='countbox-space'>:</span>" +
			"<span class='countbox-num'><span id='countbox-secs1'><span></span>0</span><span id='countbox-secs2'><span></span>0</span></span>";
        document.getElementById("countbox").innerHTML = out;
        setTimeout("CountBox()", 10000);
        if(timerRun) {
            upMessage.slideUp();
        }
    } else {
        timerRun = true;
        days = 0;
        days1 = 0;
        days2 = 0;
        hours = 0;
        hours1 = 0;
        hours2 = 0;
        mins = 0;
        mins1 = 0;
        mins2 = 0;
        secs = 0;
        secs1 = 0;
        secs2 = 0;
        out = "";
        amount = Math.floor(amount / 1e3);
        days = Math.floor(amount / 86400);
        days1 = (days >= 10) ? days.toString().charAt(0) : '0';
        days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
        hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
        mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
        amount = amount % 60;
        secs = Math.floor(amount);
        secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
        secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
        out = // "<span class='countbox-num'><span id='countbox-days1'><span></span>" + days1 + "</span><span id='countbox-days2'><span></span>" + days2 + "</span><span id='countbox-days-text'></span></span>" +
			//"<span class='countbox-space'></span>" +
			//"<span class='countbox-num'><span id='countbox-hours1'><span></span>" + hours1 + "</span><span id='countbox-hours2'><span></span>" + hours2 + "</span><span id='countbox-hours-text'></span></span>" +
			// "<span class='countbox-space'></span>" +
			"<span class='countbox-num'><span id='countbox-mins1'><span></span>" + mins1 + "</span><span id='countbox-mins2'><span></span>" + mins2 + "</span></span>" +
			"<span class='countbox-space'>:</span>" +
			"<span class='countbox-num'><span id='countbox-secs1'><span></span>" + secs1 + "</span><span id='countbox-secs2'><span></span>" + secs2 + "</span></span>";
        document.getElementById("countbox").innerHTML = out;
        setTimeout("CountBox()", 1e3)
    }
}

window.onload = function () {
    CountBox();
    if (timerRun) {
        upMessage.run();
    }
}
