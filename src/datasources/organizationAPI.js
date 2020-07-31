const { RESTDataSource } = require('apollo-datasource-rest');

class OrganizationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:8000/api';
  }
  async getAllOrganizations() {
    return this.get('/organizations');
  }
}

module.exports = OrganizationAPI;
