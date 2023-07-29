import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';

export default function Provider({
  children,
}){
  const { getAccessTokenSilently } = useAuth0();
  
  const client = React.useMemo(() => {
    const httpLink = createHttpLink({
      uri: process.env.REACT_APP_API_SERVER_URL + '/graphql',
    });
    
    const authLink = setContext(async (_, { headers }) => { 
      const token = await getAccessTokenSilently();    
      console.log('token:', token);   
      
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
    });
  
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}