import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
      position: 'topRight',
      timeout: 5000,
      backgroundColor: 'red',
      messageColor: 'white',
      progressBar: false,
      maxWidth: 432,
      balloon: true,
      close: true,
      messageLineHeight: '1.4em',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.add('show');

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
        timeout: 5000,
        backgroundColor: 'red',
        messageColor: 'white',
        progressBar: false,
        maxWidth: 432,
        balloon: true,
        close: true,
        messageLineHeight: '1.4em',
      });
      return;
    }

    gallery.innerHTML = renderGallery(images);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    loader.classList.remove('show');
  }
});
