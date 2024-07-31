
let form = document.querySelector('#footer_form'),
formInputs = document.querySelectorAll('.footer_input'),
inputPhone = document.querySelector('.footer_input_phone'),
inputName = document.querySelector('.footer_input_name');

// phone

// добавление + в самое начало у телефона при фокусе
// Проверяем фокус
inputPhone.addEventListener('focus', () => {
  // Если там ничего нет или есть, но левое
  if(!/^\+\d*$/.test(inputPhone.value))
  // То вставляем знак плюса как значение
  inputPhone.value = '+7 ';
});

inputPhone.addEventListener("keyup", function() {
  // добавление пробелов между цифрами у телефона
  let txt=this.value;
  if (txt.length==2 || txt.length==6 || txt.length==10 || txt.length==13) {
    this.value=this.value+" ";
  }
});

function validatePhone(phone) {
  let re = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
  return re.test(String(phone));
}


// name

function validateName(name){
  let res = /^[A-ZА-Я][a-zа-я]{1,19}$/;
  return res.test(String(name));
}

form.onsubmit = function () {
    let phoneVal = inputPhone.value,
        nameVal = inputName.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }
    if (!validateName(nameVal)) {
        console.log('name not valid');
        inputName.classList.add('error');
        return false;
    } else {
        inputName.classList.remove('error');
    }

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }

    if (phoneVal.length !== 16) {
        console.log('phone size valid');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }
}

// скрытие бургер меню


const menus = document.querySelectorAll('.menu-item');
const menuButton = document.querySelector('#burger-checkbox')

for (const menu of menus) {
  menu.addEventListener('click', () => {
    menuButton.checked = !menuButton.checked
  })
}

// бурегр меню не будет скролиться если оно открыто



// Получаем элементы
const body = document.body;

// Функция для открытия и закрытия меню
function toggleMenu() {
    if (menuButton.checked) {
        body.classList.add('menu-opened');
    } else {
        body.classList.remove('menu-opened');
    }
}

// Обработчик события для чекбокса
menuButton.addEventListener('change', toggleMenu);

// Обработчик события для кликов по ссылкам в меню
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuButton.checked = false; // Сбрасываем состояние чекбокса
        toggleMenu(); // Обновляем класс у body
    });
});


// popup window

const openBtn = document.querySelector(".main-page-button");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
	modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
	if (clickedOutside) {
		if (e.target.classList.contains("modal-overlay"))
			modal.classList.add("hide");
	} else modal.classList.add("hide");
}

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);






// const popupLinks = document.querySelectorAll('.popup-link');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 500;

// if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener("click", function(e) {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }

// function popupOpen(curentPopup) {
//     if (curentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener("click", function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }

// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove('open');
//         if (doUnlock) {
//             bodyUnlock();
//         }
//     }
// }

// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    
//     if (lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = lockPaddingValue;
//         }
//     }

//     for (let index = 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.getElementsByClassName.paddingRight = lockPaddingValue;
//     }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;

//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnlock() {
//     setTimeout(function () {
//         if (lockPadding.length > 0) {
//             for (let index = 0; index < lockPadding.length; index++) {
//                 const el = lockPadding[index];
//                 el.style.paddingRight = '0px';
//             }
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// document.addEventListener('keydown', function (e) {
//     if (e.which === 27) {
//         const popupActive = document.querySelector('.popup.open');
//         popupClose(popupActive);
//     }
// })

// // polifiles for popup window

// (function () {
//     // проверяем поддержку
//     if (!Element.prototype.closest) {
//         // реализуем
//         Element.prototype.closest = function(css) {
//             var node = this;
//             while (node) {
//                 if (node.matches(css)) return node;
//                 else npde = node.parentElement;
//             }
//             return null;
//         };
//     }
// })();
// (function () {
//     // проверяем поддержку
//     if (!Element.prototype.matches) {
//         // определяем свойство
//         Element.prototype.matches = Element.prototype.matchesSelector ||
//             Element.prototype.webkitMatchesSelector ||
//             Element.prototype.mozMatchesSelector ||
//             Element.prototype.msMatchesSelector;
//     }
// })();
