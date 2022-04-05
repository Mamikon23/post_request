	

	import express from "express";
	
	const app = express();
	
	app.get("/", (req,res)=>{
		res.send("hi ...")
	});

	app.listen(process.env.MY_APP_PORT);
