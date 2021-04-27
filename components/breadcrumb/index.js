import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: rgb(38, 38, 38);
  text-decoration: none;
  cursor: pointer;

  &:focus,
  :hover {
    color: rgb(1, 81, 167);
    text-decoration: underline;
  }
`;

export default function ReturnToHome() {
  return (
    <Link href="/" passHref>
      <StyledLink>
        <b>{`< back`}</b>
      </StyledLink>
    </Link>
  );
}
