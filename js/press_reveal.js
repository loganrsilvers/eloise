document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box, index) => {
    box.classList.add("box", `delay-${(index % 4) + 1}`);
  });

  const mq = window.matchMedia("(min-width: 900px)");

  if (!mq.matches) {
    boxes.forEach(box => box.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px"
  });

  boxes.forEach(box => observer.observe(box));
});