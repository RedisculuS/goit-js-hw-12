'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;
const loader = document.getElementById('loader');
const gallery = document.querySelector('.gallery');

export function renderImages(images) {

  const imageMarkup = images
    .map(
      img => `<li class="gallery-item">
      <a class="gallery-link" href="${img.webformatURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${img.largeImageURL}" 
          alt="${img.tags}" 
          />
          
      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${img.likes}</li>
      <li><strong>Views</strong> ${img.views}</li>
      <li><strong>Comments</strong> ${img.comments}</li>
      <li><strong>Downloads</strong> ${img.downloads}</li>
      </ul>
    </li>`
    )
    .join('');
    
    gallery.innerHTML = imageMarkup;

   
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function initializeLightbox() {
  lightbox = new simpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

export function refreshLightbox() {
  if (lightbox) {
    lightbox.refresh();
  } else {
    initializeLightbox();
  }
}