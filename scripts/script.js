const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-button");
const popupUser = page.querySelector(".popupuser");
const buttonClosePopupUserForm = page.querySelector(".popupuser__close-icon");
const popupUserField = page.querySelector(".popupuser__field");
const nameInput = page.querySelector(".popupuser__field-name");
const infoInput = page.querySelector(".popupuser__field-info");
const name = page.querySelector(".profile-info__name");
const info = page.querySelector(".profile-info__text");

const popupCard = page.querySelector(".popupcard");
const buttonOpenPopupAddCard = page.querySelector(".profile__add-button");
const buttonClosePopupAddCard = page.querySelector(".popupcard__close-icon");

const popupCardField = page.querySelector(".popupcard__field");
const cardInput = page.querySelector(".popupcard__field-name");
const urlInput = page.querySelector(".popupcard__field-url");

const container = document.querySelector(".elements");
const cardTemplate = document.querySelector(".card-template").content;
const template = cardTemplate.querySelector(".element");

const headImg = page.querySelector(".popupimg__head");
const fullImg = page.querySelector(".popupimg__img");

const buttonClosePopupImg = page.querySelector(".popupimg__close-icon");
const popupImg = page.querySelector(".popupimg");

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

buttonClosePopupImg.addEventListener("click", function () {
  closePopup(popupImg);
});

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

buttonClosePopupAddCard.addEventListener("click", function () {
  closePopup(popupCard);
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

buttonClosePopupUserForm.addEventListener("click", function () {
  closePopup(popupUser);
});

buttonOpenPopupAddCard.addEventListener("click", function () {
  openPopup(popupCard);
});
