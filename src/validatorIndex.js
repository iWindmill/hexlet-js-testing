import right1 from './validatorRight1.js';
import wrong1 from './validatorWrong1.js';
import wrong2 from './validatorWrong2.js';
import wrong3 from './validatorWrong3.js';

export const getImplementation = {
  right1, wrong1, wrong2, wrong3,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return getImplementation[name];
};
