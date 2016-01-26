const Restle = require('restle');
const schemas = require('./schemas');

const app = new Restle({
  namespace: 'api',
  port: 3000,
});

app.register(schemas);
app.on('ready', () => console.log(`Restle is listening at port ${app.port}`));
