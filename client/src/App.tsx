import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Importez le fichier CSS

function App() {
  const [nom, setNom] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [noms, setNoms] = useState<string[]>([]); // Tableau pour stocker les noms

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNom(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post<{ nom: string }>('http://localhost:3000/enregistrer-nom', { nom })
      .then((response) => {
        setMessage(`Nom enregistré : ${response.data.nom}`);
        setNom('');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'enregistrement du nom', error);
      });
  };
  useEffect(() => {
    axios.get<any[]>('http://localhost:3000/noms') // Assurez-vous que votre route renvoie un tableau d'objets
      .then((response) => {
        // Extrayez les noms de chaque objet et stockez-les dans le state
        const noms = response.data.map((item) => item.nom);
        setNoms(noms);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des noms', error);
      });
  }, []);
  
  return (
    <div className="App">
      <h1 className="title">Enregistrement du nom</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">Nom:</label>
        <input
          type="text"
          value={nom}
          onChange={handleChange}
          className="input-field"
        />
        <br />
        <button type="submit" className="submit-button">Enregistrer</button>
      </form>
      <p className="message">{message}</p>
      {/* Affichez la liste des noms */}
      <div className="nom-list">
        <h2>Liste des Noms</h2>
        <ul>
          {noms.map((nom, index) => (
            <li key={index}>{nom}</li>
          ))}
        </ul>
      </div>    </div>
  );
}

export default App;
