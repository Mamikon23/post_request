
	import express from "express";
	import fs from "fs"; 
	import bodyParser from 'body-parser'
	import path from 'path';
	const app = express();

	const storage = "./Storage/";
	
	Read();
	Write();

	app.listen("8080", function(){
    		console.log("Server is Running...");
	});

// Read
	function Read(){
 		app.use(function(req, res, next) {
                	res.header("Access-Control-Allow-Origin", "*");
                	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                	next();
        	});

        	let obj = "";
        	obj = fs.readFile('./jsonFile',{encoding:'utf8', flag:'r'},
                        function(err, obj) {
                                if(err){
                                        console.log(err);
                                }else{
                                        app.get("/", function(req, res){
                                                res.json(obj);
                                        });
                                }
                        })
	}


// Write
	function Write(){
		app.use(bodyParser.urlencoded({extended: true })); 
		app.post('/e', (req, res) => {
			let text = (`${req.body.fname}${req.body.lname}.`);
			return res.send(text)
			let id = NewId();
			fs.writeFile(`${storage}${id}`, text, (err) => {
  				if (err){
    					console.log(err);
				}else {
					res.writeHeader(200,{"content-type":"text/plain"});
	                                res.write(`id:${id}`)
				}
			});
		});
	}

// Create id
	function NewId(){
		return(Math.ceil(Math.random()*(10**10)));
	}

	
