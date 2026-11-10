// Discourages saving images: blocks the right-click menu and long-press on every <img>.
// Load with a plain <script> tag at the end of <body>.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("contextmenu", event => event.preventDefault());
    img.addEventListener("touchstart", event => event.preventDefault());
  });
});
