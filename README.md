# Welcome to the Solution (WIP)

Most of this coding challenge is open-ended, but there are a few key pieces of code that can get ugly. I have provided an example solution to show how the backend sorting can work with fairly clean code.

## What to look for in Front-End Solution

- Did candidate separate controller logic and service logic correctly?
- Did candidate avoid abusing $scope.digest()?
- Did candidate understand how to use `this` with "controller as" syntax?
- Did candidate write more advanced HTML/CSS?
  - Did candidate use `form-group` and `form-control` from Bootstrap?
  - Did candidate use dropdown select menus rather than just input text fields?


## What to look for in Back-End Solution

- Did candidate provide proper defaults (i.e., ascending order should be default)?
  - Did candidate write tests to check this requirement?
- Did candidate modularize code into controller? Did the controller use helpers?
  - If not, was candidate pressed for time? Did candidate mention, "If I had more time, I would organize the code into separate files for..."?
- Did candidate validate inputs (i.e., `sortBy`, `order`, and `count`)?
  - If not, then did candidate manage to write tests that would reveal lack of input validation?

### Getting the Sorting Correct

See `server/users/usersCtrl.js` for example code that will sort based on multiple fields (aka `sortBy`) and based on desired order (e.g., ascending or descending). Some people will struggle to keep code DRY for sorting based on desired order. Normally, comparators just return 1, -1, and 0 as hard-coded values. The trick is to use a variable that is set to 1 or -1 programmatically. Some candidates will struggle because they think the conditions (`if` statements) of the comparator need to change, and that would require writing two different comparators (which is a lot less DRY).
