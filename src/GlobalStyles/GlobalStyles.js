import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Monaco, monospace;
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  background-color: #ffffff;
  color: #3e9399;
  opacity: 90%;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #3e9399;
  width: 130px;
  margin-bottom: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledOptionButton = styled(StyledButton)`
  color: #df5970;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 8px;
  border: 1px solid #df5970;
  margin: 5px;
`;
