const usr = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 20,
    },
    username: {
      type: 'string',
      minLength: 2,
      maxLength: 20,

    },
    pwd: {
      type: ['string', 'number'],
      pattern: '^[a-z]{3}[0-9]{3}?$',
    },
    profile: {
      type: 'object',
      properties: {
        age: {
          type: 'number',
          minimum: 18,
          exclusiveMaximum: 30,
        },
      },

    },
  },
};
module.exports = usr;
