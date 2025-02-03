
//=================================================

document.addEventListener("DOMContentLoaded", () => {
    const scrollDown = document.getElementById("scroll-down");
    const scrollUp = document.getElementById("scroll-up");
    const mainTitle = document.getElementById("main-title");
    const headerLinks = document.querySelectorAll("nav ul li a");

    // Появление заголовка
    setTimeout(() => {
        mainTitle.style.opacity = "1";
    }, 2000);

    // Появление стрелки вниз
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

    // Плавный скролл к секциям при клике на ссылки в хедере
    headerLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Отображение стрелки вверх при скролле вниз
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollUp.style.opacity = "1";
        } else {
            scrollUp.style.opacity = "0";
        }
    });

    // Скролл вверх при клике на стрелку вверх
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const itemsPerView = 4; // Показываем 4 изображения одновременно
    const itemWidth = items[0].getBoundingClientRect().width; // Ширина одного элемента
    let currentIndex = 0;

    // Функция для обновления позиции карусели
    function updateCarousel() {
        const totalWidth = currentIndex * itemWidth;
        track.style.transform = `translateX(-${totalWidth}px)`;

        // Отключаем стрелки, если достигли границ
        leftArrow.disabled = currentIndex === 0;
        rightArrow.disabled = currentIndex >= items.length - itemsPerView;
    }

    // Обработчики кнопок
    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    rightArrow.addEventListener("click", () => {
        if (currentIndex < items.length - itemsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Инициализация карусели
    updateCarousel();
});










document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service-item");
    let currentIndex = 0;

    function highlightService() {
        services.forEach(service => {
            service.classList.remove("active");
            service.style.opacity = "0.6";
            service.style.filter = "brightness(0.5)";
        });

        services[currentIndex].classList.add("active");
        services[currentIndex].style.opacity = "1";
        services[currentIndex].style.filter = "brightness(1.5)";

        currentIndex = (currentIndex + 1) % services.length;
    }

    setInterval(highlightService, 1500);
    highlightService();
});


















//логика появления изображений в секции ДЕТАИЛИНГ (ранее тех центр)
document.addEventListener("DOMContentLoaded", () => {
    const techImages = document.querySelectorAll(".tech-image");

    function checkScroll() {
        const techSection = document.getElementById("tech-center");
        const sectionTop = techSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            techImages.forEach((image, index) => {
                setTimeout(() => {
                    image.classList.add("visible");
                }, index * 400);
            });
        }
    }

    window.addEventListener("scroll", checkScroll);
});




document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".contact-image");
    let currentIndex = 0;

    // Функция для подсветки активного изображения
    function highlightImage() {
        // Убираем класс active у всех изображений
        images.forEach((img) => img.classList.remove("active"));

        // Добавляем класс active текущему изображению
        images[currentIndex].classList.add("active");

        // Переход к следующему изображению
        currentIndex = (currentIndex + 1) % images.length; // Зацикливаем индекс
    }

    // Запуск подсветки каждые 1500 мс
    setInterval(highlightImage, 1500);

    // Первоначальная подсветка
    highlightImage();
});




document.addEventListener("DOMContentLoaded", () => {
    const scrollDownContacts = document.getElementById("scroll-down-contacts");

    scrollDownContacts.addEventListener("click", () => {
        const footerVideo = document.getElementById("footer-video");
        footerVideo.scrollIntoView({
            behavior: "smooth"
        });
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    let isScrolling = false;

    // 🟢 1️⃣ Плавная прокрутка к секции при клике на кнопку
    links.forEach(link => {
        link.addEventListener("mouseenter", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🟢 2️⃣ Подсветка активной кнопки при прокрутке
    function highlightNavLink() {
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                links.forEach(link => link.classList.remove("active"));
                links[index].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink();

    // 🟢 3️⃣ Прокрутка по колесику мыши к следующей/предыдущей секции
    window.addEventListener("wheel", (event) => {
        if (isScrolling) return; // Предотвращаем многократные срабатывания

        isScrolling = true;
        setTimeout(() => isScrolling = false, 700); // Ограничиваем частоту

        let currentSectionIndex = sections.length - 1;
        sections.forEach((section, index) => {
            if (window.scrollY >= section.offsetTop - header.offsetHeight) {
                currentSectionIndex = index;
            }
        });

        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            // Скроллим вниз
            sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            // Скроллим вверх
            sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth" });
        }
    });

    // 🟢 4️⃣ Прокрутка вверх при нажатии на стрелку
    const scrollUp = document.getElementById("scroll-up");
    scrollUp.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Отображение стрелки вверх при скролле
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollUp.style.opacity = "1";
        } else {
            scrollUp.style.opacity = "0";
        }
    });
});
