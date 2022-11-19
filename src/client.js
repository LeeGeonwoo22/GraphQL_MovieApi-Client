import { ApolloClient ,gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
})
// graphql 쿼리 직접 입력 
client.query({
    query:gql`
    {
        allMovies {
          title
        }
      }
    `,
}).then(data => console.log(data))

export default client; 