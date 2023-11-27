export class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      const resu = res.json();
      return resu;
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  getAllSJNs() {
    return fetch(this._baseUrl + 'notes/small', {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
  getAllBJNs() {
    return fetch(this._baseUrl + 'notes/big', {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
  loginMe(email, password) {
    return fetch(this._baseUrl + 'signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }
  registerMe(name, surname, lastname, email, password) {
    return fetch(this._baseUrl + 'signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        surName: surname,
        lastName: lastname,
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }
  getMe() {
    return fetch(this._baseUrl + 'users/me', {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
  createBigNote(data) {
    return fetch(this._baseUrl + 'notes/big', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
  createSmallNote(data) {
    return fetch(this._baseUrl + 'notes/small', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
  patchBigNote(data, noteId) {
    console.log(noteId);
    return fetch(this._baseUrl + `notes/big/${noteId}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
  patchSmallNote(data, noteId) {
    console.log(noteId);
    return fetch(this._baseUrl + `notes/small/${noteId}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
}

export const api = new MainApi({
  baseUrl: 'http://localhost:3002/',
  headers: {
    'Content-Type': 'application/json',
  },
});
