const fs = window.fs;
const path = window.path;

const { DbService, STORE_PATH } = require("./dbService");
const { keyInfo } = require("../resource/key-default-info.json");
const congkit = require("../resource/congkit5_TC.json");
const config = require("../resource/default-config.json");

// This init script should only be executed once at user's first installation.
const initializeDb = () => {
  const defaultKeyInfoDb = DbService("key-default-info.json");
  defaultKeyInfoDb.defaults({ keyInfo }).write();

  const keyInfoDb = DbService("key-info.json");
  keyInfoDb.defaults({ keyInfo }).write();

  const memoDb = DbService("memo.json");
  memoDb.defaults({ memo: [] }).write();

  const congkitDb = DbService("congkit-dictionary.json");
  congkitDb.defaults({ dict: congkit }).write();

  const configDb = DbService("app-config.json");
  configDb.defaults(config).write();

  console.info("Local Database initialized!");
};

const allDbFilesExist = () => {
  const PATHS = [
    "key-default-info.json",
    "key-info.json",
    "memo.json",
    "congkit-dictionary.json",
    "app-config.json",
  ];
  return PATHS.every((PATH) => fs.existsSync(path.join(STORE_PATH, "/", PATH)));
};

const generateIfFileMissing = () => {
  if (!allDbFilesExist()) {
    console.warn("Missing files are detected. Regenerating...");
    initializeDb();
  }
};

module.exports = generateIfFileMissing;
