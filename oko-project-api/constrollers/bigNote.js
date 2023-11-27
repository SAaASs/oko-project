const BigJournalNote = require('../models/bigJournalNote');
module.exports.createBJN = (req, res, next) => {
  console.log(req.body);
  BigJournalNote.create([req.body], { runValidators: true }).then((movie) => {
    res.send(movie[0]);
  });
};
module.exports.getAllBJNs = (req, res, next) => {
  BigJournalNote.find({}).then((notes) => {
    res.send(notes);
  });
};
