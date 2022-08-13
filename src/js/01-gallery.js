// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = renderGalleryImages(galleryItems);

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

function renderGalleryImages(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
console.log();
