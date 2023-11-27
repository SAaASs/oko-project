import React from 'react';
import Header from './Header';
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [surName, setSurName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <section className="sign">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(
              e.target[0].value,
              e.target[1].value,
              e.target[2].value,
              e.target[3].value,
              e.target[4].value
            );
            api
              .registerMe(
                e.target[0].value,
                e.target[1].value,
                e.target[2].value,
                e.target[3].value,
                e.target[4].value
              )
              .then(() => {
                navigate('/sign-in');
              });
          }}
          className="sign__form"
        >
          <input
            onInput={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder="Имя"
            className="sign__form-input"
          ></input>
          <input
            onInput={(e) => {
              setSurName(e.target.value);
            }}
            value={surName}
            placeholder="Отчество"
            className="sign__form-input"
          ></input>
          <input
            onInput={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            placeholder="Фамилия"
            className="sign__form-input"
          ></input>
          <input
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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

export default Register;
