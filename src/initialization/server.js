const { SERVER_PORT } = require('~/configs/config');
const setupDatabase = require('~/initialization/database');
const initialization = require('~/initialization/initialization');

const setupServer = async (app) => {
  await setupDatabase();
  initialization(app);

  return app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
  });
};

module.exports = setupServer;
