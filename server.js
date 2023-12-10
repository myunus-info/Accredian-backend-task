// Starts the app
(async () => {
  const path = require('path');
  const { initEnvironmentVariables } = require(path.join(process.cwd(), 'src/config/config'));
  await initEnvironmentVariables();
  const app = require(path.join(process.cwd(), 'src/config/lib/app'));
  app.start();
})();
