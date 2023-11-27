const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UnauthorisedError = require('../errors/UnauthorisedError');
const smallJournalNote = new mongoose.Schema({
  noteNumber: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  diagramId: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  pressEquipDate: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  pairId: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  pairFullMarkLeft: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  pairFullMarkRight: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  hubDiameterLeft: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  hubDiameterRight: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  tensionLeft: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  tensionRight: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  pressurePowerUpLeft: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  pressurePowerUpRight: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  distanceBetweenInnerAndSide: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  goodOrBad: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1,
  },
  mastersAcception: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1,
  },
});
module.exports = mongoose.model('SmallJournalNote', smallJournalNote);
