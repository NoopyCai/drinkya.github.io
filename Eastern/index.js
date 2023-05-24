var burger = document.getElementById('burger');
var nav = document.querySelector('.nav');
var toservice = document.querySelector('.toService');
function toggleNav(){
  if(nav.style.display == "none"){
    nav.style.display = "block";
  }
  else{
    nav.style.display = "none"
  }
}

$(function(){

  // 偵聽a click
  $(".navbar .service").bind("click",function(){

      var id=$(this).attr("data-id");

      // 取得目標區塊的y座標
      var target_top = $("#section2").offset().top;


      // 取得body物件 這種寫法在各瀏覽器上最保險
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

      // 移動捲軸有動畫效果
        $body.animate({
            scrollTop: target_top
        }, 800);

  })
})

$(function(){

  // 偵聽a click
  $(".navbar .contact").bind("click",function(){

      var id=$(this).attr("data-id");

      // 取得目標區塊的y座標
      var target_top = $("#section3").offset().top;


      // 取得body物件 這種寫法在各瀏覽器上最保險
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

      // 移動捲軸有動畫效果
        $body.animate({
            scrollTop: target_top
        }, 800);

  })
})
$(function(){

  // 偵聽a click
  $(".nav .service").bind("click",function(){

      var id=$(this).attr("data-id");

      // 取得目標區塊的y座標
      var target_top = $("#section2").offset().top;


      // 取得body物件 這種寫法在各瀏覽器上最保險
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

      // 移動捲軸有動畫效果
        $body.animate({
            scrollTop: target_top
        }, 800);

  })
})

$(function(){

  // 偵聽a click
  $(".nav .contact").bind("click",function(){

      var id=$(this).attr("data-id");

      // 取得目標區塊的y座標
      var target_top = $("#section3").offset().top;


      // 取得body物件 這種寫法在各瀏覽器上最保險
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

      // 移動捲軸有動畫效果
        $body.animate({
            scrollTop: target_top
        }, 800);

  })
})

$(document).ready(function () {
  // 捲軸偵測距離頂部超過 50 才顯示按鈕
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      if ($(".back-top").hasClass("hide")) {
        $(".back-top").toggleClass("hide");
      }
    } else {
      $(".back-top").addClass("hide");
    }
  });

  // 點擊按鈕回頂部
  $(".back-top").on("click", function (event) {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500 // 回頂部時間為 500 毫秒
    );
  });
});

