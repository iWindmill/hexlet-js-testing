// @ts-check

const checks = [];

export default () => ({
  addCheck: (fn) => checks.push(fn),
  isValid: () => true,
});
