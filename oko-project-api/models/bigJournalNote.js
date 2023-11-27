const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UnauthorisedError = require('../errors/UnauthorisedError');
const bigJournalNote = new mongoose.Schema(
  {
    noteNumber: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30,
    },
    arrivalDate: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    soureceName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    type: {
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
    assemblyDate: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    lastFormationDate: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    lastExaminationDate: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelDiameterLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelDiameterRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    dateOfDispatchOrReleaseOnBail: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    destination: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    axisAnteriorPartLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    axisAnteriorPartRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    axisHubPartLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    axisHubPartRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    axisMiddlePartLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    axisMiddlePartRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelRimThicknessLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelRimThicknessRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelRollingLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelRollingRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelDiscThicknessLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelDiscThicknessRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelRidgeThicknessLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    wheelRidgeThicknessRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    rollingCircleDiameterLeft: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    rollingCircleDiameterRight: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    distanceBetweenInternalEdges: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    repairAxisChange: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    repairSolidRolledChange: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    repairFormedFromOldWheels: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    completeInspectionOfRollerAxleBoxesWithTurning: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 9,
    },
    completeInspectionOfRollerAxleBoxesWithoutTurning: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 9,
    },
    restorationOfTheRollerAxleJournalThread: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    intermediateRevisionOfRollerAxleBoxesWithTurning: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 9,
    },
    intermediateRevisionOfRollerAxleBoxesWithoutTurning: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 9,
    },
    otherWorks: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    fullInspectionDate: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    signatureForDefectsNeckAndSomeOtherThing: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    signatureForDefectsHalfHubAxis: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    signatureForDefectsInnerRingsOnAxisNeck: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    signatureForDefectsMiddleAxisPart: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    signatureWheelsetAcceptance: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 1,
    },
    signatureWheelsetReprofiling: {
      type: String,
      required: false,
      default: '0',
      minlength: 1,
      maxlength: 9,
    },
  },
  { versionKey: false },
);
module.exports = mongoose.model('BigJournalNote', bigJournalNote);