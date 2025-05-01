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

