let schoolMobilSlider;

const initSchoolMobilSlider = () => {
  const schoolMobilSlideCard = document.querySelector(".schoolMobilSlideCard");
  
  // Eğer .schoolMobilSlideCard sayfada yoksa fonksiyonu durdur
  if (!schoolMobilSlideCard) return;

  const cards = schoolMobilSlideCard.querySelector(".cards");
  const cardItems = schoolMobilSlideCard.querySelectorAll(".card");

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

  // Eğer thirdSlide yoksa hata almamak için işlemi durdur
  if (!sliderElement) return;

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



/**ilkokul anasayfasındaki ogretmenler sliderı 4 lu kullanım standarttır */
const quadSlide = document.querySelectorAll(".thisSlideWrapper");

quadSlide.forEach((wrapperElement) => {
  const sliderElement = wrapperElement.querySelector(".quadSlide");

  // Eğer thirdSlide yoksa hata almamak için işlemi durdur
  if (!sliderElement) return;

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
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
});
