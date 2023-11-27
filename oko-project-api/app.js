require('dotenv').config();
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { login, createUser } = require('./constrollers/users');
const bodyParser = require('body-parser');
const cors = require('cors');
require('events').EventEmitter.defaultMaxListeners = 20;
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const NotFoundError = require('./errors/NotFoundError');
const { auth } = require('./middlewares/auth');
const { errHandler } = require('./middlewares/errHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { notesRouter } = require('./routes/notes');
const { userRouter } = require('./routes/users');
// Слушаем 3000 порт
const { PORT = 3002 } = process.env;
mongoose.connect(
  process.env.NODE_ENV == 'production'
    ? process.env.DB_ADDRESS
    : 'mongodb://127.0.0.1:27017/okoprojectdb',
);
const app = express();
app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(requestLogger); // для приёма веб-страниц внутри POST-запроса
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.post(
  '/signin',
  cors(corsOptions),
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  }),
  login,
);
app.post(
  '/signup',
  cors(corsOptions),
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
      name: Joi.string().min(2).max(30),
      surName: Joi.string().min(2).max(30),
      lastName: Joi.string().min(2).max(30),
    }),
  }),
  createUser,
);
app.use(auth);
app.use('/users/', userRouter);
app.use('/notes/', notesRouter);
app.use('*', (req, res, next) => {
  next(new NotFoundError('Выбранного пути не существует'));
});
app.use(errorLogger);
app.use(errors());
app.use(errHandler);
app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
