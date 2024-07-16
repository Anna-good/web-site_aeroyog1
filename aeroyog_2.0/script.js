document.getElementById("name").addEventListener("input", function() {
  let nameInput = this.value;
  if (!/^[A-ZА-Я][a-zа-я]{2,19}$/.test(nameInput)) {
      this.setCustomValidity("Имя должно начинаться с заглавной буквы и содержать от 3 до 20 символов");
  } else {
      this.setCustomValidity("");
  }
});