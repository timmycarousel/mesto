export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
    this._container = document.querySelector(popupSelector);
    this._closeButton = this._container.querySelector(".popup__close-icon");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._container.classList.add("popup_active");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._container.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close;
    }
  }

  setEventListeners() {
    this._selector.addEventListener("mousedown", (e) => {
      if (
        e.target.classList.contains("popup__close-icon") ||
        e.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
  }
}
