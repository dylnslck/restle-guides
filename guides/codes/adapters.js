const Restle = require('restle');
const Adapter = require('restle-mongodb');

const adapter = new Adatper({
  url: 'mongodb://...',
});

const app = new Restle({
  namespace: 'api',
  port: 3000,
  adapter: adapter,
});

app.on('ready', () => console.log(`Restle is listening at port ${app.port}`));
