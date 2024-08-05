// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Path to your recipes list file
const recipesFilePath = path.join(__dirname, 'src', 'mock', 'recipes-list.js');
let recipes = require(recipesFilePath);

// Endpoint to get all recipes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// Endpoint to add a new recipe
app.post('/api/recipes', (req, res) => {
  const newRecipe = req.body;
  newRecipe.id = recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 0; // Assign a new unique ID
  recipes.push(newRecipe);

  // Write updated recipes back to the file
  fs.writeFile(recipesFilePath, `module.exports = ${JSON.stringify(recipes, null, 2)}`, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to save recipe' });
    }
    res.status(201).json(newRecipe);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
