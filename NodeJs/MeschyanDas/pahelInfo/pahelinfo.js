

// npm init -y  
//npm install express
// create "pahel.json" file
	import fs from "fs";
	import express from "express";
	import path from "path";
	
	const app = express();

	app.use(express.static("public"));

	app.use(express.json());

	app.listen(3001);
	
	app.get("/", (req,res)=>{
		fs.promises.readFile(path.resolve("pahel.json"),"utf8").then((info)=>{
			res.send(info);
		});
	});


	app.post("/", (req,res)=>{
		fs.promises.writeFile(path.resolve("pahel.json"),JSON.stringify(req.body,undefined, 2)).then(()=>{
			res.send("info recived ...");
		});
	});
	

	
