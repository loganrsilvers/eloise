document.addEventListener("DOMContentLoaded", () => {
  const mq = window.matchMedia("(min-width: 900px)");
  let observer = null;
  let scrollHandler = null;

  const targets = [
    "header",
    ".slideshow",
    "#portfolio-buttons",
    "#portfolio-grid",
    "#project-view",
    "footer"
  ];

  const setupAnimations = () => {
    const revealElements = document.querySelectorAll(targets.join(", "));
    const gridItems = document.querySelectorAll("#portfolio-grid .grid-item");

    [...revealElements, ...gridItems].forEach(el => {
      el.classList.add("reveal");
      el.classList.remove("is-visible");
    });

    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    });

    [...revealElements, ...gridItems].forEach(el => observer.observe(el));

    const slideshow = document.querySelector(".slideshow");
    const header = document.querySelector("header");

    if (scrollHandler) window.removeEventListener("scroll", scrollHandler);

    scrollHandler = () => {
      const y = window.scrollY;
      if (slideshow) slideshow.style.transform = `translateY(${y * 0.03}px)`;
      if (header) header.style.transform = `translateY(${y * 0.01}px)`;
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
  };

  const clearAnimations = () => {
    if (observer) observer.disconnect();
    observer = null;

    if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
    scrollHandler = null;

    document.querySelectorAll([...targets, "#portfolio-grid .grid-item"].join(", "))
      .forEach(el => {
        el.classList.remove("reveal", "is-visible");
        el.style.transform = "";
      });
  };

  const applyMode = () => {
    if (mq.matches) setupAnimations();
    else clearAnimations();
  };

  applyMode();

  mq.addEventListener("change", applyMode);
});