function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currentTime').innerHTML =
        h + ":" + m + ":" + s;
    console.log(s);
    var t = setTimeout(startTime, 500);

    var now = new Date();
    var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8);

    var endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19);

    var ratio =
        (now - startOfDay) /
        (endOfDay - startOfDay);

    document.getElementsByClassName('now')[0].style.top = "calc((130vh) *" + ratio + " )";

    console.log(ratio);

}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

startTime();