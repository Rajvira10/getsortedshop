import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import clientConfig from '../client-config'


const client = new ApolloClient({
    link: createHttpLink({
        uri: clientConfig.graphql,
        fetch: fetch
    }),
    cache: new InMemoryCache()
});

export default client;
