import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * This is the component for the apollo client. Any calls to the apollo client 
 * within this component will use the set configuration.
 * @date 7/31/2023 - 3:23:14 PM
 *
 * @export
 * @param {{ children: any; }} {
  children,
}
 * @returns {*}
 */
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