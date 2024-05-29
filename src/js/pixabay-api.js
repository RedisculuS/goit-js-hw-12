'use strict';

const API_KEY = '43967749-ce2f7a1bd8d115ad659da346f';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${err.message}`);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.log('Fetch error:', error);
      return [];
    });
}
