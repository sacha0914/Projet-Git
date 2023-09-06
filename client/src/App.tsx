import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Faites une requête GET vers votre API Express
    axios.get<string>('http://localhost:3000/hello') // Assurez-vous que l'URL correspond à l'adresse de votre API
      .then((response) => {
        setMessage(response.data); // Mettez à jour l'état de votre composant avec la réponse de l'API
      })
      .catch((error) => {
        console.error('Erreur lors de la requête API', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Réponse de l'API :</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
