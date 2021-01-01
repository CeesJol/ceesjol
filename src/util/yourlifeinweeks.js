/**
 * Calculate number of weeks passed
 * Source: https://www.javatpoint.com/calculate-current-week-number-in-javascript#:~:text=Approach%202%3A%20Calculate%20the%20week%20number%20for%20a%20predefined%20date&text=Initialize%20it%20by%20creating%20the,getTime()%3B
 */
export const getWeeksPassed = (date) => {
  date = new Date(date);

  //find the year of the entered date
  var oneJan = new Date(date.getFullYear(), 0, 1);

  // calculating number of days in given year before the given date
  var numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));

  // adding 1 since to current date and returns value starting from 0
  var result = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);

  return 52 - result;
};

/**
 * Calculate number of years passed
 */
export const getYearsPassed = (date) => {
  return new Date().getFullYear() - date.getFullYear();
};

/**
 * Get the className for a square
 * Used to see if it should be colored or not
 */
export const getSquareClassName = (year, week, yearsPassed, weekNumber) => {
  const className = "squares__square";

  if (year < yearsPassed - 1 || (year < yearsPassed && week <= weekNumber)) {
    return `${className} ${className}--colored`;
  }

  return className;
};

/**
 * Generate a list of numbers from 0 to n
 * Used to map over years and weeks
 */
export const generateNumbersArray = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
};
