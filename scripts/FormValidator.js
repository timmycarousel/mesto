class FormValidator {
  constructor(object, formElement) {
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
    this._errorClass = object.errorClass;
    this._formElement = formElement;
  }
  enableFormValidation() {
    // this._formElement.addEventListener("submit", disableSubmit); // отключаем отправку формы
    this._formElement.addEventListener("input", () => {
      _toggleButton();
    });
    // _toggleButton();
    //сброс формы
    this._formElement.addEventListener("reset", () => {
      setTimeout(() => {
        _toggleButton();
      }, 0);
    });
    // addInputListeners();
  }

  _toggleButton(_formElement, _inactiveButtonClass) {
    const _buttonSubmit = this._formElement.querySelector(
      this._submitButtonSelector
    );
    const _isFormValid = this._formElement.checkValidity();
    _buttonSubmit.disabled = !_isFormValid;
    _buttonSubmit.classList.toggle(this._inactiveButtonClass, !_isFormValid);
  }
  // //ДОКРУТИТЬ
  //     function handleFormInput(evt, config) {
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
//  //переключение кнопки
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
