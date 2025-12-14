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
    <button class="filter-btn active" data-id="">Всі</button>
    ${categories
      .map(
        category =>
          `<button class="filter-btn" data-id="${category._id}">${category.name}</button>`
      )
      .join('')}
      
  `;

  refs.filterBtns = document.querySelectorAll('.filter-btn');
}

export function renderAnimals(animals, append = false) {
  if (!append) refs.animalsContainer.innerHTML = '';

  const markup = animals
    .map(animal => {
      const categoriesMarkup = animal.categories
        .map(pet => `<li class="animal-card-category">${pet.name}</li>`)
        .join('');
      return `
    <li class="animal-card">
      <img src="${animal.image}" alt="${animal.name}" class="animal-img" />
      <div class="animal-card-content">
      <span class="animal-card-species">${animal.species} </span>
      <h3 class="animal-card-name">${animal.name}</h3>
      <ul class="animal-card-categories">${categoriesMarkup}</ul>
      <div class="animal-card-info">
      <span>${animal.age}</span>
      <span>${animal.gender}</span>
    </div>
      <p class="animal-card-short-description">${animal.shortDescription}</p>
      <button class="more-btn" data-id="${animal._id}">Дізнатись більше</button>
      </div>
    </li>
  `;
    })
    .join('');

  refs.animalsContainer.insertAdjacentHTML('beforeend', markup);
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}
export function hideLoader() {
  refs.loader.classList.add('hidden');
}
