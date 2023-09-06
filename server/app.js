const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

const Nom = require('./models/Nom'); // Importez votre modèle Mongoose

mongoose.connect("mongodb://mongo-dev:27017/tpdocker")
  .then(() => {
    console.log('Connecté à MongoDB');
  })
  .catch((error) => {
    console.error(error);
  });

// Route POST pour l'enregistrement d'un nom
app.post('/enregistrer-nom', async (req, res) => {
  try {
    const { nom } = req.body;

    // Créez une nouvelle instance de "Nom" en utilisant le modèle Mongoose
    const nouveauNom = new Nom({
      nom,
    });

    // Enregistrez le nom dans la base de données
    const nomEnregistre = await nouveauNom.save();

    res.json({ nom: nomEnregistre.nom }); // Renvoie le nom enregistré en réponse
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement du nom' });
  }
});

// Route GET pour récupérer tous les noms
app.get('/noms', async (req, res) => {
  try {
    const noms = await Nom.find(); // Utilisez la méthode find() pour récupérer tous les noms

    res.json(noms); // Renvoyez les noms en réponse
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la récupération des noms' });
  }
});

app.get('/hello', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
