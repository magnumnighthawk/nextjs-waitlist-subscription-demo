import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 40px;
  width: fill-available;
  display: block;
  border-radius: 2px;
  border: 1px solid #999999;
  padding: 0 10px;
  font-size: 14px;
  font-family: inherit;
  margin: 10px 0 25px;

  &:focus {
    border-color: transparent;
    outline: none;
    box-shadow: 0 0 4px 0 inset #026cdf;
    border: 1px solid #026cdf;
  }
`;

function Input(props, ref) {
  return <StyledInput ref={ref} {...props} />;
}

export default React.forwardRef(Input);
