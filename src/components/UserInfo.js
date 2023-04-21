class UserInfo {
  constructor(nameSelector, infoSelector) {
    this._name = document.querySelector(nameSelector);
    this._info = document.querySelector(infoSelector);
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.info;
  }
  getUserInfo() {
    return { name: this._name.textContent, info: this._info.textContent };
  }
}
//внесем же изменения для комита
export { UserInfo };
