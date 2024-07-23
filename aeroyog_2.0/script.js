
// все, что связанно с телефоном

let inp = document.querySelector('#phone'); // добавление + в самое начало у телефона при фокусе

// Проверяем фокус
inp.addEventListener('focus', () => {
  // Если там ничего нет или есть, но левое
  if(!/^\+\d*$/.test(inp.value))
    // То вставляем знак плюса как значение
    inp.value = '+7 ';
});

document.getElementById('phone').addEventListener("keyup", function(){  // добавление пробелов между цифрами у телефона
  let txt=this.value;
  if (txt.length==2 || txt.length==6 || txt.length==10 || txt.length==13) {
    this.value=this.value+" ";
  }
});


// все что связано с именем

document.getElementById("name").addEventListener("input", function(event) {
  event.preventDefault()
  let nameInput = this.value;

  if (!/^[A-ZА-Я][a-zа-я]{1,19}$/.test(nameInput)) {
      this.setCustomValidity("Имя должно начинаться с заглавной буквы и содержать от 2 до 20 символов");
  } else {
      this.setCustomValidity("");
  }
});


// Общее - создание элементов ошибки


function validationMisstakes(form) {
    function removeError(input) {
      const parent = input.parentNode;

      if (parent.classList.contains('error')) {
        parent.querySelector('.error-label').remove()
        parent.classList.remove('error')
      }
    }

    function createError(input, text) { // функция создания ошибки и принимает поле наше для ввода и текст ошибки
        const parent = input.parentNode; //создаем константу, которая будет возвращать родителя выше
        const errorLabel = document.createElement('label'); // создаем элемент

        errorLabel.classList.add('error-label') // добавляем класс внутр
        errorLabel.textContent = text // присваиваем текст созданному ранее элементу

        parent.classList.add('error') // добавляем класс к самому полю

        parent.append(errorLabel) // вставляем наш статус ошибки в html
    }

    let result = true; // флаг результата = true

    // const nameInput = document.getElementById('name');
    // const nameInputValue = nameInput.value;
    
    const allInputs = form.querySelectorAll('input'); // переменная которая отвечает за все поля ввода

    for (const input of allInputs) { // цикл поле во всех полях

      removeError(input) // сначала очищаем от ошибки

      if(input.dataset.minLength ) { // если у у инпута есть дата атрибут data-min-Length, то мы будем делать проверку этого поля что у него длина есть и она не меньше ? символов

        if(input.value.length < input.dataset.minLength){ // если поле меньше указанной длины
          removeError(input) // очищаем от ошибки

          createError(input,`Минимальное количество символов: ${input.dataset.minLength}!`) // тот самый текст, который будет писаться если ошибка
          result = false // флаг становится отрицательным
        }

      }

      if(input.dataset.maxLength ) { // если у у инпута есть дата атрибут data-max-Length="6", то мы будем делать проверку этого поля что у него длина есть и она не превышает 6 символов

        if(input.value.length > input.dataset.maxLength){ // если поле больше указанной длины
          removeError(input) // очищаем от ошибки

          createError(input,`Максимальное количество символов: ${input.dataset.maxLength}!`) // тот самый текст, который будет писаться если ошибка
          result = false // флаг становится отрицательным
        }

      }
    }
  return result;
}

document.querySelector('#footer_form').addEventListener('submit', function(event) {
  event.preventDefault() // очистили дефолтное сообщение от браузера об ошибке заполнения поля
  console.log(this)
  if(validationMisstakes(this)) {
    console.log('Форма проверена успешно!')
  }
})

document.getElementById("phone").addEventListener("input", function(event) {
  event.preventDefault()
  let phoneInput = this.value;

  if (!/^[[0-9]{16}$/.test(phoneInput)) {
      this.setCustomValidity("Некорректные данные");
  } else {
      this.setCustomValidity("");
  }
});




// const form = document.forms["form"];

// form.addEventListener("input", inputHandler);

// function inputHandler({target}) {
//   if(target.hasAttribute("data-reg")) {
//     inputCheck(target);
//   }
// }

// function inputCheck(el) {
//   const inputValue = el.value;
//   const inputReg = el.getAttribute("data-reg");
//   const reg = new RegExp(inputReg);
//   console.log(inputValue, reg)
// }

let form = document.querySelector('#footer_form'),
    formInputs = document.querySelectorAll('.footer_input_name'),
    inputPhone = document.querySelector('.js-input-phone');

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function () {
      let phoneVal = inputPhone.value,
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

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }
}

const menus = document.querySelectorAll('.menu-item');
const menuButton = document.querySelector('#burger-checkbox')

for (const menu of menus) {
  menu.addEventListener('click', () => {
    menuButton.checked = !menuButton.checked
  })
}

