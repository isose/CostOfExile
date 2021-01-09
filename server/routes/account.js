const express = require('express');
const axios = require('axios');
const parser = require('../scripts/parser');

const router = express.Router();

router.get('/characters', (req, res) => {
  const { accountName } = req.query;

  const url = `https://www.pathofexile.com/character-window/get-characters?accountName=${accountName}`;
  axios.get(`${url}`).then(
    (characterList) => {
      const processedList = parser.ParseCharacters(characterList.data);
      res.json(processedList);
    },
    (error) => {
      console.error(error);
      // Status 422: Unprocessable Entity
      res.sendStatus(422);
    },
  );
});

module.exports = router;
