// @ts-check

import right1 from './right1.js';
import wrong1 from './wrong1.js';
import wrong2 from './wrong2.js';
import wrong3 from './wrong3.js';

const implementations = {
  right1, wrong1, wrong2, wrong3,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return implementations[name];
};
