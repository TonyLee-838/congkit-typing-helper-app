// const { DbService } = require("./dbService");

// const db = DbService("/congkit-dictionary.json");

// e.g: input=例 return on

const dict = {
  日: "a",
  明: "ab",
};

const queryCharacter = (input) => {
  return dict[input];
};

module.exports = {
  queryCharacter,
};
