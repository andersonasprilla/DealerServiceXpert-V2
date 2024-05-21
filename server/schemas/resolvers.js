const { User } = require('../models');
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
      }
  }
};

module.exports = resolvers;
