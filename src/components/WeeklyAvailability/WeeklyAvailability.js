import React from "react";
import AvailablePeriod from "../AvailablePeriod/AvailablePeriod";
import {
  Container,
  StyledHeading,
  StyledMessage,
  StyledTable,
  StyledTableHeader,
} from "./WeeklyAvailabilityStyles";

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
    <Container>
      <StyledHeading>Weekly Availability</StyledHeading>
      <StyledMessage>{userMessage}</StyledMessage>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Monday</StyledTableHeader>
            <StyledTableHeader>Tuesday</StyledTableHeader>
            <StyledTableHeader>Wednesday</StyledTableHeader>
            <StyledTableHeader>Thursday</StyledTableHeader>
            <StyledTableHeader>Friday</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            {getAvailablePeriods("Monday")}
            {getAvailablePeriods("Tuesday")}
            {getAvailablePeriods("Wednesday")}
            {getAvailablePeriods("Thursday")}
            {getAvailablePeriods("Friday")}
          </tr>
        </tbody>
      </StyledTable>
    </Container>
  );
}
