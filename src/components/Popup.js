export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
    this._container = document.querySelector(popupSelector);
    this._closeButton = this._container.querySelector(".popup__close-icon");
  }

  open() {
    this._container.classList.add("popup_active");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._container.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._container.addEventListener("click", (evt) => {
      this._clickOverlayClosePopup(evt);
    });
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _clickOverlayClosePopup(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
}
