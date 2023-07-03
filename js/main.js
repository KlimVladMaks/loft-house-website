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

//* Маска для телефонных номеров 

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

// * Подключение Яндекс Карты

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){

    // Создание карты.
    var map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543, 30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    // Создаём кастомную метку-указатель с информационной плашкой
    var placemark = new ymaps.Placemark(
        [59.943543, 30.338928], 
        {
            balloonContent: 
            `
            <div class="balloon">
                <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
                <div class="balloon__contacts">
                    <a href="tel:+78121234567">+8 (812) 123-45-67</a>
                </div>
            </div>
			`
        }, 
        {
        iconLayout: 'default#image',
        iconImageHref: './img/map/location-pin.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    });

    // Удаляем у карты лишние элементы
    map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    // Размещаем созданную метку-указатель на карте
    map.geoObjects.add(placemark);

    // По-умолчанию открываем информационную плашку
    placemark.balloon.open();
}
