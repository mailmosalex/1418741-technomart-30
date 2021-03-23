// Pop-up окно формы обратной связи

let formOpen = document.querySelector(".contacts-feedback");
let modalForm = document.querySelector(".pop-up-form");
let formClose = document.querySelector(".close-button-form");

if (formOpen) {
  formOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.add("modal-show");
  });
}

if (formClose) {
  formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  27 == evt.keyCode &&
    modalForm.classList.contains("modal-show") &&
    modalForm.classList.remove("modal-show");
});

// Pop-up окно оформить заказ

let cartOpens = document.querySelectorAll(".buy-button");
let modalCart = document.querySelector(".pop-up-cart-add");
let cartClose = document.querySelector(".close-button-add");

console.log(cartOpens);

for (let cartOpen of cartOpens) {
  if (cartOpen) {
    cartOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalCart.classList.add("modal-show");
    });
  }
}

if (cartClose) {
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  27 == evt.keyCode &&
    modalForm.classList.contains("modal-show") &&
    modalForm.classList.remove("modal-show");
});

// Pop-up окно карты

let mapOpen = document.querySelector(".contacts-map");
let modalMap = document.querySelector(".pop-up-map");
let mapClose = document.querySelector(".close-button-map");

if (mapOpen) {
  mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  });
}

if (mapClose) {
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  27 == evt.keyCode &&
    modalMap.classList.contains("modal-show") &&
    modalMap.classList.remove("modal-show");
});

// services-section кнопки Доставка, Гарантия, Кредит

function openService(evt, serviceName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("service-tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("service-tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " service-btn-active",
      ""
    );
  }

  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.className += " service-btn-active";
}

document.getElementById("deliveryOpen").click();

// offer-slider добавляет слайдер

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  let dots = document.getElementsByClassName("slider-dots-item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slider-dots-active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " slider-dots-active";
}
