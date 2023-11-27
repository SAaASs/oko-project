import React from 'react';
import Header from './Header';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <Header></Header>
      <section className="sign">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target[0].value, e.target[1].value);
            api
              .loginMe(e.target[0].value, e.target[1].value)
              .then((res) => {
                api._headers = {
                  'Content-Type': 'application/json',
                  authorisation: res.token,
                };
                localStorage.setItem('okoProjectToken', res.token);
                return api.getMe();
              })
              .then((user) => {
                currentUser.setCurrentUser(user);
              })
              .then(() => {
                navigate('/journals');
              });
          }}
          className="sign__form"
        >
          <input
            onInput={(e) => {
              setLogin(e.target.value);
            }}
            value={login}
            placeholder="Логин"
            className="sign__form-input"
          ></input>
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Пароль"
            className="sign__form-input"
          ></input>
          <button className="sign__form-button" type="submit">
            Войти
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
