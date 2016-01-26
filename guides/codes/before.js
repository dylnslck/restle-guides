const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// This function fires before all requests to your app. This is a good place to
// perform auth checks, etc.
app.before(function(req, res, next) {
  const token = req.get('authorization');
  const secret = new Buffer(process.env.SECRET_KEY, 'base64');

  jwt.verify(token, secret, (err, decoded) => {
    return err ? res.sendStatus(403) : next();
  });
});

// This function fires before a user is created, i.e. a POST request to /api/users.
app.before('user.create', function(req, res, next) {
  const numRounds = 10;
  const password = req.body.data.attributes.password;

  bcrypt.hash(password, numRounds, (err, hash) => {
    if (err)
      return res.status(500).json(err);

    req.body.data.attributes.password = hash;
    return next();
  });
});
