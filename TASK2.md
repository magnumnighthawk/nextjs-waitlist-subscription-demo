# Task 2

## Background

If a visitor of the site is already logged in, they would prefer if the waiting list input fields were prefilled with their stored email address and mobile phone number so they don't have to type it in manually.

## Acceptance Criteria

- If the visitor is logged in and has an email address and/or mobile number stored in their account, prefill the email and phone fields with those values
- If the visitor is not logged in, don't prefill the inputs

## Technical information

We have provided a new endpoint `/api/user` that when called with a valid `userToken` cookie returns the users email address and mobile phone number and a `useAuth` react hook to log in/out the visitor.

You will need to install 2 dependencies: `npm install faker cookie --save`
