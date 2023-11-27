import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import ProtectedRouteElement from './ProtectedRouteElement';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';
import Journals from './Journals';
import { api } from '../utils/api';
function App() {
  const [isUserChecked, setIsUserChecked] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });
  React.useEffect(() => {
    if (localStorage.getItem('okoProjectToken')) {
      api._headers = api._headers = {
        'Content-Type': 'application/json',
        authorisation: localStorage.getItem('okoProjectToken'),
      };
      api
        .getMe()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch(() => {
          localStorage.removeItem('okoProjectToken');
        })
        .finally(() => {
          setIsUserChecked(true);
        });
    } else {
      setIsUserChecked(true);
    }
  }, []);
  return isUserChecked ? (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Routes>
          <Route
            path="/journals"
            element={
              <ProtectedRouteElement
                isLoggedIn={currentUser.name != ''}
                element={Journals}
              />
            }
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  ) : (
    <div></div>
  );
}

export default App;
