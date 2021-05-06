import React from "react";
import "../../styles/components/yourlifeinweeks/square.scss";
import {
  getSquareClassName,
  generateNumbersArray,
  getYearsAndWeeksPassed,
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
    year = year + 1;
    week = week + 1;
    if (year > 1 && week > 1) return null;
    if (year === 1 && week === 1) {
      return (
        <>
          <p className="squares__indication squares__indication--week">1</p>
          <p className="squares__indication squares__indication--year">1</p>
        </>
      );
    }

    if (year === 1 && week % 5 === 0) {
      return (
        <p className="squares__indication squares__indication--week">{week}</p>
      );
    }
    if (week === 1 && year % 5 === 0) {
      return (
        <p className="squares__indication squares__indication--year">{year}</p>
      );
    }
    return null;
  };
  try {
    // How many weeks and years have passed since most recent birth
    const passed = getYearsAndWeeksPassed(birthday);
    weeksPassed = passed[0];
    yearsPassed = passed[1];
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
