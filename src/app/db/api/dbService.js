const lowdb = require("lowdb");
const path = require("path");
const FileSync = require("lowdb/adapters/FileSync");
const { app, remote } = window.electron;

const STORE_PATH = app
  ? app.getPath("userData")
  : remote.app.getPath("userData");

console.log("STORE_PATH: ", STORE_PATH);

const DbService = (fileName) =>
  lowdb(new FileSync(path.join(STORE_PATH, "/", fileName)));

module.exports = DbService;
