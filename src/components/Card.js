class Card {
  //конструктор с элементом, темплейт-селектором и функцией открытия Popup
  constructor({
    data,
    userId,
    templateSelector,
    handleCardClick,
    handleDeleteConfirm,
    handleLike,
  }) {
    // this._element.querySelector(".element__img");
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._cardId = data._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._handleDeleteConfirm = handleDeleteConfirm;
    this._handleLike = handleLike;

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
    // this._likeCount.textContent = this._likes.length;
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._buttonTrash = this._element.querySelector(".element__trash");
    this._element.querySelector(".element__text").textContent = this._name;
    this._setEventListener();
    this._hideDeleteButton();
    this.setLikes(this._likes);

    return this._element;
  }
  //приватный метод открытия попапа картинки
  _openImgPopup() {
    this._handleCardClick(this._link, this._name);
  }

  setLikes(likes) {
    this._likes = likes;
    this._likeCount.textContent = this._likes.length;
    this._likeButton.classList.toggle("element__like-button_active");
  }

  //приватный метод переключения лайка
  toggleLike() {
    return this._likeButton.classList.contains("element__like-button_active");
  }
  //метод удаления карточки
  removeCard() {
    console.log("Hello World");
    this._element.remove();
    this._element = null;
  }

  getId() {
    return this._cardId;
  }

  _hideDeleteButton() {
    if (this._ownerId !== this._userId) {
      // console.log(this._ownerId);
      this._buttonTrash.style.display = "none";
    }
  }

  //приватные слушатели
  //удаления карточки
  _setEventListener() {
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._handleDeleteConfirm();
      });
    //лайков
    this._likeButton.addEventListener("click", () => {
      this._handleLike(toggleLike());
      this._likeButton.classList.toggle("element__like-button_active");
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
