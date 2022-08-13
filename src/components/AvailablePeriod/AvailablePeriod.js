import React from "react";

export default function AvailablePeriod({ deleteAvailablePeriod, el }) {
  const handleDelete = (item) => {
    deleteAvailablePeriod(item);
  };
  return (
    <li key={el.id}>
      <span>
        {el.day}: {el.start} - {el.end}
      </span>
      <button onClick={(e) => handleDelete(el)}>X</button>
    </li>
  );
}
