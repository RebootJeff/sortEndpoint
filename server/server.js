var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var env = process.env.NODE_ENV || 'development';


// ============================================================================
// Middleware
// ============================================================================
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev')); // log request/response info to console


// ============================================================================
// Basic routes
// ============================================================================
app.route('/api')
  .get(function(req, res, next){

  })
  .post(function(req, res, next){

  });


// ============================================================================
// Start server
// ============================================================================
app.listen(8000);
console.log('Listening on port 8000...');
