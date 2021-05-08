$(function () {
  $(".chart").easyPieChart({
    barColor: "#F69E7B",
    trackColor: "#383e56",
    lineWidth: 8,
    rotate: 40,
    scaleLength: false,
  });

  let navbarModal = $(".navbar-modal");

  $(".btn-bars").click(function () {
    navbarModal.addClass("active");
    window.sc;
  });
  $(".btn-close").click(function () {
    navbarModal.removeClass("active");
  });
});

/*noscrollingto start*/
window.addEventListener("scroll", function () {
  if ($(".navbar-modal").hasClass("active")) {
    window.scrollTo(0, 0);
  }
});

/*noscrollingto end*/
