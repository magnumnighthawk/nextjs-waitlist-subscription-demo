import styled from "styled-components";

const AlertWrapper = styled.div`
  background: #f44336;
  color: white;
  padding: 10px;
`;

export default function ErrorAlert({ message }) {
  return <AlertWrapper role="alert">{message}</AlertWrapper>;
}
