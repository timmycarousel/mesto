import Popup from "./Popup.js";
class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._form = this._container.querySelector(".popup__field");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._form.querySelectorAll(".field");
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
  _getInputValues() {
    this._inputsValues = {};
    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });
    // console.log(this._inputsValues);
    return this._inputsValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      this._handleFormSubmit(this._getInputValues());
      evt.preventDefault();
      this.close();
    });
  }
}

export { PopupWithForm };
