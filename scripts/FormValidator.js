/**
 * убираем сабмит по умолчанию
 * @param {*} evt событие
 */
function disableSubmit(evt) {
  evt.preventDefault();
}

function validationConfig(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    enableFormValidation(form, config);
  });
}

/**
 * переключение кнопки
 * @param {*} form форма
 * @param {*} config конфиг
 */
function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

/**
 * добавление слушателей ввода
 * @param {*} form форма
 * @param {*} config конфиг
 */
function addInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach((item) => {
    item.addEventListener("input", (evt) => {
      handleFormInput(evt, config);
    });
  });
}

/**
 * добавляем слушатели на форму и переключаем кнопку
 * @param {*} form форма
 * @param {*} config  конфиг
 */
function enableFormValidation(form, config) {
  form.addEventListener("submit", disableSubmit); // отключаем отправку формы
  form.addEventListener("input", () => {
    toggleButton(form, config);
  });
  toggleButton(form, config);

  //сброс формы
  form.addEventListener("reset", () => {
    setTimeout(() => {
      toggleButton(form, config);
    }, 0);
  });
  addInputListeners(form, config);
}

/**
 * обработать ввод в input
 * @param {*} evt событие input
 * @param {*} config конфиг
 */
function handleFormInput(evt, config) {
  const input = evt.target;

  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = " ";
  } else {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
}