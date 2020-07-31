const { RESTDataSource } = require('apollo-datasource-rest');

class ArticleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:8000/api';
  }
  async getAllArticles() {
    return this.get('/articles');
  }
}

module.exports = ArticleAPI;
