class UserInfo {
  constructor(nameSelector, infoSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._info = document.querySelector(infoSelector);
    this._avatarLink = document.querySelector(avatarSelector);
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.info;
    this._avatarLink.src = data.avatar;
  }
  getUserInfo() {
    return { name: this._name.textContent, info: this._info.textContent };
  }

  // setAvatar(avatarLink) {
  //   this._avatarLink.src = avatarLink;
  // }
}
//внесем же изменения для комита
export { UserInfo };
