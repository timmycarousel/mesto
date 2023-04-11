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

const nameInput = page.querySelector("#nameValue");
const infoInput = page.querySelector("#infoValue");
const buttonOpenPopupAddCard = page.querySelector(".profile__add-button");
const forms = page.querySelectorAll(".popup__field");

const cardInput = page.querySelector("#newValue");
const urlInput = page.querySelector("#UrlValue");

const container = document.querySelector(".elements");
//валидация формы
function enableValidation(formElement) {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
}
forms.forEach(enableValidation);

//попап карточки
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

// слушатель добавления карточки
buttonOpenPopupAddCard.addEventListener("click", function () {
  addNewCard.open();
  this.setEventListeners();
});

const userInfo = new UserInfo(".profile-info__name", ".profile-info__text");

const userEdit = new PopupWithForm({
  popupSelector: ".popup_type_user",
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    userEdit.close();
  },
});

// слушатель кнопки редактирования пользователя
buttonEdit.addEventListener("click", () => {
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  infoInput.value = info;
  userEdit.open();
});

const popupImage = new PopupWithImage(".popup_type_img");
cardSection.createCards();
