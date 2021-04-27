import styled from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  background: #1f262d;
  padding: 1rem 2rem;

  a {
    color: white;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/flat-icons"
          title="Flat Icons"
        >
          Flat Icons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </StyledFooter>
  );
}
