import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// Populating gallery with tumbnails
galleryItems.forEach(e => {
  const img = `<li class='gallery__item'>
        <a class='gallery__link' href='${e.original}'>
            <img src='${e.preview}' alt='${e.description}' class='gallery__image' data-source='${e.original}'>
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
    .map(galleryItem => galleryItem.original)
    .filter(galleryItem => galleryItem === e.target.dataset.source);

  const image = basicLightbox.create(
    `<img width="1400" height="900" src="${imageLink[0]}">`,
    { closable: false }
  );
  image.show();
  if (image.visible()) {
	const picture = document.querySelector('.basicLightbox__placeholder');
	picture.classList.add('disable-click');
    gallery.addEventListener('keydown', (e) => {
      e.target.nodeName === 'A' && e.code === 'Escape'
        ? image.close()
        : _.throttle(alert('Press Escape to close'), 1000);
    });
  }
});

// Closing modal(nu se inghide aceeasi problema)
// gallery.addEventListener('keydown',(e)=>{
//     const picture = document.querySelector('.basicLightbox');
//     if(image !== null){
// 		image.classList.add('disable-click');
//         e.target.nodeName === 'A' && e.code === 'Escape' ? image.remove() : _.throttle(alert('Press Escape to close'), 500);
//     }
// });
