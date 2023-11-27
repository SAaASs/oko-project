const notesRouter = require('express').Router(); // создали роутер
const { celebrate, Joi } = require('celebrate');
const { createBJN, getAllBJNs } = require('../constrollers/bigNote');
const { createSJN, getAllSJNs } = require('../constrollers/smallNote');
notesRouter.post('/big', createBJN);
notesRouter.post('/small', createSJN);
notesRouter.get('/big', getAllBJNs);
notesRouter.get('/small', getAllSJNs);
module.exports = { notesRouter };
