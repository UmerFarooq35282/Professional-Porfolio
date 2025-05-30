document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
