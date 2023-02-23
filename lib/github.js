import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const getPinnedRepos = async () => {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "stavros-melidoniotis") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                  primaryLanguage {
                    name
                    color
                  }
                  stargazers {
                    totalCount
                  }
                  forks {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return pinnedItems;
};

export const getGists = async () => {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "stavros-melidoniotis") {
          gists(first: 100) {
            edges {
              node {
                id
                name
                files {
                  name
                  language {
                    name
                    color
                  }
                }
                description
                url
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const gists = user.gists.edges.map((edge) => edge.node);

  return gists;
};
