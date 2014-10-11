// Read-only data
var fakeStorage = [
  {
    firstName: 'Peter',
    lastName: 'Parker'
  },
  {
    firstName: 'Clark',
    lastName: 'Kent'
  },
  {
    firstName: 'Bruce',
    lastName: 'Wayne'
  },
  {
    firstName: 'Soloman',
    lastName: 'Grundy'
  },
  {
    firstName: 'Thor',
    lastName: 'Odinson'
  },
  {
    firstName: 'Prince',
    lastName: 'Robot IV'
  },
  {
    firstName: 'Tim',
    lastName: 'Drake'
  },
  {
    firstName: 'Wade',
    lastName: 'Wilson'
  },
  {
    firstName: 'Bruce',
    lastName: 'Banner'
  }
];

var fakeDB = {};

fakeDB.getAll = function() {
  return fakeStorage.slice();
};

module.exports = fakeDB;
