import axios from 'axios';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Raty from 'raty-js';

// =====================
// Config
// =====================
const API_BASE_URL = 'https://paw-hut.b.goit.study';
const ENDPOINT = 'API/feedbacks';
const MIN_FEEDBACKS = 3;


// SVG paths (Vite-safe)
const STAR_OFF_URL = new URL('../img/success-svg/star-empty.svg', import.meta.url).href;
const STAR_ON_URL = new URL('../img/success-svg/star-full.svg', import.meta.url).href;
const STAR_HALF_URL = new URL('../img/success-svg/star-half.svg', import.meta.url).href;

// Selectors
const SELECTORS = {
  section: '.success-stories',
  swiper: '[data-success-swiper]',
  wrapper: '.success-stories__swiper .swiper-wrapper',
  pagination: '.success-stories__pagination',
  prevBtn: '[data-success-prev]',
  nextBtn: '[data-success-next]',
};

// =====================
// API
// =====================
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

async function fetchFeedbacks() {
  const { data } = await api.get(ENDPOINT);

  // backend returns: { feedbacks: [...], total, page, limit }
  const list = data?.feedbacks ?? [];

  return Array.isArray(list) ? list : [];
  

}


// =====================
// UI helpers (loader / error)
// =====================
function ensureLoader(sectionEl) {
  let loader = sectionEl.querySelector('.success-stories__loader');

  if (!loader) {
    loader = document.createElement('div');
    loader.className = 'success-stories__loader is-hidden';
    loader.setAttribute('aria-hidden', 'true');
    loader.textContent = 'Loading...';
    sectionEl.prepend(loader);
  }

  return loader;
}

function setLoading(sectionEl, isLoading) {
  const loader = ensureLoader(sectionEl);
  loader.classList.toggle('is-hidden', !isLoading);

  const prev = sectionEl.querySelector(SELECTORS.prevBtn);
  const next = sectionEl.querySelector(SELECTORS.nextBtn);
  if (prev) prev.disabled = isLoading;
  if (next) next.disabled = isLoading;
}

function showError(sectionEl, message) {
  let err = sectionEl.querySelector('.success-stories__error');

  if (!err) {
    err = document.createElement('p');
    err.className = 'success-stories__error';
    sectionEl.append(err);
  }

  err.textContent = message;
}

// =====================
// Markup
// =====================
function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function normalizeRating(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return 0;

  const clamped = Math.max(0, Math.min(5, num));
  return Math.round(clamped * 2) / 2; // шаг 0.5
}

function createSlideMarkup(item) {
  const name = escapeHtml(item?.author ?? 'Імʼя користувача');
  const message = escapeHtml(item?.description ?? '');
  const rating = normalizeRating(item?.rate ?? 0);

  return `
    <div class="swiper-slide">
      <article class="story-card">
        <div class="story-card__rating" data-rating="${rating}" aria-label="Рейтинг: ${rating} з 5">
          <div class="rating-js"></div>
        </div>

        <p class="story-card__text">${message}</p>
        <p class="story-card__author">${name}</p>
      </article>
    </div>
  `;
}


function renderSlides(wrapperEl, feedbacks) {
  wrapperEl.innerHTML = feedbacks.map(createSlideMarkup).join('');
}

// =====================
// Rating (raty-js)
// =====================
function initRatings(rootEl) {
  rootEl.querySelectorAll('.story-card__rating').forEach((ratingEl) => {
    const score = normalizeRating(ratingEl.dataset.rating);
    const container = ratingEl.querySelector('.rating-js');
    if (!container) return;

    container.innerHTML = '';

    const instance = new Raty(container, {
      score,
      number: 5,
      readOnly: true,
      half: true,
      starOff: STAR_OFF_URL,
      starOn: STAR_ON_URL,
      starHalf: STAR_HALF_URL,
    });

    instance.init(); 
  });
}



// =====================
// Swiper
// =====================
function initSwiper(sectionEl) {
  const swiperEl = sectionEl.querySelector(SELECTORS.swiper);
  if (!swiperEl) return null;

  return new Swiper(swiperEl, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 500,

    navigation: {
      nextEl: sectionEl.querySelector(SELECTORS.nextBtn),
      prevEl: sectionEl.querySelector(SELECTORS.prevBtn),
      disabledClass: 'is-disabled',
    },

    pagination: {
      el: sectionEl.querySelector(SELECTORS.pagination),
      clickable: true,
      dynamicBullets: false,
    },

    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 24 },
      1440: { slidesPerView: 2, spaceBetween: 32 },
    },
  });
}

// =====================
// Boot
// =====================
async function initSuccessStories() {
  const sectionEl = document.querySelector(SELECTORS.section);
  if (!sectionEl) return;

  const wrapperEl = sectionEl.querySelector(SELECTORS.wrapper);
  if (!wrapperEl) return;

  setLoading(sectionEl, true);

  try {
    const feedbacks = await fetchFeedbacks();

    const MAX_SLIDES = 5;
    const limitedFeedbacks = feedbacks.slice(0, MAX_SLIDES);

    
    if (limitedFeedbacks.length < MIN_FEEDBACKS) {
      showError(sectionEl, 'Недостатньо відгуків для відображення секції.');
      return;
    }


    renderSlides(wrapperEl, limitedFeedbacks);

    const swiper = initSwiper(sectionEl);
    if (!swiper) return;

    initRatings(sectionEl);

  } catch (err) {
    console.error('Success stories error:', err);
    showError(sectionEl, 'Не вдалося завантажити відгуки. Спробуйте пізніше.');
  } finally {
    setLoading(sectionEl, false);
  }
}

initSuccessStories();
