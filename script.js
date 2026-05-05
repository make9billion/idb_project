const phoneInput = document.querySelector("#phone");
const leadForm = document.querySelector(".lead-form");
const heroTrack = document.querySelector(".hero-track");
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const slideButtons = Array.from(document.querySelectorAll("[data-slide]"));

let currentSlide = 0;
let autoTimer;

const formatPhone = (value) => {
  const rest = value.replace(/\D/g, "").replace(/^010/, "").slice(0, 8);
  const middle = rest.slice(0, 4);
  const last = rest.slice(4, 8);

  if (!middle) return "010-";
  if (!last) return `010-${middle}`;
  return `010-${middle}-${last}`;
};

const setSlide = (index) => {
  if (!heroTrack || slides.length === 0) return;

  currentSlide = (index + slides.length) % slides.length;
  heroTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  slideButtons.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.slide) === currentSlide);
  });
};

const startAutoSlide = () => {
  window.clearInterval(autoTimer);
  autoTimer = window.setInterval(() => {
    setSlide(currentSlide + 1);
  }, 5200);
};

if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    phoneInput.value = formatPhone(phoneInput.value);
  });

  phoneInput.addEventListener("focus", () => {
    if (!phoneInput.value.startsWith("010-")) {
      phoneInput.value = "010-";
    }
  });
}

slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setSlide(Number(button.dataset.slide));
    startAutoSlide();
  });
});

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("상담신청완료");
  });
}

setSlide(0);
startAutoSlide();
