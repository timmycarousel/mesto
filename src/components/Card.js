class Card {
  //конструктор с элементом, темплейт-селектором и функцией открытия Popup
  constructor(data, templateSelector, handleCardClick) {
    // this._element.querySelector(".element__img");
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;

    // this._likeButton = this._element.querySelector(".element__like-button");
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
    this._elementImg = this._element.querySelector(".element__img");
    this._likeButton = this._element.querySelector(".element__like-button");
    this._likeCount = this._element.querySelector(".element__counter-like");
    this._likeCount.textContent = this._likes.length;
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;
    this._setEventListener();

    return this._element;
  }
  //приватный метод открытия попапа картинки
  _openImgPopup() {
    this._handleCardClick(this._link, this._name);
  }

  setLike(like) {
    this._likeCount.textContent = like.length;
    this._like = like;
    this._toggleLike();
  }

  //приватный метод переключения лайка
  _toggleLike() {
    this._likeButton.classList.toggle("element__like-button_active");
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
    this._likeButton.addEventListener("click", () => {
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
