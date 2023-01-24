window.onload = function () {
  document.querySelector(".loading-screen").style.display = "none";
};

const observer = lozad(".lozad", {
  rootMargin: "10px 0px", // syntax similar to that of CSS Margin
  threshold: 0.1, // ratio of element convergence
  loaded: function (el) {
    // Custom implementation on a loaded element
    el.classList.add("loaded");
  },
});
observer.observe();
