import { gql } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation createProduct($input: CreateProductInput!) {
    createProduct(createProductInput: $input) {
      _id
      name
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation updateProduct($input: UpdateProductInput!) {
    updateProduct(updateProductInput: $input) {
      _id
      name
      price
    }
  }
`;
const CREATE_ORDER = gql`
  mutation createOrder($productId: String!, $quantity: Float!) {
    createOrder(productId: $productId, quantity: $quantity) {
      _id
      product {
        _id
      }
      quantity
      status
    }
  }
`;

export { CREATE_PRODUCT ,UPDATE_PRODUCT ,CREATE_ORDER };