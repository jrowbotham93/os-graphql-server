const { ApolloServer } = require('apollo-server');
const OrganizationAPI = require('./datasources/organizationAPI');
const ArticleAPI = require('./datasources/articleAPI');
const UserApi = require('./datasources/userApi')

const resolvers = require('./resolvers');
const typeDefs = require('./schemas');

const server = new ApolloServer({
  typeDefs,
  resolvers,

  dataSources: () => {
    return {
      organizationAPI: new OrganizationAPI(),
      articleAPI: new ArticleAPI()
    };
  }
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
