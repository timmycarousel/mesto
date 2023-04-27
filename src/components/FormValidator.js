class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
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
    // const _buttonSubmit = this._formElement.querySelector(
    //   this._submitButtonSelector
    // );
    const _isFormValid = this._formElement.checkValidity();
    this._submitButton.disabled = !_isFormValid;
    this._submitButton.classList.toggle(
      this._inactiveButtonClass,
      !_isFormValid
    );
  }

  _addInputListeners() {
    this._inputList.forEach((item) => {
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

export { FormValidator };