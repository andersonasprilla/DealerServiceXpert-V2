const { User, Customer } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('customers');
      }
      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, { userName, role, email, password }) => {
      const user = await User.create({ userName, role, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addCustomer: async (parent, { hatNumber, repairOrder, customerName, vehicle, contact, priority, status, userId }) => {
      const customer = await Customer.create({ hatNumber, repairOrder, customerName, vehicle, contact, priority, status, user: userId });
      await User.findByIdAndUpdate(userId, { $push: { customers: customer._id } });
      return customer;
      
    },
    updateCustomerStatus: async (parent, { customerId, status }) => {
      const validStatuses = ['Checked In', 'In Repair', 'Finished'];
      if (!validStatuses.includes(status)) {
        throw new Error('Invalid status');
      }
      const customer = await Customer.findByIdAndUpdate(customerId, { status }, { new: true });
      return customer;
    },
    deleteUser: async (parent, { userId }) => {
      const user = await User.findById(userId);
      if (!user) {
        throw new AuthenticationError('User not found');
      }
      user.customers.forEach(async (customerId) => {
        await Customer.findByIdAndUpdate(customerId, { user: null });
      });
      await User.findByIdAndDelete(userId);
      return `User with id ${userId} deleted`;
    }
  }
};

module.exports = resolvers;
