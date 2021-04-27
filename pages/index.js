import Link from "next/link";
import Button from "components/button";
import { useAuth } from "lib/useAuth";
import { CenteredSection, StyledImage } from "lib/global-styles";

export default function IndexPage() {
  const { isLoggedIn, login } = useAuth();
  return (
    <CenteredSection>
      {!isLoggedIn && <Button onClick={login}>Click to login</Button>}
      {isLoggedIn && (
        <>
          <h1>Oops! No tickets available</h1>
          <StyledImage src="/empty.png" alt="Seats empty icon" />
          <p>Sorry there are no tickets available right now!</p>
          <p>We can notify you if you join the waitlist</p>
          <Link href="/waitlist" passHref>
            <Button as="a">Join the waitlist</Button>
          </Link>
        </>
      )}
    </CenteredSection>
  );
}
