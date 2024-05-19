const db = require('../config/connection');
const { User } = require('../models');
const userData = require('./userSeeds.json');

db.once('open', async () => {
  await User.deleteMany();

  await User.create(userData);

  console.log('users seeded');

  process.exit();
}
);