const remote = window.remote;

const terminateApp = () => {
  remote.app.quit();
};

module.exports = { terminateApp };
