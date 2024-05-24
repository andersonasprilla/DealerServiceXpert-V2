import { gql } from '@apollo/client';
export const QUERY_ME = gql`
query Me {
    me {
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
    }
  }

`;
export const QUERY_USER=gql`
query Users {
  users {
    userName
    email
  }
}
`;