import React from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../utils/api';
const ProtectedRouteElement = ({ element: Element, ...props }) => {
  console.log(api._headers);
  return props.isLoggedIn ? (
    <Element {...props} />
  ) : (
    <Navigate to="/sign-in" replace />
  );
};

export default ProtectedRouteElement;
