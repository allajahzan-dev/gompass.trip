import { gql } from '@apollo/client';

// GraphQL query for fetching travel packages (Strapi v5 flat structure)
export const GET_PACKAGES = gql`
  query GetPackages {
    packages {
      documentId
      title
      location
      days
      description1
      description2
      price
      href
      includes
      createdAt
      updatedAt
    }
  }
`;

// GraphQL query for fetching a single package by documentId (Strapi v5 flat structure)
export const GET_PACKAGE_BY_ID = gql`
  query GetPackageById($documentId: ID!) {
    package(documentId: $documentId) {
      documentId
      title
      location
      days
      description1
      description2
      price
      href
      includes
      createdAt
      updatedAt
    }
  }
`;

// GraphQL query for fetching services (Strapi v5 flat structure)
export const GET_SERVICES = gql`
  query GetServices {
    services {
      documentId
      title
      description
      icon
      createdAt
      updatedAt
    }
  }
`;

// GraphQL query for fetching customer stories/testimonials (Strapi v5 flat structure)
export const GET_STORIES = gql`
  query GetStories {
    stories {
      documentId
      name
      location
      review
      rating
      createdAt
      updatedAt
    }
  }
`;