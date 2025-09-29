import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// HTTP link for connecting to Strapi GraphQL endpoint
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL || 'http://localhost:1337/graphql',
});

// Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // Configure caching policies for different queries
          packages: {
            merge(existing, incoming) {
              return incoming || existing;
            },
          },
          services: {
            merge(existing, incoming) {
              return incoming || existing;
            },
          },
          stories: {
            merge(existing, incoming) {
              return incoming || existing;
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

export default client;