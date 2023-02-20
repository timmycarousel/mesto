//функция создает DOM элемент, на основе 1 параметра-объекта с 2 ключами
// const createCard = ({ name, link }) => {
//   const placeElement = template.cloneNode(true); // клонируем из cardTemplate в placeElement
//   const elementImg = placeElement.querySelector(".element__img");
//   const likeButton = placeElement.querySelector(".element__like-button"); // лайки
//   elementImg.src = link;
//   elementImg.alt = name;
//   placeElement.querySelector(".element__text").textContent = name; // название
//   const openImg = () => {
//     popupImg.classList.add("popupimg_active");
//     headImg.textContent = name;
//     fullImg.src = link;
//     fullImg.alt = name;
//   };
//   const likeActive = () => {
//     likeButton.classList.toggle("element__like-button_active");
//   };
//   const trashButton = placeElement.querySelector(".element__trash");
//   const trashActive = () => {
//     placeElement.remove();
//   };
//   trashButton.addEventListener("click", trashActive);
//   likeButton.addEventListener("click", likeActive);
//   elementImg.addEventListener("click", openImg);
//   return placeElement;
// };
// const render = () => {
//   cardsInfo.forEach((element) => {
//     container.append(createCard(element));
//   });
// };
// render();
// const closeImg = () => {
//   popupImg.classList.remove("popupimg_active");
// };
// const closePopupAddCard = () => {
//   //закрываем форму добавления карточки
//   popupCard.classList.remove("popupcard_active");
// };
// const openPopupAddCard = () => {
//   // открываем форму добавления карточки
//   popupCard.classList.add("popupcard_active");
// };
// const createNewCard = (evt) => {
//   evt.preventDefault();
//   const placeElement = createCard({
//     name: cardInput.value,
//     link: urlInput.value,
//   });
//   container.prepend(placeElement);
//   closePopupAddCard();
//   evt.target.reset();
// };
function openPopup(popup) {
  popup.classList.add("popup_active");
}
