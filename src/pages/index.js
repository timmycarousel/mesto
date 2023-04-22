import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, validationConfig } from "../scripts/Data.js";
import "./index.css";
import { Api } from "../components/Api.js";

const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-button");

const nameInput = page.querySelector("#nameValue");
const infoInput = page.querySelector("#infoValue");
const buttonOpenPopupAddCard = page.querySelector(".profile__add-button");
const forms = page.querySelectorAll(".popup__field");

const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "a0d61060-a9a4-4380-95cd-b58bf32a5ce6",
    // "Content-Type": "application/json",
  },
});

api.getUserData().then((res) => {
  userInfo.setUserInfo({
    name: res.name,
    info: res.about,
  });
});

function createCard({ link, name }, func) {
  const card = new Card({ link, name }, ".card-template", func);
  return card.generateCard();
}

api.getCardsFromServer().then((data) => {
  const cardSection = new Section(
    {
      items: data,
      renderer: (item) => {
        cardSection.addItem(createCard(item, openPopup));
      },
    },
    ".elements"
  );
  cardSection.renderItems();
});

// const cardSection = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       cardSection.addItem(createCard(item, openPopup));
//     },
//   },
//   ".elements"
// );

const userInfo = new UserInfo(".profile-info__name", ".profile-info__text");

// слушатель кнопки редактирования пользователя
buttonEdit.addEventListener("click", () => {
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  infoInput.value = info;
  userEdit.open();
});

//валидация формы
function enableValidation(formElement) {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
}
forms.forEach(enableValidation);

//попап карточки
const openPopup = (link, name) => {
  popupImage.open(link, name);
};

//добавляем новую карточку

const addNewCard = new PopupWithForm({
  popupSelector: ".popup_type_card",
  handleFormSubmit: (data) => {
    // console.log(data);
    const newCard = createCard(data, openPopup);
    cardSection.prependItem(newCard);
  },
});

addNewCard.setEventListeners();

// слушатель добавления карточки
buttonOpenPopupAddCard.addEventListener("click", function () {
  addNewCard.open();
});

const userEdit = new PopupWithForm({
  popupSelector: ".popup_type_user",
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    userEdit.close();
  },
});

userEdit.setEventListeners();

const popupImage = new PopupWithImage(".popup_type_img");
// console.log(cardSection);
// cardSection.renderItems();
popupImage.setEventListeners();
