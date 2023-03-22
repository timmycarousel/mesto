import { initialCards, object } from "./Data.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-button");
const popupUser = page.querySelector(".popup_type_user");
const closeButtons = page.querySelectorAll(".popup__close-icon");
const popupUserField = page.querySelector(".popup__field_user");

const nameInput = page.querySelector("#nameValue");
const infoInput = page.querySelector("#infoValue");
const name = page.querySelector(".profile-info__name");
const info = page.querySelector(".profile-info__text");

const buttonOpenPopupAddCard = page.querySelector(".profile__add-button");

const submitButton = page.querySelector(".popup__submit-button");

const popupCard = page.querySelector(".popup_type_card");
const popupCardField = page.querySelector(".popup__field_card");

// const headImg = page.querySelector(".popup__heading");
// const fullImg = page.querySelector(".popup__img");
// const popupImg = page.querySelector(".popup_type_img");

const cardInput = page.querySelector("#newValue");
const urlInput = page.querySelector("#UrlValue");

const container = document.querySelector(".elements");
const cardTemplate = document.querySelector(".card-template").content;
// const template = cardTemplate.querySelector(".element");

function createCard(data, templateSelector) {
  const card = new Card(data, templateSelector, openPopup);
  return card.generateCard();
}

initialCards.forEach((item) => {
  const card = createCard(item, ".card-template");
  // const cardElement = card.generateCard();
  container.append(card);
});

//добавляем новую карточку
function addNewCard(evt) {
  evt.preventDefault();
  //создаем объект с данными из полей ввода
  const newCardElement = {
    name: cardInput.value,
    link: urlInput.value,
  };
  const newCard = createCard(newCardElement, ".card-template");
  container.prepend(newCard);
  closePopup(popupCard);
  evt.target.reset();
}

function openPopup(popup) {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closeEsc);
  popup.addEventListener("mousedown", clickOverlayClosePopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closeEsc);
  popup.removeEventListener("mousedown", clickOverlayClosePopup);
}

function closeEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_active");
    return closePopup(popupOpened);
  }
}

function clickOverlayClosePopup(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

closeButtons.forEach(function (button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", function () {
    return closePopup(popup);
  });
});

//слушатель сабмита карточки
popupCardField.addEventListener("submit", addNewCard);

//слушатель добавления карточки
buttonOpenPopupAddCard.addEventListener("click", function () {
  const validator = new FormValidator(object, popupCardField);
  validator.enableValidation();
  openPopup(popupCard);
});

//слушатель кнопки редактирования пользователя
buttonEdit.addEventListener("click", function () {
  openPopup(popupUser);
  // resetSpan(popupUser);
  nameInput.value = name.textContent;
  infoInput.value = info.textContent;
  const validator = new FormValidator(object, popupUserField);
  validator.enableValidation();
});

//слушатель заполния формы пользователя
popupUserField.addEventListener("submit", function (evt) {
  evt.preventDefault();
  info.textContent = infoInput.value;
  name.textContent = nameInput.value;
  closePopup(popupUser);
});
