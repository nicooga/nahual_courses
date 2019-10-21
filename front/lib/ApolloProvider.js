import React from 'react'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider as ActualApolloProvider } from 'react-apollo-hooks'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000' }),
  cache: new InMemoryCache(),
})

const ApolloProvider = ({ children }) => (
  <ActualApolloProvider client={client}>
    {children}
  </ActualApolloProvider>
)

export default ApolloProvider
