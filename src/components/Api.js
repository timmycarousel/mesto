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
    return fetch(this.url + "/users/me", {
      headers: this.headers,
    }).then((res) => this._handleResponse(res));
  }

  getCardsFromServer() {
    return fetch(this.url + "/cards", {
      headers: this.headers,
    }).then((res) => this._handleResponse(res));
  }

  patchUserData(data) {
    console.log(data);
    return fetch(this.url + "/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        about: data.info,
        name: data.name,
      }),
    }).then((res) => this._handleResponse(res));
  }
}

export { Api };
