document.addEventListener("DOMContentLoaded", () => {
    // Элементы для основных анимаций и скролла
    const scrollDown = document.getElementById("scroll-down");
    const scrollUp = document.getElementById("scroll-up");
    const mainTitle = document.getElementById("main-title");
    const headerLinks = document.querySelectorAll("#mobile-header nav ul li a");
  
    // Плавное появление заголовка и стрелки вниз
    setTimeout(() => {
      mainTitle.style.opacity = "1";
    }, 2000);
  
    setTimeout(() => {
      scrollDown.style.opacity = "1";
    }, 4000);
  
    // Скролл вниз при клике на стрелку
    scrollDown.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    });
  
    // Плавный скролл к секциям по клику в навигации
    headerLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Отображение стрелки вверх при скролле
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollUp.style.opacity = "1";
      } else {
        scrollUp.style.opacity = "0";
      }
    });
  
    // Скролл вверх по клику на стрелку вверх
    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    // Вертикальная карусель для секции "Тюнинг"
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const upArrow = document.querySelector(".up-arrow");
    const downArrow = document.querySelector(".down-arrow");
  
    // Для мобильной версии показываем, например, 3 элемента одновременно
    const itemsPerView = 3;
    const itemHeight = items[0].getBoundingClientRect().height;
    let currentIndex = 0;
  
    function updateCarousel() {
      const totalHeight = currentIndex * itemHeight;
      track.style.transform = `translateY(-${totalHeight}px)`;
      upArrow.disabled = currentIndex === 0;
      downArrow.disabled = currentIndex >= items.length - itemsPerView;
    }
  
    upArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    downArrow.addEventListener("click", () => {
      if (currentIndex < items.length - itemsPerView) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    updateCarousel();
  
    // Подсветка элементов в секции "Техцентр" (услуги)
    const services = document.querySelectorAll(".service-item");
    let serviceIndex = 0;
    function highlightService() {
      services.forEach(service => {
        service.classList.remove("active");
        service.style.opacity = "0.6";
      });
      services[serviceIndex].classList.add("active");
      services[serviceIndex].style.opacity = "1";
      serviceIndex = (serviceIndex + 1) % services.length;
    }
    setInterval(highlightService, 1500);
    highlightService();
  
    // Плавное появление изображений в секции "Детейлинг" при скролле
    const techImages = document.querySelectorAll(".tech-image");
    function checkTechScroll() {
      const techSection = document.getElementById("tech-center");
      const sectionTop = techSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.8) {
        techImages.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add("visible");
          }, index * 400);
        });
      }
    }
    window.addEventListener("scroll", checkTechScroll);
  
    // Скролл к футер-видео из секции "Контакты"
    const scrollDownContacts = document.getElementById("scroll-down-contacts");
    scrollDownContacts.addEventListener("click", () => {
      const footerVideo = document.getElementById("footer-video");
      footerVideo.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  