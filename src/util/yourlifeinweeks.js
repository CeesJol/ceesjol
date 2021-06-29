export const getYearsAndWeeksPassed = (date) => {
  var birthday = new Date(date);
  var currentDate = new Date();

  var res = currentDate - birthday; // Subtract birthday from current date
  var weeks = ((res / 3600 / 24 / 1000) % 365) / 7; // Convert to weeks (ignore years)
  var years = res / 3600 / 24 / 1000 / 365; // Convert to years

  // Add one year, this will be (partially) filled with weeks
  years = years + 1;

  return [Math.floor(weeks), Math.floor(years)];
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

/**
 * Reset birthday localStorage
 * Used in case birthday is of invalid type (eg. "null")
 */
export const resetLocalStorage = () => {
  localStorage.removeItem("birthday");
};
