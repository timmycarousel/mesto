import Popup from "./Popup.js";
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._container.querySelector(".popup__img");
    this._popupHeading = this._container.querySelector(".popup__heading");
  }

  open(link, name) {
    super.open();
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupHeading.textContent = name;
  }
}

export { PopupWithImage };
