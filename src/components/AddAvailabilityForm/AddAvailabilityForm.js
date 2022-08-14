import React, { useState } from "react";

export default function AddAvailabilityForm({ addAvailablePeriod }) {
  const [day, setDay] = useState("");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("17:00");

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
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Select your availability: </legend>
        <div>
          <label htmlFor="day-select">Day: </label>
          <select
            name="days-of-week"
            id="day-select"
            onChange={dayChange}
            required
          >
            <option value="">--Please select a day--</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </select>
        </div>
        <div>
          {/* <label>Select a time between 9:00AM - 5:00PM: </label> */}
          <label htmlFor="start-time-select">Start Time: </label>
          <input
            id="start-time-select"
            type="time"
            value={start}
            onChange={startTimeChange}
            min="09:00"
            max="16:00"
            step="3600"
            required
          />
        </div>
        <div>
          <label htmlFor="end-time-select">End Time: </label>
          <input
            id="end-time-select"
            type="time"
            value={end}
            onChange={endTimeChange}
            min="10:00"
            max="17:00"
            step="3600"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}
