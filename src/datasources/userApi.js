const { RESTDataSource } = require('apollo-datasource-rest');

class userAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:8000/api';
  }
  async findOrCreateUser() {
    return this.post('/login');
  }
}

module.exports = userAPI;
