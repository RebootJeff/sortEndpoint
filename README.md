# Challenge

In **1 to 2 hours**, build an app that shows the user a list of data by using AJAX. The AJAX call should hit a RESTful endpoint with the ability to:
- Sort by a field (e.g., last name or first name)
- Sort into ascending (default) or descending order
- Truncate list to first X number of items.

Build a form that asks the user to specify the sorting field, sorting order, and max number of results. The user should be able to click a button to submit the form and see sorted results.

## You have 2 options:
1. Use existing boilerplate (Angular + Node + Express) code to help you build the small app.
2. Start from scratch, and build the app using whatever you want.
  - But not really "whatever" you want. For the backend, we strongly prefer if you use Node + Express, but you can also use Ruby or PHP.

For both options, use the data found in the `fakeStorage` variable defined in `server/fakeDB/fakeDB.js`.

### If there is enough time...

- Write tests (e.g., back-end unit tests, automated E2E tests, etc).
- Enable sorting by more than 1 property (e.g., sort by last name as top priority and first name as secondary priority).
- Make the front-end look cooler (e.g., use nicer form controls, add animations, use attractive CSS, etc).
- Add more functionality (e.g., form validation).
- Include helpful comments/documentation.

# Expectations

**Do not** worry about fancy sieve algorithms or self-balancing tree data structures. This should be a straightforward exercise that checks full-stack understanding (e.g., Angular fundamentals and best practices, AJAX, REST API endpoints, etc. --minus the database).

**Do** worry about writing/refactoring/organizing code so that it is cleaner, more readable, more testable, more maintainable, more DRY, etc.

### If you want, you can...
- Add dependencies (especially to the backend) such as Lodash, Q promises, node-http, etc --so long as you can explain why they're necessary/useful.
- Organize code by creating folders, modules, etc.
- Use git to show off your sweet, sweet version control skills.
- Delete/edit existing boilerplate code.

# Usage of Boilerplate Code

### Run the App

Type `gulp` in the terminal. Gulp will then watch for changes in source files and restart the server as necessary.

If there are issues with source code not reaching the client, try cleaning out the public files and re-compiling them with the following terminal commands: `gulp clean` followed by `gulp compile`.

### Run the front-end unit tests

Type `karma start` (or maybe `gulp karma` if I got that working) in the terminal.

### Run the back-end unit tests

Type `jasmine-node server` in the terminal.
