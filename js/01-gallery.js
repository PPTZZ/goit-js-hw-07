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

// Opening modal & close modal
gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const imageLink = galleryItems
    .map(image => image.original)
    .filter(image => image === e.target.dataset.source);

  const image = basicLightbox.create(
    `<img width="1400" height="900" src="${imageLink[0]}">`,
    { closable: false }
  );
  image.show();
  if (image.visible()) {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        image.close();
      }
    });
  }
});

// Closing modal(cand dau click oriunde pe modal )
// gallery.addEventListener('keydown',(e)=>{
//     const image = document.querySelector('.basicLightbox');
//     if(image !== null){
//         e.target.nodeName === 'A' && e.code === 'Escape' ? image.remove() : alert('Press Escape to close');
//     }
// });
