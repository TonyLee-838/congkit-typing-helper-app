const keys = require("./defaultkeyInfo.ts");
const DbService = require("./dbService");

// This init script should only be executed once at user's first installation.
const dbInit = () => {
  const defaultKeyInfoDb = DbService("key-default-info.json");
  defaultKeyInfoDb.defaults({ keyInfo: [] }).write();
  defaultKeyInfoDb.set("keyInfo", keys).write();

  const keyInfoDb = DbService("key-info.json");
  keyInfoDb.defaults({ keyInfo: [] }).write();
  keyInfoDb.set("keyInfo", keys).write();

  const memoDb = DbService("memo.json");
  memoDb.defaults({ memo: [] }).write();

  const congkitDb = DbService("congkit-dictionary.json");
  const congkit = require("./congkit5_TC.json");
  congkitDb.defaults({ dict: congkit }).write();

  console.info("Local Database initialized!");
};

module.exports = dbInit;
