import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getAllUsers {
    firstName
    lastName
    id
    email
    phoneNumber
    usersCategories {
      name
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    firstName
    lastName
    email
    phoneNumber
    usersCategories {
      name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser
`;

export const DELETE_USER = gql`
  query deleteUser
`;
