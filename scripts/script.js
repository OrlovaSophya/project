'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

// * 1. Начало.
    // * 2. Получаем все карточки. Получаем все элементы (полная новость).
    // * 3. Проверка массива карточек (пустой или нет).
    // *    3.1.  Да: продолжаем.
    // *    3.2. Нет: продолжаем.
    // * 4. Нажали на кнопку "Читать дальше".
    // *    4.1. Да: открываем полную карточку новости.
    // *    4.2. Нет: продолжаем.
    // * 5. Нажали на кнопку "закрыть"(крестик).
    // *    5.1. Да: новость закрыта.
    // *    5.2. Нет: продолжаем.
    // * 6. Конец.

const intensiveImg = document.querySelector(".news__link");
intensiveImg.addEventListener('mouseenter', () => {
    console.log('Мышка наведена на изображение, показываем текст');
});

});

// Модальное окно
    const news__link = document.querySelectorAll(".news__link");
    // news__link.addEventListener('click', () => {
    //     console.log ("Нажали на кнопку Читать дальше");
    // })
    news__link.forEach((item, index) => {

        item.addEventListener('click', () => {
            const dataid = item.dataset.id;
            const modalApplication = document.querySelector(".applications[data-id='" + dataid + "']")
            modalApplication.removeAttribute("hidden")
        
// Закрытие модального окна
            window.addEventListener("click", (event) => {
                if (event.target === modalApplication) {
                    modalApplication.setAttribute("hidden", true)
                }
            });

            const closeModalButton = modalApplication.querySelector(".application__close");
            closeModalButton.addEventListener("click", () => {
                modalApplication.setAttribute("hidden", true);
            });
        });
    });


// Создание слайдера
let currentIndex = 0; 
const slider = document.querySelectorAll(".news__card");
const prevButton = document.querySelector(".news__left");
const nextButton = document.querySelector(".news__right");
const visibleCards = 3;
updateSlider();

if (prevButton){
prevButton.addEventListener("click", () =>{
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slider.length - visibleCards;
    }
    updateSlider();
});
}
if (nextButton){
nextButton.addEventListener("click", () =>{
    if (currentIndex < slider.length - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});
}
function updateSlider() {
    slider.forEach((item, index)=>{
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

// Массивы
const newsContainer = document.querySelector (".news");
if (newsContainer) {
    const dataTitleNews= [
        "Хамам",
        "Сауна",
        "Солевая комната",
        "Русская травяная баня",
        "Бассейн",
        "Купель",
    ];
    const titleNews = newsContainer.querySelectorAll(".news__subtitle");
    titleNews.forEach((item, index) => {
        item.textContent = dataTitleNews[index];
    });
}

//Динамический вывод навигационного меню
const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
    const headerList = headerMenu.querySelector('.header__list');
    const menuData = {
        link1: {
            link:'index.html',
            title: 'Главная',
        },
        link2: {
            link:'catalog.html',
            title: 'Каталог',
        },
        link3: {
            link:'records.html',
            title: 'Записи',
        },
        link4: {
            link:'personal account.html',
            title: 'Личный кабинет',
        },
    }
    const createLink = (UrlLink, title) =>{
        const link = `<li class="header__item"><a class="header__link" href="${UrlLink}">${title}</a></li>`;
        return link;
    }
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.link, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);
    }
}

const cardsImages = document.querySelector(".images");
    if (cardsImages) {
        const cardListImages = cardsImages.querySelector(".images__list");

        // Пример URL для получения данных с сервера
        const apiUrl = "images.json";

        // Функция для создания карточки
        const createCard = (imageUrl, imageAlt, imageWidth) => {
            // Шаблонные строки и подстановки
            const image = `
            <li class="images__item">
                <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
            </li>
        `;

            return image;
        };

     // Загрузка данных с сервера
     fetch(apiUrl)
     .then((response) => response.json())
     .then((images) => {
         console.log(images); // Данные
         console.log(typeof images); // Тип полученных данных

         images.forEach((item) => {
             const cardElement = createCard(
                 item.imageUrl,
                 item.imageAlt,
                 item.imageWidth
             );
             cardListImages.insertAdjacentHTML("beforeend", cardElement);
         });
         const pictures = document.querySelectorAll(".images__picture");
if (pictures) {
    // Перебираем каждое изображение
    pictures.forEach((picture) => {
        picture.addEventListener("click", () => {
            // Получаем родительский элемент (li)
            const parentItem = picture.parentElement;

            // Получаем все изображения в родительском элементе
            const parentPictures =
                parentItem.querySelectorAll(".images__picture");

            // Переключаем видимость изображений
            parentPictures.forEach((parentPictures) => {
                if (parentPictures !== picture) {
                    parentPictures.style.display = "block"; // Показываем другое изображение
                } else {
                    parentPictures.style.display = "none"; // Скрываем текущее изображение
                }
            });
        });
    });
}

});

    // предзагрузчик
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        // Показываем контент
        content.style.display = "block";

        // Удаляем элемент из DOM
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}

//Карусель
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
  



