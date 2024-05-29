'use strict';

import { fetchImages } from './js/pixabay-api';
// import { renderImages, showError, clearGallery, showLoader, hideLoader, initializeLightbox, refreshLightbox } from './js/render-functions';
import { renderImages, showError, clearGallery, showLoader, hideLoader , refreshLightbox, showLoaderBtn, hideLoaderBtn} from './js/render-functions';


const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-img-input');
const loadmoreBtn = document.querySelector('.load-more');
// document.body.appendChild(loadmoreBtn);

let query = '';
let page = 1;

form.addEventListener('submit', handleSubmit);
loadmoreBtn.addEventListener('click', handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();

  query = searchInput.value.trim();
  page = 1;

  if (!query) {
    showError('Please enter a search term');
    return;
  }
  
  // gallery.innerHTML = '';
  clearGallery();
  hideLoaderBtn();
  showLoader();
  
  try {
    const images = await fetchImages(query, page);
    hideLoader();
    if (images.length === 0) {
      showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
    } else {
          renderImages(images);
          // initializeLightbox();
          // refreshLightbox();
          showLoaderBtn();
    }
  } catch (error) {
    hideLoader();
      showError('An error occured while fetching images');
      console.error(error);
    }
}

async function handleLoadMore(event) {
  page += 1;
  showLoader();

  try {
    const images = await fetchImages(query, page);
    hideLoader();
    if (images.length === 0) {
      showError(
        'No more images found'
      );
      hideLoaderBtn();
    } else {
          renderImages(images, true);
          refreshLightbox();
    }
  } catch (error) {
      hideLoader();
      showError('An error occured while fetching more images');
      console.error(error);
    }
}


