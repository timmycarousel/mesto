import Popup from "./Popup.js";
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._container.querySelector(".popup__img");
    this._popupHeading = this._container.querySelector(".popup__heading");
  }

  open(data) {
    this._popupImg.src = data.link;
    this._popupImg.alt = data.name;
    this._popupHeading.textContent = data.name;
    super.open();
  }
}

export { PopupWithImage };
