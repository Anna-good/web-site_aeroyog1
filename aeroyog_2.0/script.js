let formInputs = document.querySelectorAll('.footer_input'),
inputPhone = document.querySelectorAll('.footer_input_phone'),
inputName = document.querySelectorAll('.footer_input_name'),
inputComments = document.querySelector('.footer_input_comments')
sendBtn = document.querySelector("#submit_button"),

openBtn = document.querySelector(".main_page_button"),
openBtnModal = document.querySelectorAll(".abonements_card_button"),
modal = document.querySelector(".modal_overlay"),
closeBtn = document.querySelector(".close_modal_btn"),

menus = document.querySelectorAll('.menu_item'),
menuButton = document.querySelector('#burger_checkbox'),

body = document.body,

menuItems = document.querySelectorAll('.menu_item'),

modalForm = document.querySelector('#modal_form'),
feedbackForm = document.querySelector('#footer_form');


// FORMS_VALIDATION
//------------------------------------------------------------------

// Функция для проверки формы
function validateForm(form) {
    let isValid = true;

    const inputs = form.querySelectorAll('input');

    // Проверяем каждое поле ввода в форме
    inputs.forEach(input => {

        if (input.name === 'phone') {
            if (!validatePhone(input.value)) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        } if (input.name === 'name') {
            if (!validateName(input.value)) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        }
    });

    return isValid; // Возвращаем результат валидации
}


// Обработчик для модального окна
if (modalForm) {
    modalForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Отменяем стандартное поведение отправки формы

        if (validateForm(modalForm)) {
            console.log('Модальная форма успешно отправлена!');

            modalForm.reset(); // Очищаем поля формы
            closeModal();
            openBtn.classList.add("no_visibillity");
            openBtn.disabled = true;
    
            openBtnModal.forEach(button => {
                button.classList.add("no_visibillity_buttons");
                button.disabled = true;
            });
            
        } else {
            console.log('Модальная форма содержит ошибки!');
        }
    });
}

// Обработчик для формы обратной связи
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Отменяем стандартное поведение отправки формы

        if (validateForm(feedbackForm)) {
            console.log('Форма обратной связи успешно отправлена!');
            feedbackForm.reset(); // Очищаем поля формы
        } else {
            console.log('Форма обратной связи содержит ошибки!');
        }
    });
}


// POPUP_WINDOW
// ---------------------------------------------------------

// функция открытия модального окна
function openModal() {
	modal.classList.remove("hide");
    document.body.classList.add('no_scroll');
    clearForm();
}

// Функция для очистки формы
function clearForm() {
    formInputs.forEach(input => {
      input.value = '';
      input.classList.remove('error');
    });
}

function closeModal(e, clickedOutside) {
	if (clickedOutside) {
		if (e.target.classList.contains("modal_overlay"))
			modal.classList.add("hide");
            document.body.classList.remove('no_scroll');
    } else {
        modal.classList.add("hide");
        document.body.classList.remove('no_scroll');
    }
}

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);

// открытие модального окна при нажатии на нужную кнопку
document.addEventListener('DOMContentLoaded', function() {
    openBtnModal.forEach(button => {
        button.addEventListener('click', function() {
            // Код для обработки клика
            console.log('Кнопка нажата:', button);
            openModal();
        });
    });
});

//name
// Функция для валидации имени
function validateName(name) {
    let res = /^([A-ZА-Я][a-zа-я]{1,19})(\s[A-ZА-Я][a-zа-я]{1,19})*$/;
    return res.test(String(name));
}

// phone
// Добавление + в самое начало телефона при фокусе
inputPhone.forEach(inputPhone => {
    inputPhone.addEventListener('focus', () => {
      if (!/^\+\d*$/.test(inputPhone.value)) {
        inputPhone.value = '+7 ';
      }
    });
  
    // Добавление пробелов между цифрами у телефона
    inputPhone.addEventListener("keyup", function() {
      let txt = this.value;
      if (txt.length == 2 || txt.length == 6 || txt.length == 10 || txt.length == 13) {
        this.value = this.value + " ";
      }
    });
});

inputName.forEach(inputName => {
    // Приводим первую букву к заглавной при уходе фокуса
    inputName.addEventListener('blur', function() {
        const words = this.value.split(' '); // Разделяем строку на слова
        for (let i = 0; i < words.length; i++) {
            if (words[i]) { // Проверяем, что слово не пустое
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); // Приводим первую букву к заглавной и остальные к строчным
            }
        }
        this.value = words.join(' '); // Объединяем слова обратно в строку
    });
});

inputComments.addEventListener('blur', function() {
    const words = this.value.split(' '); // Разделяем строку на слова
    for (let i = 0; i < words.length; i++) {
        if (words[0]) { // Проверяем, что слово не пустое
            words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase(); // Приводим первую букву к заглавной и остальные к строчным
        }
    }
    this.value = words.join(' '); // Объединяем слова обратно в строку
});

  
// Функция валидации телефона
function validatePhone(phone) {
    let re = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
    return re.test(String(phone));
}

// BURGER_MENU
// -------------------------------------------------------------

// скрытие бургер меню
for (const menu of menus) {
  menu.addEventListener('click', () => {
    menuButton.checked = !menuButton.checked
  })
}

// бурегр меню не будет скролиться если оно открыто
function toggleMenu() {
    if (menuButton.checked) {
        body.classList.add('no_scroll');
    } else {
        body.classList.remove('no_scroll');
    }
}

// Обработчик события для чекбокса
menuButton.addEventListener('change', toggleMenu);

// Обработчик события для кликов по ссылкам в меню
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuButton.checked = false; // Сбрасываем состояние чекбокса
        toggleMenu(); // Обновляем класс у body
    });
});


// Сделать осталось:
// отверстать в нормальном размере те самые маленькие кнопочки стрелочки.
