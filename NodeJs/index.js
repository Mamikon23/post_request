

	import express from 'express';
	import bodyParser from "body-parser";
	
	let app = express();

	app.use(express.static('public'));
	

	app.get('public/index.htm', function (req, res) {
   		res.sendFile( __dirname + "/" + "index.htm" );
	})

	app.get('/get', function (req, res) {
   		response = {
      			first_name:req.query.first_name,
      			last_name:req.query.last_name
   		};
   	console.log(response);
   	res.end(JSON.stringify(response));
	})


// Create application/x-www-form-urlencoded parser
var Parser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "indexP.htm" );
})

app.post('/process_post', Parser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };



	var server = app.listen(3001, function () {
   		var host = server.address().address
   		var port = server.address().port
   
   		console.log(host, port)
	});
