(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const carousels = document.querySelectorAll(".visual-carousel");

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll("img"));
    if (!slides.length) return;

    const dotsContainer = carousel.parentElement?.querySelector(".carousel-dots");
    const dots = [];

    slides.forEach((img, index) => {
      img.classList.toggle("is-active", index === 0);
      img.setAttribute("loading", "lazy");
      if (dotsContainer) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `切換至第 ${index + 1} 張視覺`);
        dot.classList.toggle("is-active", index === 0);
        dot.addEventListener("click", () => setSlide(index));
        dotsContainer.appendChild(dot);
        dots.push(dot);
      }
    });

    let current = 0;
    let timer = null;

    const setSlide = (index) => {
      current = index % slides.length;
      slides.forEach((img, i) => img.classList.toggle("is-active", i === current));
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === current));
    };

    const start = () => {
      if (timer) return;
      timer = setInterval(() => {
        setSlide((current + 1) % slides.length);
      }, 4200);
    };

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    start();
  });
})();
