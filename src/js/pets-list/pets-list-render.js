import { currentPage, totalPages } from './pet-list-handlers';
import { refs } from './pets-list-refs';

export function renderFilters(categories) {
  const order = [
    '',
    'Собаки',
    'Коти',
    'Кролики',
    'Гризуни',
    'Птахи',
    'Тварини з особливими потребами',
    'Терміново шукають дім',
  ];

  categories.sort((a, b) => {
    const indexA = order.indexOf(a.name);
    const indexB = order.indexOf(b.name);
    return indexA - indexB;
  });

  refs.filtersContainer.innerHTML = `
    <li class="filter-item"><button class="filter-btn active" data-id="">Всі</button></li>
    ${categories
      .map(
        category =>
          `<li class="filter-item"><button class="filter-btn" data-id="${category._id}">${category.name}</button></li>`
      )
      .join('')}
      
  `;
}

export function renderAnimals(animals, append = false) {
  if (!append) refs.animalsContainer.innerHTML = '';

  const markup = animals
    .map(animal => {
      const categoriesMarkup = animal.categories
        .map(
          category => `<li class="animal-card-category">${category.name}</li>`
        )
        .join('');
      return `
    <li class="animal-card">
        <img src="${animal.image}" alt="${animal.name}" class="animal-img" />
        
          <div class="animal-card-content">
          <div class="animal-card-wrapper">
            <div class="animal-card-details">
              <span class="animal-card-species">${animal.species} </span>
              <h3 class="animal-card-name">${animal.name}</h3>
              <ul class="animal-card-categories">
                ${categoriesMarkup}
              </ul>
              <div class="animal-card-info">
                <span>${animal.age}</span>
                <span>${animal.gender}</span>
              </div>
            </div>
            <p class="animal-card-short-description">
              ${animal.shortDescription}
            </p>
        </div>
          <button class="more-btn" data-id="${animal._id}">
            Дізнатись більше
          </button>
        </div>
      </li>
  `;
    })
    .join('');

  refs.animalsContainer.insertAdjacentHTML('beforeend', markup);
}

export function renderPagination() {
  if (totalPages <= 1) {
    refs.paginationList.innerHTML = '';
    return;
  }

  let paginationMarkup = '';

  paginationMarkup += `
    <li>
      <button class="arrow-button"
        data-action="prev"
        ${currentPage === 1 ? 'disabled' : ''}>
        <svg width="19" height="13">
        <use href="/Lapolis-JS-project/assets/icons-D8Flmos2.svg#icon-left"></use>
      </svg>
      </button>
    </li>`;

  if (currentPage === 1) {
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      paginationMarkup += pageBtnMarkup(i);
    }

    if (totalPages > 3) {
      paginationMarkup += `<li class="empty-space">…</li>`;
      paginationMarkup += pageBtnMarkup(totalPages);
    }
  } else {
    paginationMarkup += pageBtnMarkup(1);

    if (currentPage > 3) {
      paginationMarkup += `<li class="empty-space">…</li>`;
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) paginationMarkup += pageBtnMarkup(i);
    }

    if (currentPage < totalPages - 2)
      paginationMarkup += `<li class="empty-space">…</li>`;

    paginationMarkup += pageBtnMarkup(totalPages);
  }

  paginationMarkup += `
    <li>
      <button class="arrow-button"
        data-action="next"
        ${currentPage === totalPages ? 'disabled' : ''}>
        <svg width="19" height="13">
        <use href="/Lapolis-JS-project/assets/icons-D8Flmos2.svg#icon-right"></use>
      </svg>
      </button>
    </li>`;

  refs.paginationList.innerHTML = paginationMarkup;
}

function pageBtnMarkup(page) {
  return `
    <li>
      <button class="page-button ${page === currentPage ? 'active' : ''}"
        data-page="${page}">
        ${page}
      </button>
    </li>`;
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function showLoaderTop() {
  refs.loaderTop.classList.remove('hidden');
}

export function hideLoaderTop() {
  refs.loaderTop.classList.add('hidden');
}
