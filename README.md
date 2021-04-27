# Task

Fans would like to be added to a waiting list when they have been unlucky after the first batch of tickets sold out quickly. This will enable them to come back to the site and buy when more tickets become available.

Create a form that does a POST request with JSON to `/api/waiting-list`.

The body should be JSON and contain `emailAddress` and `mobileNumber` fields

## Minimum requirements:

- Allow fans to ‘join the waiting list’ by adding their email and phone number
- A success message "You have been added to the waiting list" should be displayed on successful submission
- Display error message returned by the api on an unsuccessful submission
- Accessibility should be considered
- Design should be loosely based on the Ticketmaster website: https://www.ticketmaster.co.uk/

## Additional features:

- Form and field validation
- Tests
- Visualise loading state

## Notes

- You're welcome to use any method of styling you feel comfortable with. We use styled-components at Ticketmaster but we don't expect you to learn a new library for this exercise!
- You are encouraged to add comments in the code, or by extending this readme file explaining logic or reasoning for your decisions.

## Changelog

- Added 2 pages:

  > Landing page with the "No seats available" notice
  > A Join to Waitlist page

- Created necessary components that make up the pages
- Added success & error states for waitlist submissions
- Added loading state for submission
- Added unit tests

V2 changes:

- Added level 1 headings
- Replaced react-helmet with next/head and added \_document.js
- Added alert role to success message
