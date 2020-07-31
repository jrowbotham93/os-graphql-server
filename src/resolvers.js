const { paginateResults } = require('./utils');

module.exports = resolvers = {
  Query: {
    organizations: async (_, { pageSize, after }, { dataSources }) => {
      const allOrganizations = await dataSources.organizationAPI.getAllOrganizations();
      const organizations = paginateResults({
        after,
        pageSize,
        results: allOrganizations
      });

      return {
        organizations,
        cursor: organizations.length
          ? organizations[organizations.length - 1].cursor
          : null,
        hasMore: organizations.length
          ? organizations[organizations.length - 1].cursor !==
            allOrganizations[allOrganizations.length - 1].cursor
          : false
      };
    },
    organization: async (_, { id }, { dataSources }) => {
      let organizationList = dataSources.organizationAPI.getAllOrganizations();
      return organizationList.then(list =>
        list.find(organization => organization.id === id)
      );
    }
  },
  Organization: {
    articles: async (parent, __, { dataSources }) => {
      let articlesList = dataSources.articleAPI.getAllArticles();
      return articlesList.then(articles =>
        articles.filter(article => article.organization_id == parent.id)
      );
    },

    article: async (parent, { id }, { dataSources }) => {
      let articlesList = dataSources.articleAPI.getAllArticles();
      return articlesList.then(a => {
        let articles = a.filter(
          article => article.organization_id == parent.id
        );
        return articles.find(article => article.id === id);
      });
    }
  },
  Mutation: {
    login: async (_, { email }, { dataSources }) => {
      const user = await dataSources.userAPI.findOrCreateUser({ email });
      if (user) return Buffer.from(email).toString('base64');
    }
  },
};
