const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UnauthorisedError = require('../errors/UnauthorisedError');
const smallJournalNote = new mongoose.Schema({
  noteNumber: {
    type: String,
    required: true,
  },
  diagramId: {
    type: String,
    required: true,
  },
  pressEquipDate: {
    type: String,
    required: true,
  },
  pairId: {
    type: String,
    required: true,
  },
  pairFullMarkLeft: {
    type: String,
    required: true,
  },
  pairFullMarkRight: {
    type: String,
    required: true,
  },
  hubDiameterLeft: {
    type: String,
    required: true,
  },
  hubDiameterRight: {
    type: String,
    required: true,
  },
  tensionLeft: {
    type: String,
    required: true,
  },
  tensionRight: {
    type: String,
    required: true,
  },
  pressurePowerUpLeft: {
    type: String,
    required: true,
  },
  pressurePowerUpRight: {
    type: String,
    required: true,
  },
  distanceBetweenInnerAndSide: {
    type: String,
    required: true,
  },
  goodOrBad: {
    type: String,
    required: true,
  },
  mastersAcception: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('SmallJournalNote', smallJournalNote);
