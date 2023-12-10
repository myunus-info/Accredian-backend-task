const init = async () => {
  const path = require('path');
  const async = require('async');
  const { initEnvironmentVariables } = require(path.join(process.cwd(), 'src/config/config'));
  await initEnvironmentVariables();
  const nodecache = require(path.join(process.cwd(), 'src/config/lib/nodecache'));
  const sequelize = require(path.join(process.cwd(), 'src/config/lib/sequelize'));
  await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${nodecache.getValue('DB_NAME')}`);
  const User = require(path.join(process.cwd(), 'src/modules/user/user.model'));
  await sequelize.sync();

  function userSeeder(callback) {
    User.findOrCreate({
      where: { username: 'admin@gmail.com' },
      defaults: { name: 'mahdi', password: '123456' },
    }).then(function () {
      callback();
    });
  }

  async.waterfall([userSeeder], err => {
    if (err) console.error(err);
    else console.info('DB seed completed!');
    process.exit();
  });
};

init();
