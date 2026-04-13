document.querySelectorAll('.project-pictures').forEach((slider) => {
  let currentIndex = 0;

  const track = slider.querySelector('.slider-track');
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');

  function updateSlider() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';

    localStorage.setItem('preferredTheme', isDark);
});


const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
  let currentLang = localStorage.getItem('currentLang');
  currentLang = currentLang === 'EN' ? 'ZH' : 'EN';
  
  console.log(localStorage.getItem('currentLang'));
  switchLanguage(currentLang);

  langToggle.textContent = currentLang === 'EN' ? 'ZH' : 'EN';
});

