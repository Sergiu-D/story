const gallery = document.querySelector(".gallery-container");
console.dir(gallery);
// const galleryInner = document.querySelector(".gallery-inner");
const galleryScrollLeft = document.querySelector(".gallery-controller__left");
const galleryScrollRight = document.querySelector(".gallery-controller__right");

let galleryScrollLeftInterval;
let galleryScrollRightInterval;

const scrollByValue = 250;
const scrollIntervalValue = 315;
galleryScrollLeft.addEventListener("mouseenter", () => {
  galleryScrollLeftInterval = setInterval(() => {
    gallery.scrollBy(-scrollByValue, 0);
  }, scrollIntervalValue);
});
galleryScrollRight.addEventListener("mouseenter", () => {
  galleryScrollRightInterval = setInterval(() => {
    gallery.scrollBy(scrollByValue, 0);
  }, scrollIntervalValue);
});

galleryScrollLeft.addEventListener("mouseleave", () => {
  clearInterval(galleryScrollLeftInterval);
});
galleryScrollRight.addEventListener("mouseleave", () => {
  clearInterval(galleryScrollRightInterval);
});
