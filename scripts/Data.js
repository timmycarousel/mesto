//данные для карточек
const initialCards = [
  {
    name: "Тверь",
    link: "https://газета-вся-тверь.рф/upload/iblock/3de/3deca0c26f960a9e8890c860363f35af.jpg",
  },
  {
    name: "Нилова Пустынь",
    link: "https://img2.goodfon.ru/original/1080x960/3/d3/nebo-reka-derevya-vesna.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Данные для валидации
const object = {
  formSelector: ".popup__field",
  inputSelector: ".field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "field_type_error",
  errorClass: "popup__span_error_visible",
};

//экспорт
export { initialCards, object };
