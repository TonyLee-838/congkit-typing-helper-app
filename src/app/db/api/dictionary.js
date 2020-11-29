const { DbService } = require("./dbService");

const db = DbService("/congkit-dictionary.json");

// e.g: input=例 return on
const queryCharacter = (input) => {
  return db.get("dict").get(input).value();
};

module.exports = {
  queryCharacter,
};
