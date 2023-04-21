class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject("Ошибка:" + res.status);
  }

  getUserData() {
    // console.log(this.headers);
    // console.log(this.url + "/users/me");

    return fetch(this.url + "/users/me", {
      headers: this.headers,
    }).then((res) => this._handleResponse(res));
  }

  getCardsFromServer() {
    return fetch(this.url + "/cards", {
      headers: this.headers,
    }).then((res) => this._handleResponse(res));
  }
}

export { Api };
