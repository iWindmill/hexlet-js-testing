// @ts-check

export default () => {
    const checks = [];
    return {
      addCheck: (fn) => checks.push(fn),
      isValid: (data) => checks.every((fn) => fn(data)),
    };
  };
  