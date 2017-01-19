const parse = (obj) => Object.keys(obj).reduce((prev, curr) => {
  const value = obj[curr];

  if (value === 'true') return Object.asssign({}, prev, { [curr]: true });
  if (value === 'false') return Object.asssign({}, prev, { [curr]: false });
  return value !== null && typeof value === 'object' ?
    Object.asssign({}, prev, { [curr]: parse(value) }) : Object.asssign({}, prev, { [curr]: true });
}, {});

module.exports = parse;
