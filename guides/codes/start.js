// Create a very basic application.
const Restle = require('restle');

const app = new Restle({
  namespace: 'api',
  port: 3000,
});

app.on('ready', () => console.log(`Restle is listening at port ${app.port}`));
