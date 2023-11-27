require('dotenv').config();
const jwt = require('jsonwebtoken');
const UnauthorisedError = require('../errors/UnauthorisedError');
const User = require('../models/user');

module.exports.auth = (req, res, next) => {
  const authorization = req.headers.authorisation;
  if (!authorization) {
    console.log('1st err');
    next(new UnauthorisedError('Необходима авторизация'));
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(
      token,
      process.env.NODE_ENV == 'production'
        ? process.env.JWT_SECRET
        : 'dev-secret',
    );
  } catch (err) {
    console.log('2nd err');
    next(new UnauthorisedError('Неправильный логин или пароль'));
    return;
  }
  User.findById(payload._id)
    .then((user) => {
      req.user = user;
      console.log(req.user);
      next();
    })
    .catch((err) => {
      next(err);
    });
  // пропускаем запрос дальше
};
