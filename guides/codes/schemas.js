const blog = {
  attributes: {
    'title': { type: 'string' },
    'content': { type: 'string' },
    'published-on': { type: 'date' },
  },
  relationships: {
    'author': { type: 'user', isMany: false },
    'comments': { type: 'comment', isMany: true },
  },
};

const comment = {
  attributes: {
    'content': { type: 'string' },
    'published-on': { type: 'date' },
  },
  relationships: {
    'author': { type: 'user', isMany: false },
  },
};

const user = {
  attributes: {
    'name': { type: 'string' },
    'password': { type: 'string' },
    'email': { type: 'string' },
  },
}

const schemas = { blog, comment, user };

module.exports = schemas;
