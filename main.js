$(".gift").click(function () {
  $(this).addClass("open");
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
  },1000);
});
