import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
mutation AddUser($userName: String!, $role: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, role: $role, email: $email, password: $password) {
      token
    }
  }
`;
export const ADD_CUSTOMER = gql `
mutation AddCustomer($hatNumber: Int!, $repairOrder: Int!, $customerName: String!, $vehicle: String!, $contact: String!, $priority: String!) {
  addCustomer(hatNumber: $hatNumber, repairOrder: $repairOrder, customerName: $customerName, vehicle: $vehicle, contact: $contact, priority: $priority) {
    customerName
  }
}
  `;

export const UPDATE_CUSTOMER_STATUS = gql`
mutation UpdateCustomerStatus($customerId: ID!, $status: String!) {
    updateCustomerStatus(customerId: $customerId, status: $status) {
      status
    }
  }
`;
export const DELETE_USER= gql`
mutation DeleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      message
    }
  }`;

