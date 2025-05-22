// Фоновый слайдер при скролле

const bgImages = document.querySelectorAll('#background-container .bg-image');
let currentIndex = 0;

// Определим высоту экрана для расчёта переключения фонов
const windowHeight = window.innerHeight;

function updateBackgroundOnScroll() {
  const scrollY = window.scrollY;
  // Делим прокрутку на высоту окна, чтобы понять, какой фон активен
  const index = Math.floor(scrollY / windowHeight);
  if (index !== currentIndex && index < bgImages.length) {
    bgImages[currentIndex].classList.remove('active');
    bgImages[index].classList.add('active');
    currentIndex = index;
  }
}

// Запуск при прокрутке
window.addEventListener('scroll', updateBackgroundOnScroll);

// Инициализация — показываем первый фон
bgImages[0].classList.add('active');

// Переключение вкладок фотостудии

const tabs = document.querySelectorAll('.studio-tabs button');
const contents = document.querySelectorAll('.studio-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(content => {
      content.id === target
        ? content.classList.add('active')
        : content.classList.remove('active');
    });
  });
});

// Telegram popup (закрыть)

function closePopup() {
  document.getElementById('telegram-popup').style.display = 'none';
}
