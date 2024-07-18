import { showError, createMarkup, list, lightbox } from './js/render-functions';
import { searchImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 2500,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
  titleSize: '16px',
  titleColor: '#fff',
  titleLineHeight: '1.5',
  messageSize: '16px',
  messageLineHeight: '1.5',
  backgroundColor: 'rgba(255, 182, 66, 0.8)',
});

const form = document.querySelector('.js-search-form');
const loader = document.querySelector('.js-loader-container');

form.addEventListener('submit', handlerAddSearch);

function handlerAddSearch(event) {
  event.preventDefault();

  const inputForm = event.currentTarget;
  const searchQuery = inputForm.elements.query.value.trim();

  if (searchQuery === '') {
    list.innerHTML = '';
    return showError('Enter data to search');
  }

  list.innerHTML = '';

  searchImages(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      loader.classList.remove('hidden');
      setTimeout(() => {
        loader.classList.add('hidden');
        const markup = createMarkup(data.hits);
        list.innerHTML = markup;
        lightbox.refresh();
      }, 1500);
    })
    .catch(err => {
      loader.classList.add('hidden');
      showError(err.message);
    });

  inputForm.reset();
}
