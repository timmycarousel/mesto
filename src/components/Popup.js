export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
    this._container = document.querySelector(popupSelector);
    this._closeButton = this._container.querySelector(".popup__close-icon");
  }

  open() {
    this._container.classList.add("popup_active");
    this.setEventListeners();
  }

  close() {
    this._container.classList.remove("popup_active");
  }

  setEventListeners() {
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
    this._container.addEventListener("click", (evt) => {
      this._clickOverlayClosePopup(evt);
    });
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _clickOverlayClosePopup(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
}
