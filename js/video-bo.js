(function ($) {
    // var xxx = "../img/box2-img1.jpg";
    var xxx = "http://www.w3school.com.cn/example/html5/mov_bbb.mp4";

    // var xxx = "http://116.196.117.74:81/jp-web/pub/admin/system/enclosure/findimgfile.do?fileid=a929d09c-8334-4c27-8472-8c4d9f372d5f";
   
    // 获取视频id    
    var getval = thisURL.split('?')[1];
    var zhangid = getval.split('&&')[0];
    var xiaoid = getval.split('&&')[1];
    var showval = xiaoid.split("=")[1];
    var zhangval = zhangid.split("=")[1];
    var viodexiaojie = { classid: "6335cbf3-67d7-4442-b38f-683dabfbe074", id: showval };
    ajaxyp('pub/admin/information/Infohtml/findUpdateInfo.do', viodexiaojie, function (xiaojie) {
        if (xiaojie.result.flag == 1) {
            var video = dataUrl() + "pub/admin/upload/" + xiaojie.infos[0].video;
            $("#my-video source").attr("src", video);
            var resetVideoSize = function (myPlayer) {

            }
            var myPlayer = videojs("my-video").ready(function () {
                var i = 0;
                this.width("100%");
                resetVideoSize(myPlayer);
                //绑定视频播放结束事件
                this.on("ended", function () {
                    this.pause();
                    hint();
                });
                this.play();
            });
            $(window).on("resize", function () {
                resetVideoSize(myPlayer);
            });

            function hint() {
                $("#wenxin").show();
            }
        }

    })

   
    //章节  
    var lie = "";
    var lie1 = "";

    var xqa = { searchField: "courseId", searchValue: zhangval, classid: "a89c28ec-015a-4d2c-827e-e526c943d626" };
    ajaxyp('pub/admin/information/Infohtml/findInfoList.do', xqa, function (xq) {
        for (let i = 0; i < xq.infos.length; i++) {
            // console.log(xq);
            var zjid = xq.infos[i].id;
            var xuhao = "";
            var xuhao2 = "";
            //小节
            var zj = { searchField: "sectionId", searchValue: zjid, classid: "6335cbf3-67d7-4442-b38f-683dabfbe074" };
            ajaxyp('pub/admin/information/Infohtml/findInfoList.do', zj, function (xj) {
                for (let a = 0; a < xj.infos.length; a++) {
                    console.log(xj);
                    // xuhao = '<div class="xiaozj" style="width:1200px;margin-bottom:20px;"><div class="modrow"><div class="listrow"><div class="fa fa-caret-right" style="color:#b3b3b3;font-size:30px"></div><div class="textc20" style="margin-left:60px">' + xj.infos[a].title + '</div></div><div class="icon"></div><a href="courseIntro.html?zhangid=' + showval + '&&xiaoid=' + xj.infos[a].id + '"><button class="btnred" style="margin-right:196px">开始学习</button></a></div></div>';
                    // xuhao2 = xuhao + xuhao2;
                }

            });
            // var lie = '<div class="zjk"><div class="transline70" style="margin-top:-1px"></div><div class="modrow"><div class="listrow"><div class="listcircle fa fa-align-justify"></div><h2 class="textb21_hu" style="margin-left:20px">&nbsp; ' + xq.infos[i].title + '</h2></div><div class="icon"></div><div class="icon"><div class="fa fa-caret-down" style="color:#b3b3b3;font-size:30px"></div></div></div><p class="margin30_hu"></p>' + xuhao2 + '</div>';
            // lie1 = lie + lie1;
        }
        // $("#section-show").html(lie1);
    });



})(jQuery)