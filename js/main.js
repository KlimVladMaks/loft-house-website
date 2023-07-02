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

//* Макса для телефонных номеров 

// Применяем маску для форм ввода номера телефона
mask('[data-tel-input]');

// Получаем формы ввода номера телефона
const phoneInputs = document.querySelectorAll('[data-tel-input]');

// Перебираем все формы ввода номера телефона
phoneInputs.forEach((input) => {

    // Добавляем слушателя, срабатывающего при вводе чего-то в форму
    input.addEventListener('input', () => {
        
        // Если в форме содержится только плюс, то очищаем форму
        if (input.value === '+') input.value = '';
    })

    // Добавляем слушателя, срабатывающего при снятии выделения с формы
    input.addEventListener('blur', () => {
        
        // Если в форме содержится только плюс, то очищаем форму
        if (input.value === '+') input.value = '';
    })
});
