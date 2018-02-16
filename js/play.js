// function onload() {

// }
// function fnChange() {
// }
// // function onClear() {
// //     document.getElementById("vipurl").value = "";
// // }


var thisURL = document.URL;
if (thisURL.indexOf("?") >= 0) {

}
else {
    window.location.href = "index.html";
}
// 获取视频id    
var getval = thisURL.split('?')[1];
var showval = getval.split("=")[1];

function onPlay() {
    var oJK = document.getElementById("jk");
    var sJK = oJK.options[oJK.selectedIndex].value;
    // var sVipUrl = document.getElementById("vipurl").value;
    var sVipUrl = showval;
    var oWin = document.getElementById("play");
    if (sVipUrl.length > 0) {
        oWin.src = sJK + sVipUrl;
    }
}

