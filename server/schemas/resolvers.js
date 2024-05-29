const { User, Customer } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    customers: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('customers');
        return user.customers;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async (parent, args, context) => {
      if (context.user && context.user.role === 'Manager') {
        return User.find({ role: 'Service Advisor' }); 
      }
      throw new AuthenticationError('Not authorized');
    },
  },
  Mutation: {
    addUser: async (parent, { userName, role, email, password }, context) => {
      if (context.user && context.user.role === 'Manager') {
        const user = await User.create({ userName, role, email, password });
        const token = signToken(user);
        return { token, user };
      }
      throw new AuthenticationError('Not authorized');
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
    addCustomer: async (parent, { hatNumber, repairOrder, customerName, vehicle, contact, priority }, context) => {
      if (context.user) {
        const customer = await Customer.create({ hatNumber, repairOrder, customerName, vehicle, contact, priority });
        await User.findByIdAndUpdate(context.user._id, { $push: { customers: customer._id } });
        return customer;
      }
      throw new AuthenticationError('Not logged in');
    },
    updateCustomerStatus: async (parent, { customerId, status }, context) => {
      if (context.user) {
        const validStatuses = ['In Repair', 'Finished', 'Back Order'];
        if (!validStatuses.includes(status)) {
          throw new Error('Invalid status');
        }
        const customer = await Customer.findByIdAndUpdate(customerId, { status }, { new: true });
        return customer;
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteUser: async (parent, { userId }, context) => {
      if (context.user && context.user.role === 'Manager') {
        const user = await User.findById(userId);
        if (!user) {
          throw new AuthenticationError('User not found');
        }
        for (const customerId of user.customers) {
          await Customer.findByIdAndUpdate(customerId, { user: null });
        }
        await User.findByIdAndDelete(userId);
        return { message: `User with id ${userId} deleted` };
      }
      throw new AuthenticationError('Not authorized');
    },
  },
};

module.exports = resolvers;
