import { initialCards, validationConfig } from "./Data.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
// import { Popup } from "./Popup.js";

const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-button");
const popupUser = page.querySelector(".popup_type_user");
const closeButtons = page.querySelectorAll(".popup__close-icon");

const nameInput = page.querySelector("#nameValue");
const infoInput = page.querySelector("#infoValue");
// const name = page.querySelector(".profile-info__name");
// const info = page.querySelector(".profile-info__text");
const buttonOpenPopupAddCard = page.querySelector(".profile__add-button");
// const popupCard = page.querySelector(".popup_type_card");
const forms = page.querySelectorAll(".popup__field");
const popupUserForm = page.querySelector(".popup__field_user");
const popupCardForm = page.querySelector(".popup__field_card");

const cardInput = page.querySelector("#newValue");
const urlInput = page.querySelector("#UrlValue");

const container = document.querySelector(".elements");

function enableValidation(formElement) {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
}
forms.forEach(enableValidation);

const openPopup = (data) => {
  popupImage.open(data);
};

function createCard(data, func) {
  const card = new Card(data, ".card-template", func);
  return card.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      // const card = createCard(item, ".card-template");
      cardSection.addItem(createCard(item, openPopup));
    },
  },
  ".elements"
);

cardSection.createCards();

//добавляем новую карточку

const addNewCard = new PopupWithForm({
  popupSelector: ".popup_type_card",
  handleFormSubmit: () => {
    const newCardElement = {
      name: cardInput.value,
      link: urlInput.value,
    };
    const newCard = createCard(newCardElement, openPopup);
    container.prepend(newCard);
    addNewCard.close();
  },
});

const userEdit = new PopupWithForm({
  popupSelector: ".popup_type_user",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    userEdit.close();
  },
});

//слушатель сабмита карточки
// popupCardForm.addEventListener("submit", addNewCard);

// слушатель добавления карточки
buttonOpenPopupAddCard.addEventListener("click", function () {
  addNewCard.open();
});
const userInfo = new UserInfo(".profile-info__name", ".profile-info__text");

// слушатель кнопки редактирования пользователя
buttonEdit.addEventListener("click", () => {
  userEdit.open();
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  infoInput.value = info;
});

//слушатель заполния формы пользователя
// popupUserForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   info.textContent = infoInput.value;
//   name.textContent = nameInput.value;
//   closePopup(popupUser);
// });

const popupImage = new PopupWithImage(".popup_type_img");
cardSection.createCards();
