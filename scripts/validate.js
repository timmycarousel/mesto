const enableValidation = {
  formSelector: ".popup__field_user",
  inputSelector: ".field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "field_type_error",
  errorClass: "popup__error_visible",
};

function disableSubmit(evt) {
  evt.preventDefault();
}

function validationConfig(config) {
  const form = document.querySelector(config.formSelector);

  form.addEventListener("submit", disableSubmit);
  form.addEventListener("input", () => {
    toggleButton(form, config);
  });

  addInputListeners(form, config);
  toggleButton(form, config);
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

function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();

  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle("popup__submit-button_disabled", !isFormValid);

  console.log(isFormValid);
}

function addInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach((item) => {
    item.addEventListener("input", (evt) => {
      handleFormInput(evt, config);
    });
  });
}

validationConfig(enableValidation);
