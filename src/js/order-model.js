import { setupModal } from "./animal-detail";

export function openOrderModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  const infoModal = modalOverlay.querySelector('.info-modal');
  const orderModal = modalOverlay.querySelector('.order-modal');
  

  modalOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('close-btn') ||
      e.target.classList.contains('modal-overlay')) {
        orderModal.classList.add('hidden');
        infoModal.classList.add('hidden');
        modalOverlay.classList.add('hidden');
      };

    

    infoModal.classList.add('hidden');
    orderModal.classList.remove('hidden');
  });
}