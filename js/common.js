/* 드롭다운 메뉴 */
$(function(){
  $("#gnb ul li").mouseover(function(){
    $("#submenu").css("display","block");
    $("#maintitle").css("display","none");
  });
  $("#maninbanner").mouseover(function(){
    $("#submenu").css("display","none");
    $("#maintitle").css("display","block");
  });
});//document ready

/* 메인 타이틀 애니메이션 */
$(function(){
  let timerId = setTimeout(function(){
    $("#maintitle").animate({ opacity: "0"},1000);
  },4000);
});

/* 메인 배너 아이콘이미지 호버 */
$(function(){
  $(".main_img1").mouseover(function(){
    $(this).attr("src","./img/mainbanner/main_img1_on.png")
  }).mouseout(function(){
    $(this).attr("src","./img/mainbanner/main_img1.png")
  });
  $(".main_img2").mouseover(function(){
    $(this).attr("src","./img/mainbanner/main_img2_on.png")
  }).mouseout(function(){
    $(this).attr("src","./img/mainbanner/main_img2.png")
  });
  $(".main_img3").mouseover(function(){
    $(this).attr("src","./img/mainbanner/main_img3_on.png")
  }).mouseout(function(){
    $(this).attr("src","./img/mainbanner/main_img3.png")
  });
  $(".main_img4").mouseover(function(){
    $(this).attr("src","./img/mainbanner/main_img4_on.png")
  }).mouseout(function(){
    $(this).attr("src","./img/mainbanner/main_img4.png")
  });
});

/* section2 content 영역 icon 호버 */
$(function(){
  $("#section2 .first").mouseover(function(){
    $("img",this).attr("src","./img/section2/sec2_icon1_on.png");
    $("dl",this).css("opacity","1");
  }).mouseout(function(){
    $("img",this).attr("src","./img/section2/sec2_icon1.png");
    $("dl",this).css("opacity","0");
  });

  $("#section2 .second").mouseover(function(){
    $("img",this).attr("src","./img/section2/sec2_icon2_on.png");
    $("dl",this).css("opacity","1");
  }).mouseout(function(){
    $("img",this).attr("src","./img/section2/sec2_icon2.png");
    $("dl",this).css("opacity","0");
  });

  $("#section2 .third").mouseover(function(){
    $("img",this).attr("src","./img/section2/sec2_icon3_on.png");
    $("dl",this).css("opacity","1");
  }).mouseout(function(){
    $("img",this).attr("src","./img/section2/sec2_icon3.png");
    $("dl",this).css("opacity","0");
  });
});

$(function(){
  $("#section5 .mission ul:first-child li:first-child").mouseover(function(){
    $(this).css("background","rgba(183, 182, 132)");
    $("dt",this).css("border-bottom","6px solid white");
  }).mouseout(function(){
    $(this).css("background-image","url('./img/section5/img1.jpg'");
    $("dt",this).css("border-bottom","0px solid white");
  });

  $("#section5 .mission ul:first-child li:last-child").mouseover(function(){
    $(this).css("background","rgba(142, 139, 119)");
    $("dt",this).css("border-bottom","6px solid white");
  }).mouseout(function(){
    $(this).css("background-image","url('./img/section5/img3.jpg'");
    $("dt",this).css("border-bottom","0px solid white");
  });

  $("#section5 .mission ul:last-child li:first-child").mouseover(function(){
    $(this).css("background","rgba(156, 189, 114)");
    $("dt",this).css("border-bottom","6px solid white");
  }).mouseout(function(){
    $(this).css("background-image","url('./img/section5/img2.jpg'");
    $("dt",this).css("border-bottom","0px solid white");
  });

  $("#section5 .mission ul:last-child li:last-child").mouseover(function(){
    $(this).css("background","rgba(126, 139, 102)");
    $("dt",this).css("border-bottom","6px solid white");
  }).mouseout(function(){
    $(this).css("background-image","url('./img/section5/img4.jpg'");
    $("dt",this).css("border-bottom","0px solid white");
  });
});
