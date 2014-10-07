// Read-only data
var fakeStorage = [
  {
    firstName: '',
    lastName: ''
  },
  {
    firstName: '',
    lastName: ''
  }
];

var fakeDB = {};

fakeDB.getAll = function() {
  return fakeStorage.slice();
};

module.exports = fakeDB;
