import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2rem;
  background: #0269da;
  color: white;
  font-family: "Zen dots";
  font-size: 20px;
  font-style: italic;
`;

export default function Header() {
  return <StyledHeader>Site Logo</StyledHeader>;
}
