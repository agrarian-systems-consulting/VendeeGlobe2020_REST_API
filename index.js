const express = require('express');
const app = express(); // Créé le serveur Express
const PORT = 3000

// Premier endpoint de l'API
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`🚀 L'application tourne sur le port ${PORT}`)
})