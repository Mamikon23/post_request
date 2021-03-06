var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require('express-rate-limit');

var app = express();
var server = http.createServer(app);

var db = new sqlite3.Database('test.db');
db.run('CREATE TABLE IF NOT EXISTS emp(DoB INTEGER, name TEXT, lastname TEXT, gender TEXT, cv BLOB, image BLOB )');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '.')));
app.use(helmet());

app.get('/init', function (req, res) {
  res.sendFile(path.join(__dirname, 'init.html'));
});

// Insert
app.post('/init', function (req, res) {
  db.serialize(() => {
    db.run(
      'INSERT INTO emp(DoB, name, lastname, gender) VALUES(?,?,?,?)',
      [req.body.DoB, req.body.name, req.body.lastname, req.body.gender ],
	    function (err) {
        if (err) {
          return console.log(err.message);
       		console.log('New person has been added');
        	res.send(
         		' Birthday = ' + req.body.DoB +
          		'Name = ' + req.body.name +
          		'Last-Name = ' + req.body.lastname +
          		'Gender = ' + req.body.gender 
        	);
	}
      }
    );
  });

});

app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Insert
app.post('/form', function (req, res) {
    db.serialize(() => {
      db.run(
        'INSERT INTO emp(DoB, name, lastname, gender, cv, image ) VALUES(?,?,?,?,?,?)',
        [req.body.DoB, req.body.name, req.body.lastname, req.body.gender],
        function (err) {
          if (err) {
            return console.log(err.message);
          }
          console.log('New person has been added');
          res.send(
            'Birthday = ' + req.body.DoB +
            'Name = ' + req.body.name +
            'Last-Name = ' + req.body.lastname +
            'Gender = ' + req.body.gender +
	    'CV = ' + req.body.gender +
            'Image = ' + req.body.gender 
          );
        }
      );
    });
  });
  


server.listen(3000,function(){ 
    console.log("Server listening on port: 3000")});
