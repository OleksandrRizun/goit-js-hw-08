// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


let instance;

// Gallery markup
function createGalleryItem (preview, original, description) {
    const galleryItem =
    `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${preview}
            alt=${description} />
        </a>
    </li>`
    return galleryItem
}
const galleryContent = galleryItems.map(({preview, original, description}) => createGalleryItem(preview, original, description)).join("\n");

const galleryElement = document.querySelector (".gallery");
galleryElement.insertAdjacentHTML ("beforeend", galleryContent);

instance = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionClass: "image-caption"
});

