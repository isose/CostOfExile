function ParseCharacters(characterList) {
  const processedList = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const key in characterList) {
    if (characterList.hasOwnProperty(key)) {
      const characterData = characterList[key];
      const processedData = {
        name: characterData['name'],
        league: characterData['league'],
        level: characterData['level'],
        class: characterData['class'],
      };

      processedList.push(processedData);
    }
  }

  return processedList;
}

module.exports = {
  ParseCharacters,
};
