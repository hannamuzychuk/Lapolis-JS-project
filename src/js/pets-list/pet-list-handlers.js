import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchAnimals } from './pets-list-api';
import { refs } from './pets-list-refs';
import { hideLoader, renderAnimals, showLoader } from './pets-list-render';

export let currentAnimals = [];
export let currentCategory = '';
let currentPage = 1;
let itemsPerPage = 9;

export async function handleFilterClick(e) {
  if (!e.target.classList.contains('filter-btn')) return;

  const btns = refs.filtersContainer.querySelectorAll('.filter-btn');
  btns.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  currentCategory = e.target.dataset.id;

  currentPage = 1;
  try {
    await loadAnimals(false);
  } catch (err) {
    iziToast.error({
      message: `Помилка завантаження тварин ${err}`,
    });
  } finally {
    hideLoader();
  }
}

export async function handleLoadMoreClick() {
  refs.loadMoreBtn.style.display = 'none';
  showLoader();
  try {
    currentPage += 1;
    const hasMore = await loadAnimals(true);

    if (!hasMore) {
      refs.loadMoreBtn.style.display = 'none';
    } else {
      refs.loadMoreBtn.style.display = 'block';
    }
  } catch (err) {
    iziToast.error({
      message: `Помилка завантаження тварин ${err}`,
    });
    refs.loadMoreBtn.style.display = 'block';
  } finally {
    hideLoader();
  }
}

export async function loadAnimals(append = false) {
  try {
    const data = await fetchAnimals(currentCategory, currentPage, itemsPerPage);

    if (!data.animals) {
      return false;
    }

    const animals = data.animals;

    loadAndRenderAnimals(animals, append);

    return animals.length === itemsPerPage;
  } catch (err) {
    iziToast.error({
      message: `Помилка завантаження тварин ${err}`,
    });
  }
}

export function loadAndRenderAnimals(animals, append = false) {
  if (append) {
    currentAnimals = currentAnimals.concat(animals);
  } else {
    currentAnimals = animals;
  }
  renderAnimals(animals, append);
}

export function setItemsPerPage() {
  const width = window.innerWidth;
  if (width >= 1024) itemsPerPage = 9;
  else itemsPerPage = 8;
}
