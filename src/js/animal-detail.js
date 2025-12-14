import { currentAnimals } from './pets-list/pet-list-handlers';

export function setupModal() {
  const modal = document.querySelector('.modal');
  const modalContent = modal.querySelector('.modal-content');

  document.addEventListener('click', e => {
    if (e.target.classList.contains('more-btn')) {
      const animalId = e.target.dataset.id;
      const animal = currentAnimals.find(a => a._id === animalId);
      if (!animal) return;

      modalContent.innerHTML = `
        <span class="close-btn">&times;</span>
        <div class="modal-body">
      <div class="modal-left">
        <img class="modal-animal-img" src="${animal.image}" alt="${animal.name}"  />
      </div>
      <div class="modal-right">
        <span class="modal-species">${animal.species}</span>
        <h2 class="modal-name">${animal.name}</h2>
        <div class="modal-info">
          <span class="modal-age">${animal.age}</span>
          <span class="modal-gender">${animal.gender}</span>
        </div>
        <p><strong>Опис:</strong> <span class="modal-description">${animal.description}</span></p>
        <p><strong>Здоров'я:</strong> <span class="modal-health">${animal.healthStatus}</span></p>
        <p><strong>Поведінка:</strong> <span class="modal-behavior">${animal.behavior}</span></p>
        <button class="modal-adopt-btn">Взяти додому</button>
      </div>
    </div>`;

      modal.classList.remove('hidden');
    }

    if (
      e.target.classList.contains('close-btn') ||
      e.target.classList.contains('modal')
    ) {
      modal.classList.add('hidden');
    }
  });
}
