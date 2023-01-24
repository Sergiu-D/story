// import lozad from "../node_modules/lozad/dist/lozad";
// // var lozad = require("lozad");

// const observer = lozad(".lozad", {
//   //   rootMargin: "10px 0px", // syntax similar to that of CSS Margin
//   //   threshold: 0.1, // ratio of element convergence
//   loaded: function (el) {
//     // Custom implementation on a loaded element
//     el.classList.add("loaded");
//   },
// });
// observer.observe();
// const observer = lozad(); // lazy loads elements with default selector as '.lozad'
// observer.observe();

var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

if ("IntersectionObserver" in window) {
  var lazyImageObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.srcset = lazyImage.dataset.srcset;
        lazyImage.classList.remove("lazy");
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });

  lazyImages.forEach(function (lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
}
