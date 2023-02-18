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

//функция создает DOM элемент, на основе 1 параметра-объекта с 2 ключами
const createCard = ({ name, link }) => {
  const placeElement = template.cloneNode(true); // клонируем из cardTemplate в placeElement
  const elementImg = placeElement.querySelector(".element__img");
  const likeButton = placeElement.querySelector(".element__like-button"); // лайки

  elementImg.src = link;
  elementImg.alt = name;
  placeElement.querySelector(".element__text").textContent = name; // название

  openImg = () => {
    popupImg.classList.add("popupimg_active");
    headImg.textContent = name;
    fullImg.src = link;
    fullImg.alt = name;
  };

  likeActive = () => {
    likeButton.classList.toggle("element__like-button_active");
  };

  const trashButton = placeElement.querySelector(".element__trash");
  trashActive = () => {
    placeElement.remove();
  };

  trashButton.addEventListener("click", trashActive);
  likeButton.addEventListener("click", likeActive);
  elementImg.addEventListener("click", openImg);

  return placeElement;
};

render = () => {
  cardsInfo.forEach((element) => {
    container.append(createCard(element));
  });
};

render();

closeImg = () => {
  popupImg.classList.remove("popupimg_active");
};

closePopupAddCard = () => {
  //закрываем форму добавления карточки
  popupCard.classList.remove("popupcard_active");
};

openPopupAddCard = () => {
  // открываем форму добавления карточки
  popupCard.classList.add("popupcard_active");
};

createNewCard = (evt) => {
  evt.preventDefault();
  const placeElement = createCard({
    name: cardInput.value,
    link: urlInput.value,
  });
  container.prepend(placeElement);
  closePopupAddCard();
  evt.target.reset();
};

openClosePopupUser = () => {
  popupUser.classList.toggle("popupuser_active");
};

editFormUser = (evt) => {
  evt.preventDefault();
  info.textContent = infoInput.value;
  name.textContent = nameInput.value;
  openClosePopupUser();
};

activePopupUser = () => {
  nameInput.value = name.textContent;
  infoInput.value = info.textContent;
};

buttonClosePopupImg.addEventListener("click", closeImg);
buttonEdit.addEventListener("click", activePopupUser);
buttonEdit.addEventListener("click", openClosePopupUser);
popupUserField.addEventListener("submit", editFormUser);
buttonClosePopupUserForm.addEventListener("click", openClosePopupUser);
popupCardField.addEventListener("submit", createNewCard);
buttonOpenPopupAddCard.addEventListener("click", openPopupAddCard);
buttonClosePopupAddCard.addEventListener("click", closePopupAddCard);
