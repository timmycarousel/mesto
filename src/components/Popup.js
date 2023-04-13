export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
    this._container = document.querySelector(popupSelector);
    this._closeButton = this._container.querySelector(".popup__close-icon");
  }

  open() {
    this._container.classList.add("popup_active");
    // this.setEventListeners();
    document.addEventListener("keydown", this._handleEscClose);
    // this._deleteEventListeners();
  }

  close() {
    this._container.classList.remove("popup_active");
    // this._deleteEventListeners();
    document.removeEventListener("keydown", this._handleEscClose);
    // this._container.removeEventListener("click", this._clickOverlayClosePopup);
    // this._closeButton.removeEventListener(this.close);
  }

  // _deleteEventListeners() {

  setEventListeners() {
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
      console.log("HELLO");
    }
  }

  _clickOverlayClosePopup(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
}
