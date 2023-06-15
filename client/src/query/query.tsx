import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query {
    products {
      _id
      name
    }
  }
`;

const GET_ORDERS = gql`
  query {
    orders {
      _id
      product {
        _id
      }
      quantity
      status
    }
  }
`;


export { GET_PRODUCTS ,GET_ORDERS };