import React from "react";
import AvailablePeriod from "../AvailablePeriod/AvailablePeriod";
import {
  Container,
  StyledHeading,
  StyledList,
  StyledMessage,
  StyledTable,
  StyledTableCell,
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
      <StyledTableCell>
        <StyledList>
          {availability.map((el) => (
            <AvailablePeriod
              deleteAvailablePeriod={deleteAvailablePeriod}
              el={el}
              key={el.id}
            />
          ))}
        </StyledList>
      </StyledTableCell>
    );
  };
  return (
    <Container>
      <StyledHeading>Weekly Availability</StyledHeading>
      <StyledMessage>{availablePeriods.length === 0 ? <div>*Add Availability below to set your weekly availability!</div> : userMessage}</StyledMessage>
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
            {getAvailablePeriods("monday")}
            {getAvailablePeriods("tuesday")}
            {getAvailablePeriods("wednesday")}
            {getAvailablePeriods("thursday")}
            {getAvailablePeriods("friday")}
          </tr>
        </tbody>
      </StyledTable>
    </Container>
  );
}
