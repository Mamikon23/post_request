	
	import express from "express";
	//import path from "path";

	const app = express();
/*	
	app.use((req,res,next)=>{
		console.log(req.url);
		next();
	});
*/

	app.use(express.json());

	app.use(express.static("public"));
	
	app.get("/",(req,res)=>{
		//res.sendFile(path.resolve("public/index.html"));
		req.redireqt("/index.html");
	});

	app.get("/hello",(req,res)=>{
		res.send("Yey ...");
	});
	app.get("/bye",(req,res)=>{
		res.send({
			name:"Joe"
		})
	});
/*	
	app.post("/hi",(req,res)=>{
		let data = "";
		req.on("data",(info)=>{
			data+=info;
		});
		req.on("end",()=>{
			const obj = JSON.parse(data);
			console.log(obj.name);
			res.send("All Good ...");
		});
	});
*/

	app.post("/hi",(req,res)=>{
		console.log(req.body.name);
		res.send("All Good ...");
	});

	app.listen(3001);
