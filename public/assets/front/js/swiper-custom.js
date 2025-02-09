/*anasayfa okula cardları mobılde slide a cevrılıyor */
let schoolMobilSlider;

const initSchoolMobilSlider = () => {
  const schoolMobilSlideCard = document.querySelector(".schoolMobilSlideCard");
  const cards = document.querySelector(".schoolMobilSlideCard .cards");
  const cardItems = document.querySelectorAll(".schoolMobilSlideCard .card");

  if (window.innerWidth < 992 && !schoolMobilSlider) {
    // Swiper classlarını ekle
    schoolMobilSlideCard.classList.add("swiper");
    cards.classList.add("swiper-wrapper");
    cardItems.forEach((card) => card.classList.add("swiper-slide"));

    // Swiper slider'ı başlat
    schoolMobilSlider = new Swiper(".schoolMobilSlideCard", {
      slidesPerView: 2,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  } else if (window.innerWidth >= 992 && schoolMobilSlider) {
    // Swiper slider'ı yok et ve classları kaldır
    schoolMobilSlider.destroy(true, true);
    schoolMobilSlider = null;

    schoolMobilSlideCard.classList.remove("swiper");
    cards.classList.remove("swiper-wrapper");
    cardItems.forEach((card) => card.classList.remove("swiper-slide"));
  }
};

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde kontrol et
initSchoolMobilSlider();
window.addEventListener("resize", initSchoolMobilSlider);

/**Anasayfadaki haberler, etkinlikler, duyurular ıcın kullanılan 3'lu slide yapısı */
const thirdSlide = document.querySelectorAll(".thisSlideWrapper");

thirdSlide.forEach((wrapperElement) => {
  const sliderElement = wrapperElement.querySelector(".thirdSlide");

  new Swiper(sliderElement, {
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
      el: wrapperElement.querySelector(".swiper-pagination-single"),
      clickable: true,
    },
    navigation: {
      nextEl: wrapperElement.querySelector(".swiper-button-next"),
      prevEl: wrapperElement.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },

  });
});
