import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  width: 30%;
  font-size: 18px;
  color: #3e9399;
`;
export const StyledText = styled.p`
  font-size: 14px;
`;

export const StyledSelect = styled.select`
  margin-bottom: 10px;
  font-size: 14px;
  padding: 3px;
  color: #3e9399;
  opacity: 90%;
`;

export const StyledSubmitButton = styled.button`
  background-color: #ffffff;
  color: #3e9399;
  padding: 5px 8px;
  border-radius: 8px;
  border: 1px solid #3e9399;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;
