import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchAnimals } from './pets-list-api';
import { refs } from './pets-list-refs';
import {
  hideLoader,
  renderAnimals,
  renderPagination,
  showLoader,
} from './pets-list-render';

export let currentAnimals = [];
export let currentCategory = '';
export let currentPage = 1;
let itemsPerPage = 9;
let totalItems = 0;
export let totalPages = 1;

export async function handleFilterClick(e) {
  if (!e.target.classList.contains('filter-btn')) return;

  const btns = refs.filtersContainer.querySelectorAll('.filter-btn');
  btns.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  currentCategory = e.target.dataset.id;

  currentPage = 1;
  refs.loadMoreBtn.style.display = 'block';

  if (!isDesktop()) {
    refs.loadMoreBtn.style.display = 'block';
  } else {
    refs.loadMoreBtn.style.display = 'none';
  }

  showLoader();
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
  if (isDesktop()) return;
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

export async function handlePaginationClick(e) {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.dataset.page) {
    currentPage = Number(btn.dataset.page);
  }

  if (btn.dataset.action === 'prev' && currentPage > 1) {
    currentPage -= 1;
  }

  if (btn.dataset.action === 'next' && currentPage < totalPages) {
    currentPage += 1;
  }

  scrollToAnimalsTop();

  showLoader();
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

export async function loadAnimals(append = false) {
  try {
    const delay = new Promise(res => setTimeout(res, 1000));

    const [data] = await Promise.all([
      fetchAnimals(currentCategory, currentPage, itemsPerPage),
      delay,
    ]);

    if (!data.animals) {
      return false;
    }

    totalItems = data.totalItems;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    const animals = data.animals;

    loadAndRenderAnimals(animals, append);

    if (isDesktop()) {
      renderPagination({
        currentPage,
        totalPages,
      });

      return false;
    }

    return currentPage < totalPages;
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
  if (width >= 1440) {
    itemsPerPage = 9;
    refs.loadMoreBtn.classList.add('hidden');
    refs.paginationList.classList.remove('hidden');
  } else {
    itemsPerPage = 8;
    refs.loadMoreBtn.classList.remove('hidden');
    refs.paginationList.classList.add('hidden');
  }
}

function isDesktop() {
  return window.innerWidth >= 1440;
}

function scrollToAnimalsTop() {
  const duration = 1000;
  const offset = 110;

  const target =
    refs.animalsContainer.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  const start = window.pageYOffset;
  const distance = target - start;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo({
      top: start + distance * progress,
    });

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}
