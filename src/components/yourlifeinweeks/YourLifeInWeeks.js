import React from "react";
import "../../styles/components/yourlifeinweeks/square.scss";
import {
  getSquareClassName,
  generateNumbersArray,
  getWeeksPassed,
  getYearsPassed,
} from "../../util/yourlifeinweeks";

const YourLifeInWeeks = ({ birthday }) => {
  const TOTAL_YEARS = 90;
  const WEEKS_PER_YEAR = 52;
  let totalYears = generateNumbersArray(TOTAL_YEARS);
  let totalWeeks = generateNumbersArray(WEEKS_PER_YEAR);
  let yearsPassed = 0,
    weeksPassed = 0;
  try {
    // How many years have passed since birth
    yearsPassed = getYearsPassed(birthday);
    // How many weeks have passed since most recent birthday
    weeksPassed = getWeeksPassed(birthday);
  } catch (e) {}
  return (
    <div className="squares__container">
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
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default YourLifeInWeeks;
