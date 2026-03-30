document.addEventListener("DOMContentLoaded", () => {
  const mq = window.matchMedia("(min-width: 900px)");

  const sections = document.querySelectorAll("#aboutsection");
  const softwareIcons = document.querySelector("#softwareicons");

  if (!mq.matches) {
    sections.forEach(section => section.classList.add("is-visible"));
    if (softwareIcons) softwareIcons.classList.add("is-visible");
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

  sections.forEach(section => observer.observe(section));
  if (softwareIcons) observer.observe(softwareIcons);
});