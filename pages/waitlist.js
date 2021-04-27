import { useState, useEffect } from "react";
import ReturnHome from "components/breadcrumb";
import Button from "components/button";
import ErrorAlert from "components/error-alert";
import Input from "components/input";
import {
  CenteredSection,
  StyledImage,
  SuccessMessage
} from "lib/global-styles";
import { useAuth } from "lib/useAuth";
import {
  addToWaitingList as addToWaitingListService,
  getLoggedInUser
} from "lib/services";

export default function Waitlist() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useAuth();

  const getUserDetails = async () => {
    const response = await getLoggedInUser();
    if (response.emailAddress) {
      setMobileNumber(response.mobileNumber);
    }
    if (response.mobileNumber) {
      setEmailAddress(response.emailAddress);
    }
  };

  useEffect(() => {
    console.log("Use Effect");
    if (isLoggedIn) {
      getUserDetails();
    }
  }, [isLoggedIn]);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = {
      emailAddress,
      mobileNumber
    };
    try {
      setLoading(true);
      await addToWaitingListService(formData);
      setSubmitted(true);
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.message);
    }
  };

  const handleFormChange = (e) => {
    if (e.target.id === "email") {
      setEmailAddress(e.target.value);
    } else if (e.target.id === "phone") {
      setMobileNumber(e.target.value);
    }
  };

  const submitSuccessState = () => {
    return (
      <div>
        <StyledImage src="/accepted.png" alt="Added successfully" />
        <SuccessMessage role="alert">
          You've been added to the waitlist. We'll notify you if there are any
          seats available in the future.
        </SuccessMessage>
      </div>
    );
  };

  if (submitted) {
    return <CenteredSection>{submitSuccessState()}</CenteredSection>;
  }

  return (
    <CenteredSection>
      {isLoggedIn ? "Logged in" : "Logged out"}
      <p>
        <ReturnHome />
      </p>
      {errorMessage && <ErrorAlert message={errorMessage} />}
      <h1>Join the waitlist</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            id="email"
            type="email"
            required
            value={emailAddress}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          {/* Leaving field as not required to test API failure scenario */}
          <Input
            id="phone"
            type="tel"
            value={mobileNumber}
            onChange={handleFormChange}
          />
        </div>
        <Button type="submit" loading={loading} disabled={loading}>
          Submit
        </Button>
      </form>
    </CenteredSection>
  );
}
