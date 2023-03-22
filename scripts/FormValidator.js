class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }

  enableValidation() {
    this._formElement.addEventListener("submit", this._disableSubmit);
    // отключаем отправку формы
    this._formElement.addEventListener("input", () => {
      this._toggleButton();
    });
    this._toggleButton();

    //сброс формы
    this._formElement.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButton();
      }, 0);
    });
    this._addInputListeners();
  }

  _disableSubmit(evt) {
    evt.preventDefault();
  }

  _toggleButton() {
    const _buttonSubmit = this._formElement.querySelector(
      this._submitButtonSelector
    );
    const _isFormValid = this._formElement.checkValidity();
    _buttonSubmit.disabled = !_isFormValid;
    _buttonSubmit.classList.toggle(this._inactiveButtonClass, !_isFormValid);
  }

  _addInputListeners() {
    const _inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );

    _inputList.forEach((item) => {
      item.addEventListener("input", (evt) => {
        this._handleFormInput(evt);
      });
    });
  }

  _handleFormInput(evt) {
    const input = evt.target;

    const _inputId = input.id;
    const _errorElement = this._formElement.querySelector(`#${_inputId}-error`);

    if (input.validity.valid) {
      input.classList.remove(this._inputErrorClass);
      _errorElement.textContent = " ";
    } else {
      input.classList.add(this._inputErrorClass);
      _errorElement.textContent = input.validationMessage;
    }
  }
}

// function disableSubmit(evt) {
//   evt.preventDefault();
// }

// function validationConfig(config) {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));

//   formList.forEach((form) => {
//     enableFormValidation(form, config);
//   });
// }
// //переключение кнопки
// function toggleButton(form, config) {
//   const buttonSubmit = form.querySelector(config.submitButtonSelector);
//   const isFormValid = form.checkValidity();
//   buttonSubmit.disabled = !isFormValid;
//   buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
// }

// function addInputListeners(form, config) {
//   const inputList = Array.from(form.querySelectorAll(config.inputSelector));

//   inputList.forEach((item) => {
//     item.addEventListener("input", (evt) => {
//       handleFormInput(evt, config);
//     });
//   });
// }

// function enableFormValidation(form, config) {
//   form.addEventListener("submit", disableSubmit); // отключаем отправку формы
//   form.addEventListener("input", () => {
//     toggleButton(form, config);
//   });
//   toggleButton(form, config);

//   //сброс формы
//   form.addEventListener("reset", () => {
//     setTimeout(() => {
//       toggleButton(form, config);
//     }, 0);
//   });
//   addInputListeners(form, config);
// }

// // обработать ввод в input

// function handleFormInput(evt, config) {
//   const input = evt.target;

//   const inputId = input.id;
//   const errorElement = document.querySelector(`#${inputId}-error`);

//   if (input.validity.valid) {
//     input.classList.remove(config.inputErrorClass);
//     errorElement.textContent = " ";
//   } else {
//     input.classList.add(config.inputErrorClass);
//     errorElement.textContent = input.validationMessage;
//   }
// }

export { FormValidator };
