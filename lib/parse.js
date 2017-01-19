const mapValues = require('lodash.mapvalues');
const isObject = require('lodash.isobject');

const parse = (obj) => mapValues(obj, value => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return isObject(value) ? parse(value) : value;
});


module.exports = parse;
