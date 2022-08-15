import React, { useState } from "react";
import {
  Container,
  StyledForm,
  StyledSelect,
  StyledSubmitButton,
} from "./AddAvailabilityFormStyles";

export default function AddAvailabilityForm({ addAvailablePeriod }) {
  const [day, setDay] = useState("");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("17:00");

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];
  const startTimes = times.slice(0, -1);
  const endTimes = times.slice(1);

  const dayChange = (e) => {
    const day = e.target.value;
    setDay(day);
  };

  const startTimeChange = (e) => {
    const startTime = e.target.value;
    setStart(startTime);
  };

  const endTimeChange = (e) => {
    const endTime = e.target.value;
    setEnd(endTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAvailablePeriod(day, start, end);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <fieldset>
          <legend>Select your availability: </legend>
          <div>
            <label htmlFor="day-select">Day: </label>
            <StyledSelect
              name="days-of-week"
              id="day-select"
              onChange={dayChange}
              required
            >
              <option value="">--Select a day--</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
            </StyledSelect>
          </div>
          <div>
            <label htmlFor="start-select">Start time: </label>
            <StyledSelect
              name="start-time"
              id="start-select"
              onChange={startTimeChange}
              required
            >
              <option value="">--Select a start time--</option>
              {startTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </StyledSelect>
          </div>
          <div>
            <label htmlFor="end-select">End time: </label>
            <StyledSelect
              name="end-time"
              id="end-select"
              onChange={endTimeChange}
              required
            >
              <option value="">--Select an end time--</option>
              {endTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </StyledSelect>
          </div>
          <div>
            <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
          </div>
        </fieldset>
      </StyledForm>
    </Container>
  );
}
