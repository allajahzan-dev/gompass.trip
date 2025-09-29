'use client';

import { ApolloProvider } from '@apollo/client/react';
import client from './apollo-client';

interface ApolloWrapperProps {
  children: React.ReactNode;
}

// Apollo Provider wrapper component
export default function ApolloWrapper({ children }: ApolloWrapperProps) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}