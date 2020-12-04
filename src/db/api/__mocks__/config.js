// const { DbService } = require("./dbService");

// const db = DbService("/app-config.json");

let config = {
  appearance: {
    mode: true,
    theme: "default",
    transparency: 0.5,
  },
};

const updateConfig = (path, value) => {
  config[path] = value;
};

const getConfig = (path) => config[path];

module.exports = { updateConfig, getConfig };
