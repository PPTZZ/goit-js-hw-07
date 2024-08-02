import lightbox from 'lightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// Populating gallery with tumbnails
galleryItems.forEach(e => {
  const {preview, original, description} = e
  const img = `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
            <img src='${preview}' alt='${description}' class='gallery__image' data-source='${original}'>
        </a>
    </li>`;
  gallery.insertAdjacentHTML('beforeend', img);
});
console.log(gallery);

gallery.addEventListener('click', (e)=>{
    e.preventDefault();

    const imageLinks= galleryItems
    .map(galleryItem => galleryItem.original);
    SimpleLightbox.open({
        items: imageLinks
    });
})

