import React from "react";
import styled from "styled-components";
import Spinner from "components/spinner";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  width: fit-content;
  border: 1px solid transparent;
  font-family: inherit;
  cursor: pointer;
  padding: 0 24px;
  color: rgb(255, 255, 255);
  background-color: rgb(2, 108, 223);
  border-radius: 2px;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.2s ease 0s;
  text-decoration: none;

  &:hover {
    border-color: rgb(1, 81, 167);
    color: rgb(255, 255, 255);
    background-color: rgb(1, 81, 167);
  }

  &:disabled {
    background: #124379;
    cursor: not-allowed;
  }
`;

function Button({ children, loading, ...rest }, ref) {
  return (
    <StyledButton ref={ref} {...rest}>
      {children}
      {loading && <Spinner />}
    </StyledButton>
  );
}

export default React.forwardRef(Button);
