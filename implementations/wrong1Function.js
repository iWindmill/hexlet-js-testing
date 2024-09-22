// @ts-check

const isLeapYear = (year) => {
    const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    return result;
  };
  
  const thirtyDayMonths = [4, 6, 9, 11];
  
  const getDaysInMonth = (month, year) => {
    if (month === 2) {
      if (isLeapYear(year)) {
        return 29;
      }
  
      return 28;
    }
  
    if (thirtyDayMonths.includes(month)) {
      return 30;
    }
  
    return 31;
  };
  
  export default getDaysInMonth;
  