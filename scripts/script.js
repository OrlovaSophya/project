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


