const express = require('express');
const app = express();
const port = 3000; // Vous pouvez choisir le port de votre choix

// Middleware pour gérer les autorisations CORS (pour les requêtes provenant d'autres domaines)
const cors = require('cors');
app.use(cors());

// Créez une route pour répondre à la requête GET sur /hello
app.get('/hello', (req, res) => {
  res.send('Hello');
});

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
