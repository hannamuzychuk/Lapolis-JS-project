import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchCategories } from './pets-list-api';
import {
  handleFilterClick,
  handleLoadMoreClick,
  handlePaginationClick,
  loadAnimals,
  setItemsPerPage,
} from './pet-list-handlers';
import { refs } from './pets-list-refs';
import { hideLoader, renderFilters, showLoader } from './pets-list-render';
import { setupModal } from '../animal-detail';

async function init() {
  try {
    setItemsPerPage();

    window.addEventListener('resize', () => {
      setItemsPerPage();
    });

    showLoader();

    const categories = await fetchCategories();
    renderFilters(categories);

    refs.filtersContainer.addEventListener('click', handleFilterClick);
    refs.loadMoreBtn.addEventListener('click', handleLoadMoreClick);

    await loadAnimals();
  } catch (err) {
    iziToast.error({
      message: `Помилка завантаження тварин: ${err}`,
    });
  } finally {
    hideLoader();
  }
}
refs.paginationList.addEventListener('click', handlePaginationClick);

setupModal();
init();
