import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector(".gallery");
const galleryElements = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
);
galleryBox.insertAdjacentHTML("beforeend", galleryElements.join(""));
galleryBox.addEventListener("click", onImageClick);
function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.className !== "gallery_image") {
    return;
  }
  modalImageControl(evt.target.dataset.source);
}
let galleryStatus;
function modalImageControl(link) {
  galleryStatus = basicLightBox.create(
    `
    <img src="${link}" width="800" height="600">
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", onListenerKeyboard);
      },
      onClose: () => {
        document.addEventListener("keydown", onListenerKeyboard);
      },
    }
  );
  galleryStatus.show();
}
function onlistenerKeyboard(evt) {
  if (evt.code === "Escape") {
    return galleryStatus.close();
  }
}
