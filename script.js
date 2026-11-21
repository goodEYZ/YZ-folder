const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".gallery img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.showModal();
  });
});

lightbox.addEventListener("click", () => {
  lightbox.close();
});