<<<<<<< Updated upstream
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryCountainer = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt='${description}'/>
</a>  
`
  )
  .join('');

galleryCountainer.insertAdjacentHTML('afterbegin', markup);

console.log(galleryCountainer);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  overlayOpacity: 0.5,
  captionDelay: 250,
  captionsData: 'alt',
});
=======
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = creatElements(galleryItems);

function creatElements(gallery) {
  const imageEl = gallery
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>`
    )
    .join('');

  return imageEl;
}

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


>>>>>>> Stashed changes
