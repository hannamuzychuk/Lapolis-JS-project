import { currentAnimals } from './pets-list/pet-list-handlers';
import { form } from './order-model';
import spriteURL from '../img/icons.svg';

export const modal = document.querySelector('.modal-overlay');
const infoModal = modal.querySelector('.info-modal');
const orderModal = modal.querySelector('.order-modal');

function onEscKeydown(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function openModal() {
  modal.classList.remove('hidden');
  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', onEscKeydown);
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('no-scroll');
  document.removeEventListener('keydown', onEscKeydown);
}

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
        <button class="close-btn"><svg class="close-svg" width="32" height="32">
        <use href="${spriteURL}#icon-close"></use>
      </svg></button>
        <div class="modal-body">
          <div class="modal-left">
            <img class="modal-animal-img" src="${animal.image}" alt="${animal.name}" />
          </div>
          <div class="modal-right">
            <div class="modal-info-head">
              <span class="modal-species">${animal.species}</span>
              <h2 class="modal-name">${animal.name}</h2>
              <div class="modal-info">
                <span class="modal-age">${animal.age}</span>
                <span class="modal-gender">${animal.gender}</span>
              </div>
            </div>
            <p><strong>Опис:</strong> <span class="modal-description">${animal.description}</span></p>
            <p><strong>Здоров'я:</strong> <span class="modal-health">${animal.healthStatus}</span></p>
            <p><strong>Поведінка:</strong> <span class="modal-behavior">${animal.behavior}</span></p>
            <button class="modal-adopt-btn">Взяти додому</button>
          </div>
        </div>`;

      infoModal.classList.remove('hidden');
      orderModal.classList.add('hidden');
      openModal();
      return;
    }

    if (
      e.target.classList.contains('close-btn') ||
      e.target.classList.contains('modal-overlay')
    ) {
      closeModal();
      return;
    }

    if (e.target.closest('.modal-adopt-btn')) {
      openOrderModal(infoModal, orderModal);
    }
  });
}
