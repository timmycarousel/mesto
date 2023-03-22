
class Card {
  //конструктор с элементом, темплейт-селектором и функцией открытия Popup
  constructor(data, templateSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;

    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  //приватный метод получения шаблона карточки из массива
  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return template;
  }

  //публичный метод генерации карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector(".element__img").src = this._link;
    this._element.querySelector(".element__img").alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;

    return this._element;
  }
  //приватный метод открытия попапа картинки
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
  //приватный метод переключения лайка
  _toggleLike() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_active");
  }
  //приватный метод удаления карточки
  _removeCard() {
    this._element.remove();
    this._element = null;
  }
  //приватные слушатели
  //удаления карточки
  _setEventListener() {
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._removeCard();
      });
    //лайков
    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._toggleLike();
      });
    //открытия попапа картинки
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this._openImgPopup();
      });
  }
}
//экспорт класса "Card"
export { Card };
