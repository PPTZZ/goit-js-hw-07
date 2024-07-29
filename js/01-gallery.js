import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach((e)=>{
    const li = document.createElement('li');
    const img = `<img src='${e.preview}' alt='${e.description}' class='gallery__image'>`;
    li.classList.add('gallery__item');
    li.insertAdjacentHTML('afterbegin',img);
    gallery.append(li)
});

gallery.addEventListener('click',(e)=>{
    if (e.target.nodeName !== 'IMG'){
        return
    }
});
