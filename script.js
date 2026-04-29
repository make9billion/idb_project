const heroTitle = document.querySelector("#hero-title");

if (heroTitle) {
  heroTitle.addEventListener("pointermove", (event) => {
    const { left, width } = heroTitle.getBoundingClientRect();
    const progress = (event.clientX - left) / width;
    const hue = 18 + progress * 28;

    heroTitle.style.color = `hsl(${hue}, 48%, 22%)`;
  });

  heroTitle.addEventListener("pointerleave", () => {
    heroTitle.style.color = "";
  });
}
