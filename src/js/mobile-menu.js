(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    menuLinks: document.querySelectorAll('[data-scroll-to]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.add('is-open');
    toggleBodyScroll(true);

  
    refs.menuLinks.forEach(link =>
      link.addEventListener('click', handleMenuClick)
    );
    refs.modal.addEventListener('click', handleBackdropClick);
    document.addEventListener('keydown', handleEscPress);
  }

  function closeModal() {
    refs.modal.classList.remove('is-open');
    toggleBodyScroll(false);

    
    refs.menuLinks.forEach(link =>
      link.removeEventListener('click', handleMenuClick)
    );
    refs.modal.removeEventListener('click', handleBackdropClick);
    document.removeEventListener('keydown', handleEscPress);
  }

  function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? 'hidden' : '';
  }

  function handleMenuClick(event) {
    event.preventDefault();
    const targetSection = event.currentTarget.dataset.scrollTo;
    closeModal();
    setTimeout(() => {
      document.getElementById(targetSection)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 300);
  }

  function handleBackdropClick(event) {
    if (event.target === refs.modal) {
      closeModal();
    }
  }

  function handleEscPress(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
})();