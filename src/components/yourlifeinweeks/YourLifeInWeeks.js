import React from "react";
import "../../styles/components/yourlifeinweeks/square.scss";
import {
  getSquareClassName,
  generateNumbersArray,
  getWeeksPassed,
  getYearsPassed,
  resetLocalStorage,
} from "../../util/yourlifeinweeks";

const YourLifeInWeeks = ({ birthday }) => {
  const TOTAL_YEARS = 90;
  const WEEKS_PER_YEAR = 52;
  let totalYears = generateNumbersArray(TOTAL_YEARS);
  let totalWeeks = generateNumbersArray(WEEKS_PER_YEAR);
  let yearsPassed = 0,
    weeksPassed = 0;
  const getSquareContent = (year, week) => {
    if (year > 0 && week > 0) return null;
    if (year === 0 && week === 0) {
      return (
        <>
          <p className="squares__indication squares__indication--week">0</p>
          <p className="squares__indication squares__indication--year">0</p>
        </>
      );
    }

    if (year === 0 && week % 5 === 0) {
      return (
        <p className="squares__indication squares__indication--week">{week}</p>
      );
    }
    if (week === 0 && year % 5 === 0) {
      return (
        <p className="squares__indication squares__indication--year">{year}</p>
      );
    }
    return null;
  };
  try {
    // How many years have passed since birth
    yearsPassed = getYearsPassed(birthday);
    // How many weeks have passed since most recent birthday
    weeksPassed = getWeeksPassed(birthday);
  } catch (e) {
    resetLocalStorage();
  }
  return (
    <div className="squares__container">
      <p className="squares__indication--week-text">Weeks &rarr;</p>
      <p className="squares__indication--year-text">&larr; Years</p>
      {totalYears.map((year) => (
        <div className="squares__row" key={`row-${year}`}>
          {totalWeeks.map((week) => (
            <div
              className={getSquareClassName(
                year,
                week,
                yearsPassed,
                weeksPassed
              )}
              key={`square-${year}-${week}`}
            >
              {getSquareContent(year, week)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default YourLifeInWeeks;
