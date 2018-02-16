$(document).ready(function () {
    $("#fakebox-microphone").click(function () {
        var zhi = $(".layui-input").val();
        // storage.setItem("zhi", zhi);
        localStorage.setItem("zhi", zhi)
        window.open('courseIntro.html');


    })


})