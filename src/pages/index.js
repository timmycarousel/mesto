//импорты
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, validationConfig } from "../scripts/Data.js";
import "./index.css";
import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

//константы
const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-button");
const buttonAvatar = page.querySelector(".profile__avatar-button");
const sectionElements = ".elements";
const nameInput = page.querySelector("#nameValue");
const infoInput = page.querySelector("#infoValue");
const buttonOpenPopupAddCard = page.querySelector(".profile__add-button");
const forms = page.querySelectorAll(".popup__field");

//информация пользователя
const userInfo = new UserInfo(
  ".profile-info__name",
  ".profile-info__text",
  ".profile__avatar-img"
);
//данные апи
const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "a0d61060-a9a4-4380-95cd-b58bf32a5ce6",
    "Content-Type": "application/json",
  },
});

// promise запроса пользователя и карточек
Promise.all([api.getUserData(), api.getCardsFromServer()])
  .then(([info, initialCards]) => {
    userId = info._id;
    userInfo.setUserInfo({
      name: info.name,
      info: info.about,
      avatar: info.avatar,
    });
    cardList.addItem(initialCards);
  })
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => {});

// ID
let userId;

// popup изменения аватара
const popupAvatar = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  handleFormSubmit: (data) => {
    popupAvatar.renderLoading(true);
    api
      .changeAvatar(data)
      .then((res) => {
        userInfo.setUserInfo({
          name: res.name,
          info: res.about,
          avatar: res.avatar,
        });
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        popupAvatar.renderLoading(false);
      });
  },
});

popupAvatar.setEventListeners();

// popup редактирования профиля пользователя
const userEdit = new PopupWithForm({
  popupSelector: ".popup_type_user",
  handleFormSubmit: (data) => {
    userEdit.renderLoading(true);
    api
      .patchUserData(data)
      .then((res) => {
        userInfo.setUserInfo({
          info: res.about,
          name: res.name,
          avatar: res.avatar,
        });
        userEdit.close();
      })

      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        userEdit.renderLoading(false);
      });
  },
});

userEdit.setEventListeners();

// popup добавления новой карточки
const addNewCard = new PopupWithForm({
  popupSelector: ".popup_type_card",
  handleFormSubmit: (data) => {
    addNewCard.renderLoading(true);
    api
      .addNewCard(data)
      .then((data) => {
        const newCard = createCard(data, openPopup);
        cardList.prependItem(newCard);
        addNewCard.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        addNewCard.renderLoading(false);
      });
  },
});

addNewCard.setEventListeners();

// слушатель добавления карточки
buttonOpenPopupAddCard.addEventListener("click", function () {
  addNewCard.open();
});

// popup удаления карточки
const popupDeleteCard = new PopupWithConfirmation(".popup_type_delete");
popupDeleteCard.setEventListeners();

// Создание экземпляра попапа изображения и установка обработчиков событий
const popupImage = new PopupWithImage(".popup_type_img");
popupImage.setEventListeners();

// Создание карточки и добавление на страницу
function createCard(data) {
  const card = new Card({
    data: data,
    userId: userId,
    templateSelector: ".card-template",
    handleCardClick: () => openPopup(data),
    handleDeleteConfirm: () => {
      popupDeleteCard.open();
      popupDeleteCard.submitDeletion(() => {
        api
          .deleteCard(card.getId())
          .then(() => {
            card.removeCard();
            popupDeleteCard.close();
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          })
          .finally(() => {});
      });
    },
    handleLike: () => {
      api
        .addLike(card.getId())
        .then((res) => {
          card.setNewLikes(res);
          card.toggleLike();
          card.setLikes();
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        })
        .finally(() => {});
    },
    deleteLike: () => {
      api
        .deleteLike(card.getId())
        .then((res) => {
          card.setNewLikes(res);
          card.toggleLike();
          card.setLikes();
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        })
        .finally(() => {});
    },
  });
  return card.generateCard();
}

// Обработчики события кнопки редактирования пользователя
buttonEdit.addEventListener("click", () => {
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  infoInput.value = info;
  userEdit.open();
});

// Обработчик события кнопки добавления аватара
buttonAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

// Валидация формы
function enableValidation(formElement) {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
}

forms.forEach(enableValidation);

// Открытие попапа с изображением
const openPopup = (link, name) => {
  popupImage.open(link, name);
};

// Хранение карточек в классе Section
const cardList = new Section(
  (cardItem) => createCard(cardItem),
  sectionElements
);
