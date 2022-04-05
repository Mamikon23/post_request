

	let http = require('http');
	const express = require("express");
	const bodyParser = require("body-parser")
	const fs = require('fs')

	http.createServer(function (req, res) {
  		
		res.writeHead(200, {'Content-Type': 'text/html'});
  		let a = req.url;
		if(a == "/arm"){
			res.write("Hello Armeina");
		}	
		else if(a == "/rus"){
			res.write("Hello Russia");
		}
		else{
			console.log(
// html connect
/*

                const app = express();

                app.use(bodyParser.urlencoded({
                        extended:true
                }));

		let result = 0;
                app.get("/", function(req, res) {
                        res.sendFile(__dirname + "/index.html");
                });

                app.post("/", function(req, res) {
                        let num1 = Number(req.body.num1);
                        let num2 = Number(req.body.num2);

                        result = num1 + num2 ;

                        res.send("Hashiv = " + result);
			return result;
                });
 
// write /read

		let data = "This is a file ...";
		fs.writeFile("jsDaser/fileDas2.txt","utf-8", (data, err) => {
			if (err){
				console.log("error 404 ...");
			}
			else {
				console.log("File written successfully\n");
				console.log(result);
				console.log(fs.readFileSync("fileDas2.txt", "utf8"));
			}
		});

		res.end();
		}

	}).listen(8080);








