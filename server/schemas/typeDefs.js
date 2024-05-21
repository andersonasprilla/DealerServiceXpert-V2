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
    user: User!
}

type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(userName: String!, role: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;