let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let closeIcon = page.querySelector('.popup__close-icon');
let popupContainer = page.querySelector('.popup__container');
let nameInput = page.querySelector('.popup__field-name');
let infoInput = page.querySelector('.popup__field-info');

let name = page.querySelector('.profile-info__name');
let info = page.querySelector('.profile-info__text');



function handleFormSubmit(evt) {
    evt.preventDefault();
    let name = page.querySelector('.profile-info__name');
    let info = page.querySelector('.profile-info__text');
    info.textContent = infoInput.value;
    name.textContent = nameInput.value;
    popup.classList.remove('popup_active');
}
popupContainer.addEventListener('submit', handleFormSubmit);


function displayFlex() {

    let name = page.querySelector('.profile-info__name');
    let info = page.querySelector('.profile-info__text');
    nameInput.value = name.textContent;
    infoInput.value = info.textContent;
    popup.classList.add('popup_active');

}
editButton.addEventListener('click', displayFlex);


function displayNone() {
    popup.classList.remove('popup_active');
}
closeIcon.addEventListener('click', displayNone);

