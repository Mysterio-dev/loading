// Получаем элементы DOM
const processBar = document.querySelector('.process-bar');
const preloadIndicator = document.querySelector('.preload-indicator');
const logoSvg = document.querySelector('.logo-svg');
const processWrap = document.querySelector('.process-wrap');
const preloadBars = document.querySelectorAll('.preload-bar');
const backgroundLines = document.querySelectorAll('.background-line');

// Функция для обновления загрузочного бара и индикатора
function updateLoadingProgress(progress) {
  // Обновляем ширину процессбара
  processBar.style.width = `${progress}%`;

  // Обновляем текст индикатора
  preloadIndicator.textContent = `${Math.round(progress)}%`;
}

// Функция для имитации загрузки
function simulateLoading() {
  let progress = 0;

  // Обновляем загрузочный бар и индикатор каждые 20 мс
  const interval = setInterval(() => {
    progress += 1; // Увеличиваем на 1% за один шаг
    updateLoadingProgress(progress);

    // Когда загрузка достигнет 100%, останавливаем интервал
    if (progress >= 100) {
      clearInterval(interval);

      // Добавляем стиль и анимацию к логотипу после завершения загрузки
      logoSvg.style.transform = 'translate(0px, -10rem)';

      // Добавляем стиль к элементу process-wrap после завершения загрузки
      processWrap.style.transform = 'translate(0px, -10rem)';

      // Запускаем анимацию уменьшения высоты .preload-bar элементов
      preloadBars.forEach((bar, index) => {
        bar.style.animation = `shrink-bar ${0.9}s ease-in-out ${index * 0.2}s forwards`;
      });

      // Запускаем анимацию изменения цвета .background-line элементов
      backgroundLines.forEach((line, index) => {
        line.style.animation = `change-color ${0.9}s ease-in-out ${index * 0.2}s forwards`;
      });
    }
  }, 20);
}

// Запускаем имитацию загрузки
simulateLoading();
