import React, { useState, useEffect } from "react";
import WeeklyAvailability from "./components/WeeklyAvailability/WeeklyAvailability";
import AddAvailability from "./components/AddAvailabilityForm/AddAvailabilityForm";
import {
  GlobalStyle,
  StyledButton,
  StyledOptionButton,
} from "./GlobalStyles/GlobalStyles";

export default function App() {
  const [addAvailability, setAddAvailability] = useState(false);
  const [availablePeriods, setAvailablePeriods] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    setAvailablePeriods(
      JSON.parse(window.localStorage.getItem("availablePeriods")) || []
    );
  }, []);

  const setInStorage = (availablePeriods) => {
    window.localStorage.setItem(
      "availablePeriods",
      JSON.stringify(availablePeriods)
    );
  };

  const handleAddAvailability = () => {
    setAddAvailability(!addAvailability);
  };

  const handleDeleteAvailablePeriod = (item) => {
    const newPeriods = availablePeriods.filter((el) => el.id !== item.id);
    setAvailablePeriods(newPeriods);
    setInStorage(newPeriods);
    setUserMessage("Available period deleted.");
    setTimeout(() => {
      setUserMessage("");
    }, 2500);
  };

  const handleAddAvailablePeriod = (day, start, end) => {
    const newPeriod = { day, start, end, id: Math.random() * 1000 };
    const availability = [...availablePeriods, newPeriod];
    setAvailablePeriods(availability);
    setInStorage(availability);
    setAddAvailability(false);
    setUserMessage("Successfully added new availability!");
    setTimeout(() => {
      setUserMessage("");
    }, 2500);
  };

  const handlePrintAvailability = () => {
    console.log(availablePeriods);
    setUserMessage("Weekly availability printed!");
    setTimeout(() => {
      setUserMessage("");
    }, 2500);
  };

  const handleResetAvailability = () => {
    if (window.confirm("Reset all availability?")) {
      const resetAvailability = [];
      setAvailablePeriods(resetAvailability);
      setInStorage(resetAvailability);
    }
  };

  return (
    <>
      <GlobalStyle />
      <WeeklyAvailability
        availablePeriods={availablePeriods}
        deleteAvailablePeriod={handleDeleteAvailablePeriod}
        userMessage={userMessage}
      />
      <div>
        <StyledButton onClick={handleAddAvailability}>
          {addAvailability ? "Close" : "Add Availability"}
        </StyledButton>
      </div>
      <div>
        {addAvailability && (
          <AddAvailability addAvailablePeriod={handleAddAvailablePeriod} />
        )}
      </div>
      {availablePeriods.length > 0 && (
        <div>
          <span>
            <StyledOptionButton onClick={handlePrintAvailability}>
              Print Availability
            </StyledOptionButton>
          </span>
          <span>
            <StyledOptionButton onClick={handleResetAvailability}>
              Reset Availability
            </StyledOptionButton>
          </span>
        </div>
      )}
    </>
  );
}
