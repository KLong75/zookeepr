const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals')
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data

app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data

app.use(express.json());

app.use(express.static('public'));

app.listen(3001, () => {
  console.log(`API server now on port ${PORT}`);
});
