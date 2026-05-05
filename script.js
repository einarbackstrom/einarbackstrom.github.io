const revealElements = document.querySelectorAll(".reveal");

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 60, 180)}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.22,
    rootMargin: "0px 0px -10% 0px",
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});
