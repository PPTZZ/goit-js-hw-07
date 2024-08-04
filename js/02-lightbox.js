
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// Populating gallery with tumbnails
galleryItems.forEach(e => {
  const {preview, original, description} = e
  const img = `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
            <img src='${preview}' alt='${description}' class='gallery__image' data-source='${original}' title='${description}'>
        </a>
    </li>`;
  gallery.insertAdjacentHTML('beforeend', img);
});

gallery.addEventListener('click', (e)=>{
    e.preventDefault();
   const image = new SimpleLightbox('.gallery .gallery__link');
   console.log(image);
})

