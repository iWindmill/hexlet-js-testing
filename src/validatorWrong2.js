// @ts-check

const checks = [];

export default () => ({
  addCheck: (fn) => [...checks, fn],
  isValid: (data) => checks.every((fn) => fn(data)),
});
