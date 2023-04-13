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
      // debugger;
      this._inputsValues[input.name] = input.value;
    });
    return this._inputsValues;
  }

  // _deleteEventListeners() {
  //   super._deleteEventListeners();
  //   this._form.removeEventListener("submit", (evt) => {
  //     this._handleFormSubmit(this._getInputValues());
  //     this._form.reset();
  //     evt.preventDefault();
  //   });
  // }

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
