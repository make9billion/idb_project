const phoneInput = document.querySelector("#phone");
const productLinks = document.querySelectorAll(".product-tabs a");
const leadForm = document.querySelector(".lead-form");

const formatPhone = (value) => {
  const rest = value.replace(/\D/g, "").replace(/^010/, "").slice(0, 8);
  const middle = rest.slice(0, 4);
  const last = rest.slice(4, 8);

  if (!middle) return "010-";
  if (!last) return `010-${middle}`;
  return `010-${middle}-${last}`;
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

productLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("상담 신청 기능은 다음 단계에서 연결하겠습니다.");
  });
}
