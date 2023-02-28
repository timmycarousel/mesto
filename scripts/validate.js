const enableValidation = {
  formSelector: ".popup__field_user",
  inputSelector: ".field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "field_type_error",
  errorClass: "popup__error_visible",
};

// function disableSubmit(evt) {
//   evt.preventDefault();
// }

function validationConfig(config) {
  const form = document.querySelector(config.formSelector);

//   form.addEventListener("submit", disableSubmit);

  addInputListeners(form, config);
}

function handleFormInput(evt, config) {
  const input = evt.target;
  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
  } else {
    input.classList.add(config.inputErrorClass);
  }
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
