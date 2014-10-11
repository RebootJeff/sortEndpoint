# Usage

### Run the App

Type `gulp` in the terminal. Gulp will then watch for changes in source files and restart the server as necessary.

If there are issues with source code not reaching the client, try cleaning out the public files and re-compiling them with the following terminal commands: `gulp clean` followed by `gulp compile`.

### Run the front-end unit tests

Type `karma start` (or maybe `gulp karma` if I got that working) in the terminal.

### Run the back-end unit tests

Type `jasmine-node server` in the terminal.

# Challenge

Build endpoint used by GUI to display sorted list of data. The GUI should allow user to provide options to:
- Sort by multiple fields (last name, first name)
- Sort into ascending (default) or descending order
- Truncate list to first X number of items.

### If there is enough time...

- Write unit tests (mostly backend).
- Enable sorting by more than 1 property (e.g., sort by last name as top priority and first name as secondary priority).

### Afterwards...
- If there wasn't enough time for unit tests, just describe good test cases.
- What would you refactor or re-organize if you had more time?

# Expectations

**Do not** worry about fancy sieve algorithms or self-balancing tree data structures. This should be a straightforward exercise that checks full-stack understanding (Angular fundamentals and best practices, AJAX, REST API endpoints, etc. --minus the database).

**Do** worry about writing/refactoring/organizing code so that it is cleaner, more readable, more testable, more maintainable, more DRY, etc.

You can...
- Add dependencies (especially to the backend) such as Lodash, Q promises, node-http, etc.
- Organize code by creating folders, Angular sub-modules, Angular services, etc.
- Use git to show off your sweet, sweet version control skills.
- Delete/edit existing code.

## Solution

Switch to the solution branch (`git checkout solution`) to see:
- README with expanded list of expectations and guidance for evaluation
- Solution for list sorting and truncation
