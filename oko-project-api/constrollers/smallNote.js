const SmallJournalNote = require('../models/smallJournalNote');
module.exports.createSJN = (req, res, next) => {
  console.log(req.body);
  SmallJournalNote.create([req.body], { runValidators: true }).then((movie) => {
    res.send(movie[0]);
  });
};
module.exports.getAllSJNs = (req, res, next) => {
  SmallJournalNote.find({}).then((notes) => {
    res.send(notes);
  });
};
module.exports.updateSJN = (req, res, next) => {
  // console.log('pinus', req.params);
  SmallJournalNote.findByIdAndUpdate(req.params.noteId, req.body, {
    runValidators: true,
  }).then((result) => {
    res.send(result);
  });
};
