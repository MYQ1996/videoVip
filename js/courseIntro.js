$(document).ready(function () {
    var zhi = localStorage.getItem("zhi");
    console.log(zhi);

    $(".icon-video").click(function () {
        $("*").removeClass("icon-videolv");
        $(this).addClass("icon-videolv");
        var dizhi = $(this).attr("value")+zhi;
        $("#play").attr("src", dizhi)
        

    })





})

// function onPlay() {
//     var oJK = document.getElementById("jk");
//     var sJK = oJK.options[oJK.selectedIndex].value;
//     // var sVipUrl = document.getElementById("vipurl").value;
//     var sVipUrl = showval;
//     var oWin = document.getElementById("play");
//     if (sVipUrl.length > 0) {
//         oWin.src = sJK + sVipUrl;
//     }
// }