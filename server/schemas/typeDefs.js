const typeDefs = `

type User {
  _id: ID!
  userName: String!
  role: String!
  email: String!
  password: String!
  customers: [Customer!]
}

type Customer {
  _id: ID!
  hatNumber: String!
  repairOrder: String!
  openedAt: String!
  customerName: String!
  vehicle: String!
  contact: String!
  priority: String!
  status: String!
  user: User
}

type Auth {
  token: ID!
  user: User
}

type Query {
  customers: [Customer!]!
  users: [User!]!
}

type Mutation {
  addUser(userName: String!, role: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addCustomer(hatNumber: String!, repairOrder: String!, customerName: String!, vehicle: String!, contact: String!, priority: String!): Customer
  updateCustomerStatus(customerId: ID!, status: String!): Customer
  deleteUser(userId: ID!): Boolean
}

`;

module.exports = typeDefs;
