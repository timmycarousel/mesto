class Card {
  constructor(data, templateSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;

    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  //получаем шаблон карточки
  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return template;
  }

  //генерируем карточку
  _generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector(".element__img").src = this._link;
    this._element.querySelector(".element__img").alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;

    return this._element;
  }
  //открытие попапа картинки
  _openImgPopup() {
    const headImg = document.querySelector(".popup__heading");
    const fullImg = document.querySelector(".popup__img");
    const popupImg = document.querySelector(".popup_type_img");

    this._element.querySelector(".element__img");
    this._openPopup(popupImg);
    headImg.textContent = this._name;
    fullImg.src = this._link;
    fullImg.alt = this._name;
  }
  //функция переключения лайка
  _toggleLike() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_active");
  }

  _removeCard() {
    this._element.remove();
  }
  //слушатели
  _setEventListener() {
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._removeCard();
      });
    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._toggleLike();
      });
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this._openImgPopup();
      });
  }
}

export { Card };
