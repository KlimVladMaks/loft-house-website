//* Раскрытие списка меню в мобильном формате

// Получаем кнопку открытия меню
const navBtn = document.querySelector('.nav-icon-btn');

// Получаем иконку кнопки открытия меню
const navIcon = document.querySelector('.nav-icon');

// Получаем блок с элементами меню
const nav = document.querySelector('.header__top-row');

// При клике на кнопку открытия меню выполняем функцию
navBtn.onclick = function() {

    // Добавляем или убираем у иконки кнопки активный класс
    navIcon.classList.toggle('nav-icon--active');

    // Добавляем или убираем у блока с элементами меню класс открытия на мобильном устройстве 
    nav.classList.toggle('header__top-row--mobile');

    // Включаем или отключаем возможность скролла для сайта
    document.body.classList.toggle('no-scroll');
}
