module.exports = {
  client: {
    includes: ['./apps/frontend/src/**/*.{tsx,ts}'],
    tagName: 'gql',
    service: {
      name: 'api',
      url: 'http://localhost:3333/graphql',
    },
  },
};
