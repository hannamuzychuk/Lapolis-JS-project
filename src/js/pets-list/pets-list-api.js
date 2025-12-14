import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const baseURL = 'https://paw-hut.b.goit.study/api';

export async function fetchCategories() {
  try {
    const res = await axios.get(`${baseURL}/categories`);
    return res.data;
  } catch (err) {
    iziToast.error({
      message: `Помилка при отриманні категорій  з сервера:' ${err}`,
    });
    throw err;
  }
}

export async function fetchAnimals(categoryId = null, page = 1, limit = 9) {
  try {
    const params = { page, limit };
    if (categoryId) params.categoryId = categoryId;
    const res = await axios.get(`${baseURL}/animals`, { params });
    return res.data;
  } catch (err) {
    iziToast.error({
      message: `Помилка при отриманні тварин з сервера: ${err}`,
    });
    throw err;
  }
}
