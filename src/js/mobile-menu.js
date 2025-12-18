(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    menuLinks: document.querySelectorAll('[data-scroll-to]'), 
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', closeModal);


  refs.menuLinks.forEach(link => {
    link.addEventListener('click', handleMenuClick);
  });

  function toggleModal() {
    const isOpen = refs.modal.classList.toggle('is-open');
    toggleBodyScroll(isOpen);
  }

  function closeModal() {
    refs.modal.classList.remove('is-open');
    toggleBodyScroll(false);
  }
  function toggleBodyScroll(disable) {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  function handleMenuClick(event) {
    event.preventDefault();
    
    const targetSection = event.currentTarget.dataset.scrollTo;
    
    closeModal();
    
    setTimeout(() => {
      scrollToSection(targetSection);
    }, 300);
  }


  refs.modal.addEventListener('click', (event) => {
    if (event.target === refs.modal) {
      closeModal();
    }
  });


  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && refs.modal.classList.contains('is-open')) {
      closeModal();
    }
  });
})();

