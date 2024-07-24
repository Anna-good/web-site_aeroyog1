
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