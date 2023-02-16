const page = document.querySelector('.page');
const editButton = page.querySelector('.profile__edit-button');
const popup = page.querySelector('.popup');
const closeIcon = page.querySelector('.popup__close-icon');
const popupField = page.querySelector('.popup__field');
const nameInput = page.querySelector('.popup__field-name');
const infoInput = page.querySelector('.popup__field-info');
const name = page.querySelector('.profile-info__name');
const info = page.querySelector('.profile-info__text');

const popupcard = page.querySelector('.popupcard');
const plusCard = page.querySelector('.profile__add-button');
const closeCard = page.querySelector('.popupcard__close-icon');


cardNone = () => { //закрываем форму добавления карточки
    popupcard.classList.remove('popupcard_active');
}
closeCard.addEventListener('click', cardNone);

openCard = () => {// открываем форму добавления карточки
    popupcard.classList.add('popupcard_active');

}
plusCard.addEventListener('click', openCard);


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


//карточки из контейнера
const container = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;

const cardInfo = initialCards.map((item) => ({
    name: item.name, link: item.link
}));


//функция создает DOM элемент, на основе 1 параметра-объекта с 2 ключами 
renderCard = ({ name, link }) => {
    const placeElement = cardTemplate.querySelector(".element").cloneNode(true);// клонируем из cardTemplate в placeElement
    placeElement.querySelector(".element__img").src = link;// ссылка
    placeElement.querySelector(".element__img").alt = name;// alt   
    placeElement.querySelector(".element__text").textContent = name;// название

    const likeButton = placeElement.querySelector('.element__like-button'); // лайки
    likeActive = () => {
        likeButton.classList.add('element__like-button_active');
    }
    likeButton.addEventListener('click', likeActive);

    const trashButton = placeElement.querySelector('.element__trash');
    trashActive = () => {
        placeElement.remove();
    }
    trashButton.addEventListener('click', trashActive);

    return placeElement;

}

//берет каждый элемент массива и создает карточку по правилам функции renderCard
render = () => {
    cardInfo.forEach((element) => {
        container.append(renderCard(element));
    });
}

render();

//новая карточка из попапа
const popupcardField = page.querySelector('.popupcard__field');
const cardInput = page.querySelector('.popupcard__field-name');
const urlInput = page.querySelector('.popupcard__field-url');

newCard = (evt) => {
    evt.preventDefault();
    const placeElement = renderCard({name: cardInput.value, link: urlInput.value});
    container.prepend(placeElement);
    cardNone();
}

popupcardField.addEventListener('submit', newCard);





