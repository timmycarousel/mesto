import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._container.querySelector(".popup__field");
    // this._submitButton = this._form.querySelector(".");
    // this._submitButtonText = this._submitButton.textContent;
  }

  submitDeletion(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      //   console.log("KRYA");
      this._handleFormSubmit();
      evt.preventDefault();
    });
  }

  //   renderLoadingDeletion(isLoading) {
  //     if (isLoading) {
  //       this._submitButton.textContent = "Удаление...";
  //     } else {
  //       this._submitButton.textContent = this._submitButtonText;
  //     }
  //   }
}

export { PopupWithConfirmation };
