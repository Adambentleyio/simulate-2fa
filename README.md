# A simulated passwordless login user flow

Live demo [here](https://visionary-flan-978695.netlify.app/welcome)

This project is the result of a tech test for a frontend developer position. The company asked for a user flow that verified customer credentials (name and postcode) before sending a one time code to a device of their choice. For the test, all data was hard coded in order to simulate a database call and transactional email/sms.

## Tools used

- React
- React router v6
- Vanilla CSS

## Things to improve on

- Better styling and composition. This isn't the most elegant solution by a long shot! I would separate the validation logic from the UI.
- Simulate database call through Promise based functions. Instead of an if/else statement to determine the authentication code I would have preferred to call a function that returned a promise after 'some length of time' if the one time code was correct. That's not react specific, but would have been a more elegant solution.
- CSS animations on page load.
