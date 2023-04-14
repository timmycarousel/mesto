import Popup from "./Popup.js";
class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._form = this._container.querySelector(".popup__field");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._form.querySelectorAll(".field");
  }

  close() {
    super.close();
    this._form.reset();
    console.log(this._inputsValues);
  }
  _getInputValues() {
    this._inputsValues = {};
    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });
    return this._inputsValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      this._handleFormSubmit(this._getInputValues());
      this._form.reset();
      evt.preventDefault();
      this.close();
    });
  }
}

export { PopupWithForm };
