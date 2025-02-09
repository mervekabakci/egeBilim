var wWidth = $(window).width();

$(window).on("load", function () {
  if ($(".preloader").length) {
    $(".preloader").addClass("last");
    setTimeout(() => {
      $(".preloader").remove();
    }, 100);
  }
});

/*Scrooll page fixed header */
// let lastScrollY = window.scrollY;

// document.addEventListener("scroll", function () {
//   var header = document.getElementById("header");

//   // Header için sticky sınıfı ekleme
//   if (window.scrollY > 0) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//   }
// });

//Animasyonlar icin aos init kullaniliyor
AOS.init({
  offset: 50,
  easing: "ease",
  once: true,
});

/**Header menu button */
$(".navbar-toggler").on("click", function () {
  $("html").toggleClass("overflow-hidden");
});

/**Mobile menu accordion */
if (window.innerWidth <= 992) {
  $("header .navbar .navbar-nav .nav-item .nav-link").removeClass("active");
  $("header .navbar .navbar-nav .nav-item.subMenuNavItem .nav-link").on(
    "click",
    function () {
      $(this).hasClass("active")
        ? ($(this).removeClass("active"),
          $(this).next(".subMenuNav").removeClass("opened"),
          $(this).closest("li").removeClass("active"))
        : ($(
            "header .navbar .navbar-nav .nav-item.subMenuNavItem .nav-link"
          ).removeClass("active"),
          $(
            "header .navbar .navbar-nav .nav-item.subMenuNavItem .subMenuNav"
          ).removeClass("opened"),
          $("header .navbar .navbar-nav .nav-item.subMenuNavItem").removeClass(
            "active"
          ),
          $(this).addClass("active"),
          $(this).next(".subMenuNav").addClass("opened"),
          $(this).closest("li").addClass("active"));
    }
  );
}
//Header End

/**Mobil tab menu kaydırma */
$(".horizontalMobilScrollWrapper").each(function () {
  // İlk açılışta active olan butonu sola scroll et
  scrollToActiveTab($(this));

  // Nav-link tıklamalarında scroll işlemini gerçekleştir
  $(this).on("click", ".nav-link", function () {
    scrollToActiveTab(
      $(this).closest(".horizontalMobilScrollWrapper"),
      $(this)
    );
  });
});

function scrollToActiveTab($wrapper, $activeTab = null) {
  if (!$activeTab) {
    // İlk açılışta active olan nav-link'i bul
    $activeTab = $wrapper.find(".nav-link.active");
  }

  let buttonPosition = $activeTab.position().left;
  let wrapperScrollLeft = $wrapper.scrollLeft();
  let scrollAmount = buttonPosition + wrapperScrollLeft - 20; // 20px padding eklenebilir

  // Scroll işlemini gerçekleştir
  $wrapper.animate({ scrollLeft: scrollAmount }, 300);
}

if (typeof Fancybox !== "undefined") {
  Fancybox.bind("[data-fancybox]", {
    compact: !1,
    Carousel: {},
    Thumbs: !1,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
  Fancybox.bind(".galleryItem", {
    compact: !1,
    Carousel: {},
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
}

// document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

// document.addEventListener("keydown", function (event) {
//   if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
//       event.preventDefault();
//   }
//   if (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i")) {
//       event.preventDefault();
//   }
//   if (event.key === "F12") {
//       event.preventDefault();
//   }
// });
// setInterval(function () {
//   if (window.outerWidth - window.innerWidth > 160 ||
//       window.outerHeight - window.innerHeight > 160) {
//       window.location.href = "https://google.com"; // Kullanıcıyı başka bir sayfaya yönlendir
//   }
// }, 1000);

// (function() {
//   let checkStatus = setInterval(function() {
//       const devtools = /./;
//       devtools.toString = function() {
//           throw new Error("DevTools kapalı olmalıdır!");
//       };
//       console.log("%c", devtools);
//   }, 1000);
// })();
