const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("src/app/db/storage/key-info.json");
const db = lowdb(adapter);

const resetKeyInfo = () => {
  const defaultDB = lowdb(
    new FileSync("src/app/db/storage/key-default-info.json")
  );
  const defaultKeyInfo = defaultDB.get("keyInfo").value();

  db.has("keyInfo").unset("keyInfo").write();
  db.set("keyInfo", defaultKeyInfo).write();
};

const getKeyInfo = () => {
  return db.get("keyInfo").value();
};

const setKeyHints = (letter, hints) => {
  db.get("keyInfo").flatten().find({ letter }).assign({ hints }).write();
};

console.log("getKeyInfo: ", getKeyInfo());

module.exports = {
  resetKeyInfo,
  getKeyInfo,
  setKeyHints,
};
