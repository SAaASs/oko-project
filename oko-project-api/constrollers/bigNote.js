const BigJournalNote = require('../models/bigJournalNote');
module.exports.createBJN = (req, res, next) => {
  console.log(req.body);
  BigJournalNote.create([req.body], { runValidators: true })
    .then((movie) => {
      res.send(movie[0]);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports.getAllBJNs = (req, res, next) => {
  BigJournalNote.find({}).then((notes) => {
    res.send(notes);
  });
};
module.exports.updateBJN = (req, res, next) => {
  // console.log('pinus', req.params);
  BigJournalNote.findByIdAndUpdate(req.params.noteId, req.body, {
    runValidators: true,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
};
