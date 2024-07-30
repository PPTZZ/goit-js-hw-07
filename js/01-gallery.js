import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach((e) => {
	const img = `<li class='gallery__item'>
        <a class='gallery__link' href='${e.original}'>
            <img src='${e.preview}' alt='${e.description}' class='gallery__image' data-source='${e.original}'>
        </a>
    </li>`;
	gallery.insertAdjacentHTML('beforeend', img);
});

gallery.addEventListener('click',(e)=>{
    e.preventDefault();
    
})