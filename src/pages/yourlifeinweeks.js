import React, { useState, useEffect } from "react";
import YourLifeInWeeks from "../components/yourlifeinweeks/YourLifeInWeeks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/yourlifeinweeks.scss";
import { resetLocalStorage } from "../util/yourlifeinweeks";

const YourLifeInWeeksPage = () => {
  const [birthday, setBirthday] = useState(new Date());
  const handleChangeBirthday = (date) => {
    setBirthday(date);
    localStorage.setItem("birthday", date);
  };
  useEffect(() => {
    if (localStorage.getItem("birthday") === "null") {
      return resetLocalStorage();
    }
    try {
      if (localStorage.getItem("birthday")) {
        setBirthday(new Date(localStorage.getItem("birthday")));
      }
    } catch (e) {
      resetLocalStorage();
    }
  }, []);
  return (
    <div className="container">
      <div className="content-container yourlifeinweeks">
        <h1>Your life in weeks</h1>
        <p>
          Inspired by{" "}
          <a
            href="https://waitbutwhy.com/2014/05/life-weeks.html"
            target="_blank"
            rel="noreferrer"
          >
            Wait But Why
          </a>
          , Your Life In Weeks is a visualizer for how much of your life you
          have spent, and how much of your life you have left, by a 90-year
          lifespan estimation. Once you fill in your birthday, every colored
          block represents one week you have lived, and every open block
          represents a week you (hopefully) have left.
        </p>
        <p>
          This page uses Local Storage to store your birthday. Feel free to come
          back whenever you like to get reminded of how precious yet short life
          is.
        </p>
        <p>On mobile, please scroll to the right to see all the weeks.</p>
        <form>
          <label>Your birthday (Format: MM-DD-YYYY)</label>
          <br />
          <DatePicker
            selected={birthday}
            onChange={(date) => handleChangeBirthday(date)}
          />
        </form>
        <YourLifeInWeeks birthday={birthday} />
      </div>
    </div>
  );
};

export default YourLifeInWeeksPage;
