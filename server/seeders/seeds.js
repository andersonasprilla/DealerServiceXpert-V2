const db = require('../config/connection');
const { User, Customer } = require('../models');
const userData = require('./userSeeds.json');
const customerData = require('./customerSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Customer.deleteMany({});
    await User.create(userData);
    await Customer.create(customerData);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

