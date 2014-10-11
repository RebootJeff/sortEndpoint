var fakeDB = require('../fakeDB/fakeDB');

var UsersCtrl = {};

UsersCtrl.query = function(req, res, next) {
  var data = fakeDB.getAll();

  sortList(data, req.query);
  truncateList(data, req.query);

  res.send(data);
};

function sortList(list, query) {
  // Validate sortBy
  if(query.sortBy === undefined) return;
  var sortBy = query.sortBy.split(',');

  // Default to ascending order
  var order = (query.order === 'desc') ? -1 : 1;

  var propName;
  for(var i = sortBy.length - 1; i >= 0; i--) {
    propName = sortBy[i];

    list.sort(function (a, b) {
      if(a[propName] > b[propName]) {
        return order;
      } else if(a[propName] < b[propName]) {
        return -order;
      } else {
        return 0;
      }
    });
  }
}

function truncateList(list, query) {
  // Validate count
  if(query.count < list.length) {
    list.length = query.count;
  }
}


module.exports = UsersCtrl;
