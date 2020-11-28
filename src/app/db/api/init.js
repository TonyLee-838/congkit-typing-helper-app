const keys = require("../../keyInfo");
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

  console.log("Db initialized!");
};

module.exports = dbInit;
