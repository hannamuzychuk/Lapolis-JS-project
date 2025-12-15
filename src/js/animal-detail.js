import { currentAnimals } from './pets-list/pet-list-handlers';
  const modal = document.querySelector('.modal-overlay');
  const infoModal = modal.querySelector('.info-modal');
  const orderModal = modal.querySelector('.order-modal');
  import { form } from './order-model';

export function openOrderModal(infoModal, orderModal) {
  infoModal.classList.add('hidden');
  orderModal.classList.remove('hidden');
  document.body.classList.add('no-scroll');
}

export function setupModal() {
  document.addEventListener('click', e => {
    if (e.target.classList.contains('more-btn')) {
      const animalId = e.target.dataset.id;
      const animal = currentAnimals.find(a => a._id === animalId);
      if (!animal) return;
      form.dataset.animalId = animalId;

      infoModal.innerHTML = `
        <button class="close-btn">&times;</button>
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
      infoModal.classList.remove('hidden');
      orderModal.classList.add('hidden');
      document.body.classList.add('no-scroll');
    }

    if (
      e.target.classList.contains('close-btn') ||
      e.target.classList.contains('modal-overlay')
    ) {
      modal.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }
    if (e.target.closest('.modal-adopt-btn')) {
    openOrderModal(infoModal, orderModal);
  return;
}
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }
  });

  });
}
