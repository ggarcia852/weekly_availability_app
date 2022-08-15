import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const StyledAvailablePeriod = styled.li.attrs((props) => ({
  style: {
    backgroundColor: `${props.color}`,
  },
}))`
  border: 1px solid black;
  border-radius: 18px;
  list-style: none;
  opacity: 90%;
  color: white;
  font-size: 16px;
  padding: 5px 10px;
`;

export const StyledButton = styled.button`
  background-color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  color: red;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
