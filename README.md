# Welcome to the Solution

Most of this coding challenge is open-ended, but there are a few key pieces of code that can get ugly. I have provided an example solution to show how the backend sorting can work with fairly clean code.

Also, it is important that the candidate realizes that sorting must be done on the backend to reduce file size of AJAX response via `req.query.count`. In other words, if the candidate starts to write code to sort/truncate user list via front-end code, you must steer them to do sorting/truncation in the back-end instead. Ask them to imagine that the list could have thousands of items so it might even make sense to provide a minimum/default truncation count (e.g., server will only respond with a max array length of 100).

## What to look for in Client

- Did candidate separate controller logic and service logic correctly?
- Did candidate avoid Angular bad practices such as abusing `$rootScope`, `$scope.digest()`, etc?
- Did candidate understand how to use `this` with "controller as" syntax?
- Did candidate write more advanced HTML/CSS?
  - Did candidate use `form-group` and `form-control` from Bootstrap?
  - Did candidate use dropdown select menus rather than just input text fields?


## What to look for in Server

- Did candidate provide proper defaults (i.e., ascending order should be default)?
  - Did candidate write tests to check this requirement?
- Did candidate modularize code into controller? Did the controller use helpers?
  - If not, was candidate pressed for time? Did candidate mention, "If I had more time, I would organize the code into separate files for..."?
- Did candidate validate inputs (i.e., `sortBy`, `order`, and `count`)?
  - If not, then did candidate manage to write tests that would reveal lack of input validation?

### Getting the Sorting Correct

See `server/users/usersCtrl.js` for example code that will sort based on multiple fields (aka `sortBy`) and based on desired order (e.g., ascending or descending). Some people will struggle to keep code DRY for sorting based on desired order. Normally, comparators just return 1, -1, and 0 as hard-coded values. The trick is to use a variable that is set to 1 or -1 programmatically. Some candidates will struggle because they think the conditions (`if` statements) of the comparator need to change, and that would require writing two different comparators (which is a lot less DRY).
