import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { baseURL } from './pets-list/pets-list-api';
import { modal } from './animal-detail';

export const form = document.querySelector('.order-form');

const showError = (input, message) => {
  const error = form.querySelector(`[data-error-for="${input.name}"]`);
  if (!error) return;
  error.textContent = message;
  error.style.display = 'block';
  input.classList.add('is-error');
  input.classList.remove('is-valid');
};

const hideError = input => {
  const error = form.querySelector(`[data-error-for="${input.name}"]`);
  if (!error) return;
  error.textContent = '';
  error.style.display = 'none';
  input.classList.remove('is-error');
  input.classList.add('is-valid');
};

const validateName = input => {
  const nameRule = /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/;

  const value = input.value.trim();

  if (value.length < 2) {
    showError(input, 'Імʼя повинно містити мінімум 2 літери');
    return false;
  }

  if (!nameRule.test(value)) {
    showError(input, 'Імʼя може містити тільки букви');
    return false;
  }

  hideError(input);
  return true;
};

const validatePhone = input => {
  const digitsOnly = input.value.replace(/\D/g, '');

  if (digitsOnly.length !== 12) {
    showError(input, 'Номер телефону повинен містити 12 цифр');
    return false;
  }

  hideError(input);
  return true;
};

const validateComment = input => {
  if (input.value.length > 500) {
    showError(input, 'Коментар не може перевищувати 500 символів');
    return false;
  }
  hideError(input);
  return true;
};

form.name.addEventListener('input', () => {
  validateName(form.name);
});

form.phone.addEventListener('input', () => {
  validatePhone(form.phone);
});

form.comment.addEventListener('input', () => {
  validateComment(form.comment);
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  const animalId = e.target.dataset.animalId;
  const { name, phone, comment } = e.target.elements;

  const isValid =
    validateName(name) & validatePhone(phone) & validateComment(comment);

  if (!isValid) return;

  const normalizedPhone = phone.value.replace(/\D/g, '');

  const formData = {
    name: name.value.trim(),
    phone: normalizedPhone,
    animalId,
  };

  if (comment.value.trim()) {
    formData.comment = comment.value.trim();
  }
  try {
    await axios.post(`${baseURL}/orders`, formData);

    Swal.fire({
      title: 'Хороша робота!',
      text: 'Заявка відправлена!',
      icon: 'success',
    });

    form.reset();
    modal.classList.add('hidden');
  } catch (error) {
    Swal.fire({
      title: 'Ой ой',
      text: 'Якась помилка — спробуй ще',
      icon: 'error',
    });
  }
});
