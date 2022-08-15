import React from "react";
import {
  Container,
  StyledAvailablePeriod,
  StyledButton,
} from "./AvailablePeriodStyles";

export default function AvailablePeriod({ deleteAvailablePeriod, el }) {
  const handleDelete = (item) => {
    deleteAvailablePeriod(item);
  };
  const days = {
    monday: "#23AFD6",
    tuesday: "#71B578",
    wednesday: "#EF553C",
    thursday: "#D5B60D",
    friday: "#815799",
  };
  const day = Object.keys(days).filter((key) => key === el.day)[0];
  const color = days[day];

  return (
    <Container>
      <StyledAvailablePeriod key={el.id} color={color}>
        {el.start} - {el.end}
      </StyledAvailablePeriod>
      <StyledButton onClick={(e) => handleDelete(el)}>X</StyledButton>
    </Container>
  );
}
