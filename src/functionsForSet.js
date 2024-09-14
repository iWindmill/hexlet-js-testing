// @ts-check
/* eslint-disable no-param-reassign */

import _ from 'lodash';

export const getFunction = {
  right1: _.set,
  wrong1: (obj, path, value) => {
    _.set(obj, path, value);
    obj.key = 'value';
    return obj;
  },
  wrong2: (obj, path, value) => {
    obj[path] = value;
    return obj;
  },
  wrong3: (obj, path, value) => {
    if (_.get(obj, path) !== undefined) {
      _.set(obj, path, value);
    }
    return obj;
  },
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return getFunction[name];
};
