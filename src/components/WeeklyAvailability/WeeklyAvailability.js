import React from "react";
import AvailablePeriod from "../AvailablePeriod/AvailablePeriod";

export default function WeeklyAvailability({
  availablePeriods,
  deleteAvailablePeriod,
  userMessage,
}) {
  const getAvailablePeriods = (day) => {
    const availability = availablePeriods.filter((el) => el.day === day);
    return (
      <td>
        <ul>
          {availability.map((el) => (
            <AvailablePeriod
              deleteAvailablePeriod={deleteAvailablePeriod}
              el={el}
            />
          ))}
        </ul>
      </td>
    );
  };
  return (
    <>
      <h1>Weekly Availability</h1>
      <p>{userMessage}</p>
      <table>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
        <tr>
          {getAvailablePeriods("Monday")}
          {getAvailablePeriods("Tuesday")}
          {getAvailablePeriods("Wednesday")}
          {getAvailablePeriods("Thursday")}
          {getAvailablePeriods("Friday")}
        </tr>
      </table>
    </>
  );
}
