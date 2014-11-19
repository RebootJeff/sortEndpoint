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
  // Return a deep copy of the fakeStorage data
  var clonedData = JSON.stringify(fakeStorage);
  return JSON.parse(clonedData);
};

module.exports = fakeDB;
