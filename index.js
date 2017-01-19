const parse = require('./lib/parse');

module.exports = () => {
  return (req, res, next) => {
    req.query = parse(req.query);
    next();
  };
};
