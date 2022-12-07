$(".gift").click(function () {
  $(this).addClass("open");
  $(".gift-click").hide(300);

  $(".gift__title").fadeOut(300);
  $(".gift__subtitle").fadeOut(300);
  setTimeout(() => {
    $(".confetti").css({ display: "block" });
  }, 500);

  setTimeout(() => {
    $(".confetti div").css({
      animationIterationCount: 1,
      animationFillMode: "forwards",
    });

    $(".box").css({ transform: "translateY(1000%)", transition: "1s all" });
  }, 800);

  setTimeout(() => {
    $(".box-body").addClass("show ");
  }, 1000);
});
