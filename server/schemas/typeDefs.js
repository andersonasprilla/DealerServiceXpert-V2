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
  hatNumber: Int!
  repairOrder: Int!
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
  me: User
  users: [User!]!
}

type Mutation {
  addUser(userName: String!, role: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addCustomer(hatNumber: Int!, repairOrder: Int!, customerName: String!, vehicle: String!, contact: String!, priority: String!, status: String!, userId: ID!): Customer
  updateCustomerStatus(customerId: ID!, status: String!): Customer
  deleteUser(userId: ID!): User
}
`;

module.exports = typeDefs;
