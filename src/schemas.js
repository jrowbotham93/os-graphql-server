module.exports = typeDefs = `

type Query {
  user(id: ID!): User!
  users: [User!]
  organizations(pageSize: Int, after: String): organizationConnection!
  organization(id: ID!): Organization!
  articles: [Article!]!
}

type User {
  id: ID!
  username: String
  email: String
  full_name: String
  disabled: String
}

type organizationConnection {
  cursor: String
  hasMore: Boolean
  organizations: [Organization]!
}

type Organization {
  id: ID!
  name: String
  country: String
  scraped_from: String
  source_reliability: String
  source_reliability_description: String
  source_reliability_summary: String
  factual_reporting: String
  world_press_freedom_rank: String
  history: String
  articles: [Article!]
  article(id: ID!): Article
}

type Article {
  id: ID!
  title: String!
  url: String!
  published_at: String!
  author: String!
  content: String!
  description: String!
  organization_id: ID!
}
`;
