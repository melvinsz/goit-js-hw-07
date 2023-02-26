// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку
// модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >, і вказуватися
// в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>

//     Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде
// перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const palletteContainer = document.querySelector(".gallery");
const cardPictures = createPicturesCards(galleryItems);
palletteContainer.insertAdjacentHTML("beforeend", cardPictures);

function createPicturesCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 <div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`;
    })
    .join("");
}

palletteContainer.addEventListener("click", onPictureClick);

function onPictureClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target.dataset.source);
}

palletteContainer.onclick = (event) => {
  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
  );
  instance.show();
  palletteContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
};
