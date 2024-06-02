import { gql } from '@apollo/client';
export const QUERY_CUSTOMER = gql`
query Customers {
  customers {
    _id
    hatNumber
    repairOrder
    openedAt
    customerName
    vehicle
    contact
    priority
    status
  }
}`;
export const QUERY_USER =gql`
query Users {
  users {
    _id
    userName
    role
    email
  }
}
`;