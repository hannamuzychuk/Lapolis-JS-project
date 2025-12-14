Хатинка Лапок — адаптивний вебзастосунок для пошуку та адопції тварин. Проєкт
створений з метою допомогти безпритульним хвостикам знайти нову родину ❤️

🔗 Зміст Про проєкт Функціонал Адаптивність Оптимізація Технології Запуск
проєкту Структура проєкту API Авторські права

📌 Про проєкт Хатинка Лапок — це односторінковий застосунок, який: відображає
список тварин з бази даних; дозволяє фільтрувати їх за категоріями; надає
детальну інформацію про кожну тварину; дає можливість залишити заявку на
знайомство.

✨ Функціонал 🔝 Header логотип з поверненням на головну сторінку; навігація по
секціях (якірні посилання); кнопка «Взяти друга»; бургер-меню для mobile /
tablet; плавний scroll; закриття меню по Esc, кліку поза меню або переходу по
якорю.

🌟 Hero Section головний заголовок проєкту; опис місії; кнопка «Подивитись
історії»; фонове зображення.

🐶 Наші хвостики фільтри категорій (API /api/categories); активна категорія
«Всі» за замовчуванням; завантаження тварин з API /api/animals; кількість
карток: Desktop — 9 Tablet / Mobile — 8; кнопка «Завантажити ще»; модальне вікно
з деталями тварини.

ℹ️ Чому Хатинка Лапок слайдер з контентом; реалізація за допомогою Swiper.js;
підтримка стрілок, пагінації та свайпу.

❓ FAQ акордеон з питаннями та відповідями; одночасно відкрита лише одна
відповідь; анімація та зміна іконок.

💬 Щасливі історії свайпер з відгуками (API /feedbacks); рейтинг у вигляді
зірочок; навігація кнопками та свайпом; динамічна пагінація.

🪟 Модальні вікна Деталі тваринки Форма заявки блокування скролу фону; закриття
по Esc, кліку поза модалкою або кнопці ✕

📱 Адаптивність Пристрій Ширина Mobile 320px → гумова, адаптив з 375px Tablet
від 768px Desktop від 1440px

⚙️ Оптимізація підтримка Retina зображень; відсутні зайві логи в консолі; лоадер
під час кожного запиту; обробка помилок бекенду; коректні cursor-стилі для UI.

🛠️ Технології HTML5 CSS3 JavaScript (ES6+) Swiper.js SweetAlert2 / BasicLightbox
Accordion Library Star Rating Library

▶️ Запуск проєкту git clone https://github.com/username/hatynka-lapok.git cd
hatynka-lapok Запусти index.html або використай Live Server

📂 Структура проєкту hatynka-lapok/ │ ├── index.html ├── css/ │ └── styles.css
├── js/ │ ├── api.js │ ├── header.js │ ├── pets.js │ ├── modals.js │ └──
sliders.js ├── assets/ │ ├── images/ │ └── icons/ └── README.md

🔌 API GET /api/categories — категорії тварин GET /api/animals — список тварин
GET /feedbacks — відгуки POST /orders — заявка на знайомство

© Авторські права © 2025 Хатинка Лапок Всі права захищені 🐾

atynka Lapok is a responsive web application designed to help homeless animals
find a new home. The project allows users to browse pets, filter them by
categories, read success stories, and submit adoption requests ❤️

🔗 Table of Contents About the Project Features Responsive Design Optimization
Technologies Getting Started Project Structure API License

📌 About the Project Hatynka Lapok is a single-page application that: displays a
list of animals from a database; allows filtering by categories; shows detailed
information about each animal; enables users to submit adoption requests.

✨ Features 🔝 Header project logo with navigation to the home section;
anchor-based navigation between sections; "Adopt a Friend" button; burger menu
for mobile and tablet devices; smooth scrolling; menu closes on Esc, outside
click, or anchor navigation.

🌟 Hero Section main project headline; short description of the mission; "View
Stories" anchor button; background image.

🐶 Our Pets category filters (API /api/categories); "All" category active by
default; pets loaded from API /api/animals; number of cards: Desktop — 9 Tablet
/ Mobile — 8; "Load more" button; pet details modal window.

ℹ️ Why Hatynka Lapok content slider built with Swiper.js; navigation via arrows,
pagination, and swipe gestures; disabled navigation buttons on first/last slide.

❓ FAQ accordion-based questions and answers; toggle on click; only one answer
open at a time.

💬 Success Stories reviews slider powered by Swiper.js; data loaded from API
/feedbacks; star-based rating display; swipe and button navigation; dynamic
pagination.

🪟 Modal Windows Pet Details Modal Adoption Request Modal background scroll
locking; close via Esc, overlay click, or close button.

📱 Responsive Design Device Width Mobile 320px → fluid, adaptive from 375px
Tablet from 768px Desktop from 1440px

⚙️ Optimization Retina-ready images; no unnecessary console logs; loader during
all backend requests; backend error handling with user notifications; correct
cursor styles for all interactive elements.

🛠️ Technologies HTML5 CSS3 JavaScript (ES6+) Swiper.js SweetAlert2 /
BasicLightbox Accordion Library Star Rating Library

▶️ Getting Started git clone https://github.com/username/hatynka-lapok.git cd
hatynka-lapok Open index.html in your browser or run using Live Server

📂 Project Structure hatynka-lapok/ │ ├── index.html ├── css/ │ └── styles.css
├── js/ │ ├── api.js │ ├── header.js │ ├── pets.js │ ├── modals.js │ └──
sliders.js ├── assets/ │ ├── images/ │ └── icons/ └── README.md

🔌 API GET /api/categories — pet categories GET /api/animals — animals list GET
/feedbacks — user reviews POST /orders — adoption request

© License © 2025 Hatynka Lapok All rights reserved 🐾
