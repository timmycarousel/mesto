const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-button");
const popupUser = page.querySelector(".popup_type_user");
const buttonClosePopup = page.querySelectorAll(".popup__close-icon");
const popupUserField = page.querySelector(".popup__field");
const nameInput = page.querySelector("#nameValue");
const infoInput = page.querySelector(".popup__field-info");
const name = page.querySelector(".profile-info__name");
const info = page.querySelector(".profile-info__text");

const popupCard = page.querySelector(".popup_type_card");
const buttonOpenPopupAddCard = page.querySelector(".profile__add-button");

const popupCardField = page.querySelector(".popup__field_type_card");
const cardInput = page.querySelector("#newValue");
const urlInput = page.querySelector(".popup__field-url");

const container = document.querySelector(".elements");
const cardTemplate = document.querySelector(".card-template").content;
const template = cardTemplate.querySelector(".element");

const headImg = page.querySelector(".popup__heading");
const fullImg = page.querySelector(".popup__img");

const popupImg = page.querySelector(".popup_type_img");

const cardsInfo = initialCards.map((item) => ({
  name: item.name,
  link: item.link,
}));

function openPopup(popup) {
  popup.classList.add("popup_active");
}

function closePopup(popup) {
  popup.classList.remove("popup_active");
}

buttonClosePopup.forEach(function (button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", function () {
    return closePopup(popup);
  });
});

const createCard = ({ name, link }) => {
  const placeElement = template.cloneNode(true); // клонируем из cardTemplate в placeElement
  const elementImg = placeElement.querySelector(".element__img");
  const likeButton = placeElement.querySelector(".element__like-button"); // лайки

  elementImg.src = link;
  elementImg.alt = name;
  placeElement.querySelector(".element__text").textContent = name; // название

  const likeActive = () => {
    likeButton.classList.toggle("element__like-button_active");
  };

  const trashButton = placeElement.querySelector(".element__trash");
  const trashActive = () => {
    placeElement.remove();
  };

  trashButton.addEventListener("click", trashActive);
  likeButton.addEventListener("click", likeActive);
  elementImg.addEventListener("click", function () {
    openPopup(popupImg);
    headImg.textContent = name;
    fullImg.src = link;
    fullImg.alt = name;
  });

  return placeElement;
};

const render = () => {
  cardsInfo.forEach((element) => {
    container.append(createCard(element));
  });
};

render();

popupCardField.addEventListener("submit", function (evt) {
  evt.preventDefault();
  openPopup(popupCard);
  const placeElement = createCard({
    name: cardInput.value,
    link: urlInput.value,
  });
  container.prepend(placeElement);
  closePopup(popupCard);
  evt.target.reset();
});

buttonEdit.addEventListener("click", function () {
  openPopup(popupUser);
  nameInput.value = name.textContent;
  infoInput.value = info.textContent;
});

popupUserField.addEventListener("submit", function (evt) {
  evt.preventDefault();
  info.textContent = infoInput.value;
  name.textContent = nameInput.value;
  closePopup(popupUser);
});

buttonOpenPopupAddCard.addEventListener("click", function () {
  openPopup(popupCard);
});
