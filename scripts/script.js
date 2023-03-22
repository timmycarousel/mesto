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

initialCards.forEach((item) => {
  const card = new Card(item, ".card-template", openPopup);
  const cardElement = card.generateCard();
  container.append(cardElement);
});

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

//добавляем новую карточку
function addNewCard(evt) {
  evt.preventDefault();
  //создаем объект с данными из полей ввода
  const newCardElement = {
    name: cardInput.value,
    link: urlInput.value,
  };
  const newCard = new Card(newCardElement, ".card-template", openPopup);
  const cardNewElement = newCard.generateCard(".card-template");
  submitButton.classList.add("popup__submit-button_disabled");
  container.prepend(cardNewElement);
  closePopup(popupCard);
  evt.target.reset();
}

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

// const profileValidation = new FormValidator(object, popupUserField);
// profileValidation.enableFormValidation();

// const createCard = ({ name, link }) => {
//   const placeElement = template.cloneNode(true); // клонируем из cardTemplate в placeElement
//   const elementImg = placeElement.querySelector(".element__img");
//   const likeButton = placeElement.querySelector(".element__like-button"); // лайки

//   elementImg.src = link;
//   elementImg.alt = name;
//   placeElement.querySelector(".element__text").textContent = name; // название

//   const openImgPopup = () => {
//     openPopup(popupImg);
//     headImg.textContent = name;
//     fullImg.src = link;
//     fullImg.alt = name;
//   };

//   function toggleLike() {
//     likeButton.classList.toggle("element__like-button_active");
//   }

//   const trashButton = placeElement.querySelector(".element__trash");
//   function removeCard() {
//     placeElement.remove();
//   }

//   trashButton.addEventListener("click", removeCard);
//   likeButton.addEventListener("click", toggleLike);
//   elementImg.addEventListener("click", openImgPopup);

//   return placeElement;
// };

// const render = () => {
//   initialCards.forEach((element) => {
//     container.append(createCard(element));
//   });
// };

// render();

// popupCardField.addEventListener("submit", function (evt) {
//   openPopup(popupCard);
//   const placeElement = createCard({
//     name: cardInput.value,
//     link: urlInput.value,
//   });
//   container.prepend(placeElement);
//   closePopup(popupCard);
//   evt.target.reset();
// });

// buttonEdit.addEventListener("click", function () {
//   openPopup(popupUser);
//   nameInput.value = name.textContent;
//   infoInput.value = info.textContent;
//   toggleButton(popupUserField, object);
// });

// popupUserField.addEventListener("submit", function (evt) {
//   info.textContent = infoInput.value;
//   name.textContent = nameInput.value;
//   closePopup(popupUser);
// });

// buttonOpenPopupAddCard.addEventListener("click", function () {
//   openPopup(popupCard);
// });

// enableValidation(object);
