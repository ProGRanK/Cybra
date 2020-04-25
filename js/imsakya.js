function ramadan() {
    "use strict";
    var d = new Date(),
        month = d.getMonth() + 1,
        day = d.getDate(),
        output = d.getFullYear() + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day,
        alldates = document.getElementsByTagName('time'),
        i = 0;
    for (i; i < alldates.length; i = i + 1) {
        var thisdate = alldates[i],
            source = thisdate.getAttribute('datetime');
        if (source === output) {
            thisdate.parentNode.style.border = "4px solid #21b24b";
            alldates[i].style.background = "#21b24b";
            sheet.insertRule("h2 {color: #green;}", 0);
        }
    }
}
ramadan();