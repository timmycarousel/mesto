const page = document.querySelector('.page');
const editButton = page.querySelector('.profile__edit-button');
const popup = page.querySelector('.popup');
const closeIcon = page.querySelector('.popup__close-icon');
const popupField = page.querySelector('.popup__field');
const nameInput = page.querySelector('.popup__field-name');
const infoInput = page.querySelector('.popup__field-info');
const name = page.querySelector('.profile-info__name');
const info = page.querySelector('.profile-info__text');


displayNone = () => {
    popup.classList.remove('popup_active');
}
closeIcon.addEventListener('click', displayNone);

handleFormSubmit = (evt) => {
    evt.preventDefault();
    info.textContent = infoInput.value;
    name.textContent = nameInput.value;
    displayNone();
}
popupField.addEventListener('submit', handleFormSubmit);


displayFlex = () => {
    nameInput.value = name.textContent;
    infoInput.value = info.textContent;
    popup.classList.add('popup_active');

}
editButton.addEventListener('click', displayFlex);


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
];



const container = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;


//создаем массив из initialCards и возвращаем свойства name и link
const cardInfo = initialCards.map((item) => ({
    name: item.name,
    link: item.link
}));
// console.log(placeInfo); // выводим массив в консоль


//клонируем
renderCard = ({ name, link }) => {
    const placeElement = cardTemplate.querySelector(".element").cloneNode(true);// клонируем из cardTemplate в placeElement
    placeElement.querySelector(".element__img").src = link;// ссылка
    placeElement.querySelector(".element__img").alt = name;// alt   
    placeElement.querySelector(".element__text").textContent = name;// название

    container.append(placeElement);// добавляем карточку перед дочерним элементом
}

//рендерим элементы массива PlaceInfo по RenderCard
render = () => {
    cardInfo.forEach(renderCard);
}

render();//выводим функцию

// const likeButton = page.querySelector('.element__like-button');
// if (likeButton.target.classList('element__like-button')) {
// likeButton.classList.add ('element__like-button_active');
// }

