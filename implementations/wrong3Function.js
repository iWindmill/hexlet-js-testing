// @ts-check

const isLeapYear = (year) => {
    const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    return result;
  };
  
  const thirtyDayMonths = [4, 6, 9, 11];
  
  const getDaysInMonth = (month, year) => {
    if (month < 1 || month > 12) {
      return null;
    }
  
    if (month === 2) {
      if (isLeapYear(year)) {
        return 29;
      }
  
      return 28;
    }
  
    if (thirtyDayMonths.includes(month)) {
      return 31;
    }
  
    return 30;
  };
  
  export default getDaysInMonth;
  