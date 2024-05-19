const db = require('../config/connection');
const { User, Customer } = require('../models');
const userData = require('./userSeeds.json');
const customerData = require('./customerSeeds.json');

// Helper function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Customer.deleteMany({});

    const customers = await Customer.create(customerData);
    const customerIds = customers.map(customer => customer._id);

    // Shuffle the customer IDs
    const shuffledCustomerIds = shuffleArray(customerIds);

    // Create users with assigned customers
    const usersWithCustomers = userData.map((user, index) => {
      const assignedCustomers = shuffledCustomerIds.slice(index * 3, (index + 1) * 3);
      return {
        ...user,
        customers: assignedCustomers
      };
    });

    const createdUsers = await User.create(usersWithCustomers);

    // Update customers with assigned users
    for (let i = 0; i < createdUsers.length; i++) {
      const user = createdUsers[i];
      const assignedCustomers = user.customers;

      await Customer.updateMany(
        { _id: { $in: assignedCustomers } },
        { $set: { user: user._id } }
      );
    }

    console.log('Data seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
