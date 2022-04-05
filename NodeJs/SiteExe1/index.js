



	import express from "express";
	import bodyParser from 'body-parser';	
	const app = express();
	app.use(bodyParser.urlencoded({ extended: false }));
	
	app.get('/', (req, res) => {
  		res.sendFile(__dirname + '/static/index.html');
	});

	app.get('/login', (req, res) => {
  		res.sendFile(__dirname + '/static/login.html');
	});

	app.post('/login', (req, res) => {
  		let username = req.body.username;
  		let password = req.body.password;
  		res.send(`Username: ${username} Password: ${password}`);
	});

	const port = 3001

	app.listen(port, () => console.log(`This app is listening on port ${port}`));



