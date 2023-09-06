const mongoose = require('mongoose');

const nomSchema = new mongoose.Schema({
  nom: String,
});

const Nom = mongoose.model('Nom', nomSchema);

module.exports = Nom;
