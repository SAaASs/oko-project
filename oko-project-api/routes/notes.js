const notesRouter = require('express').Router(); // создали роутер
const { celebrate, Joi } = require('celebrate');
const { createBJN, getAllBJNs, updateBJN } = require('../constrollers/bigNote');
const {
  createSJN,
  getAllSJNs,
  updateSJN,
} = require('../constrollers/smallNote');
notesRouter.post('/big', createBJN);
notesRouter.post('/small', createSJN);
notesRouter.get('/big', getAllBJNs);
notesRouter.get('/small', getAllSJNs);
notesRouter.patch('/big/:noteId', updateBJN);
notesRouter.patch('/small/:noteId', updateSJN);
module.exports = { notesRouter };
