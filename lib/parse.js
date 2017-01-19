const parse = (obj) => Object.keys(obj).reduce((prev, curr) => {
  const value = obj[curr];

  if (value === 'true') return Object.assign({}, prev, { [curr]: true });
  if (value === 'false') return Object.assign({}, prev, { [curr]: false });
  return value !== null && typeof value === 'object' ?
    Object.assign({}, prev, { [curr]: parse(value) }) : Object.assign({}, prev, { [curr]: value });
}, {});

module.exports = parse;
