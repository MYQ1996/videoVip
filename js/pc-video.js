$(document).ready(function () {
    var sign = true;
    var optionArr = ["Z","A","B","C","D","E","F","G","H","I"];
    var daan = [];
    $(".chapter").click(function () {
        
        if (sign == true) {
            $(".chapter").addClass("light");
            $(".js-box-wrap").css({ "width": "1079px"});
            $(".section-list").css({ "right": "0px" }); 
            sign = false;
        }else{
            $(".chapter").removeClass("light");
            $(".js-box-wrap").removeAttr("style");
            $(".section-list").removeAttr("style");
            sign = true
        }
    });

    // plMenu   qa-content 课程简介
    // qaMenu   note-content 行为记录
    // noteMenu  pl-content  评论

    $("#plMenu").click(function () {
        $("#noteMenu").removeClass("active");
        $("#plMenu").addClass("active");
        $("#qaMenu").removeClass("active");  

        $("#pl-content").hide();   
        $("#note-content").hide();   
        $("#qa-content").show();        
        
        
    })

    $("#qaMenu").click(function () {
        $("#noteMenu").removeClass("active");   
        $("#plMenu").removeClass("active");  
        $("#qaMenu").addClass("active");        
        
        $("#pl-content").hide();
        $("#note-content").show(); 
        $("#qa-content").hide();
                             
        


    })

    $("#noteMenu").click(function () {
        $("#noteMenu").addClass("active");
        $("#plMenu").removeClass("active");
        $("#qaMenu").removeClass("active");


        $("#pl-content").show();
        $("#note-content").hide();        
        $("#qa-content").hide();



    })
    $("#xingwei").click(function () {
        $("#xingweijilu").hide();
        
    })

    $("#xingweic").click(function () {
        $("#xingweijilu").show();
    })

    $("#wx").click(function () {
        $("#wenxin").hide();
        $("#dati").show();
    
    })

    $(".select").click(function () {
        var a = $(this).index();
        $(this).parent().find(".select").removeClass("selectlv");
        $(this).parent().find(".daan-font3").text("未确认");
        $(this).addClass("selectlv");
        $(this).parent().find(".daan-font2").text(optionArr[a]);


    })

    $(".selectlq").click(function () {
        var a = $(this).index();
        // optionArr[a]
        $(this).parent().parent().find(".stk_da1").find(".stk_da_2").find(".stk_da_2_1").find(".tijiao").text("已提交");
    })

 
    


    $("#tijiao").click(function () {
        for (let i = 0; i < $(".ti").length; i++) {
            daan[i] = $(".daan-font2").eq(i).html();
        }
        
        // var a = $(this).index;
        $("#dati").hide();
        console.log(daan);
        $("#daanjieguo").show();
    })
    $("#jieguo").click(function () {
        // var a = $(this).index;
        $("#daanjieguo").hide();
    })
    
  

});
