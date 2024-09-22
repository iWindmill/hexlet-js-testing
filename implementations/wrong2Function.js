// @ts-check

const thirtyDayMonths = [4, 6, 9, 11];

const getDaysInMonth = (month) => {
  if (month < 1 || month > 12) {
    return null;
  }

  if (month === 2) {
    return 28;
  }

  if (thirtyDayMonths.includes(month)) {
    return 30;
  }

  return 31;
};

export default getDaysInMonth;
