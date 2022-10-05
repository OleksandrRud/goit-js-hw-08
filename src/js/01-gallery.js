// Add imports above this line

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const galleeryRef = document.querySelector('.gallery');

function createGalleryEl(items) {
  return items
    .map(
      item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}" />
</a>`
    )
    .join('');
}

const addItemToMarkup = createGalleryEl(galleryItems);
console.log(addItemToMarkup);
galleeryRef.innerHTML = addItemToMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
