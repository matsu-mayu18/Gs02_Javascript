//電気をつけたり消したり
$("#lightbulb_switch").on("click", function () {
  if ($(this).hasClass("lightbulb_off")) {
    console.log("switch is off, turn it on!");
    $(this).removeClass("lightbulb_off").addClass("lightbulb_on");
    //img要素を探してsrcを置き換える。背景色を明るくする
    $(this).find("img").attr("src", "./img/lightbulb_on.png");
    $("body").css("background-color", "#fff5eb");
  } else if ($(this).hasClass("lightbulb_on")) {
    console.log("switch is on, turn it off!");
    $(this).removeClass("lightbulb_on").addClass("lightbulb_off");
    //img要素を探してsrcを置き換える。背景色を暗くする
    $(this).find("img").attr("src", "./img/lightbulb_off.png");
    $("body").css("background-color", "#696969");
  }
});

//jyanken　me　handのボタンを押したら狸がジャンプする
$(".gu").on("click", function () {
  console.log("gu");
  var currentPosition = guImage.position().top;
});
$(".choki").on("click", function () {
  console.log("choki");
});
$(".pa").on("click", function () {
  console.log("pa");
});

//じゃんけん
var me_hand_num = 0;
var com_hand_num = 0;
//me_handのいずれかがクリックされたらコンピュータの手を決める
$(".me_hand").on("click", function () {
  //ランダムで0,1,2のいずれかの整数を生成
  com_hand_num = Math.floor(Math.random() * 3);
  console.log("com_hand_num:" + com_hand_num);
});

//me_handの数を指定
$(".me_hand_gu").on("click", function () {
  me_hand_num = 0;
  console.log("me_hand_num:" + me_hand_num);
});
$(".me_hand_choki").on("click", function () {
  me_hand_num = 1;
  console.log("me_hand_num:" + me_hand_num);
});
$(".me_hand_pa").on("click", function () {
  me_hand_num = 2;
  console.log("me_hand_num:" + me_hand_num);
});

//勝負判定
//初期位置
var initialTranslate = "translate(0, 0)";
$(".jyanken").on("click", function () {
  $(".me_hand_gu").css("transform", initialTranslate);
  $(".me_hand_choki").css("transform", initialTranslate);
  $(".me_hand_pa").css("transform", initialTranslate);
  $(".computer_hand_gu").css("transform", initialTranslate);
  $(".computer_hand_choki").css("transform", initialTranslate);
  $(".computer_hand_pa").css("transform", initialTranslate);

  if (me_hand_num == com_hand_num) {
    console.log("ひきわけ！com:" + com_hand_num + ", me:" + me_hand_num);
  } else if (
    (me_hand_num == 0 && com_hand_num == 1) ||
    (me_hand_num == 1 && com_hand_num == 2) ||
    (me_hand_num == 2 && com_hand_num == 0)
  ) {
    console.log("meの勝ち！com:" + com_hand_num + ", me:" + me_hand_num);
  } else if (
    (me_hand_num == 0 && com_hand_num == 2) ||
    (me_hand_num == 1 && com_hand_num == 0) ||
    (me_hand_num == 2 && com_hand_num == 1)
  ) {
    console.log("comの勝ち！com:" + com_hand_num + ", me:" + me_hand_num);
  }

  //com_handをジャンプ
  if (com_hand_num == 0) {
    $(".computer_hand_gu").css("transform", "translateY(-20px)");
  } else if (com_hand_num == 1) {
    $(".computer_hand_choki").css("transform", "translateY(-20px)");
  } else if (com_hand_num == 2) {
    $(".computer_hand_pa").css("transform", "translateY(-20px)");
  }

  //me_handをジャンプ
  if (me_hand_num == 0) {
    $(".me_hand_gu").css("transform", "translateY(-20px)");
  } else if (me_hand_num == 1) {
    $(".me_hand_choki").css("transform", "translateY(-20px)");
  } else if (me_hand_num == 2) {
    $(".me_hand_pa").css("transform", "translateY(-20px)");
  }
});
