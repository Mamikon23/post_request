import express from "express";	
const app = express();

//file

	app.use(express.static("public"));
	app.use(express.json());

//Get
	app.get("/",( req, res)=>{
		req.redireqt("/index.html");
	});
	
	app.get("/get",(req,res)=>{
		//req.redirect("index.html");
		res.send({
			name:"joe"
		});
	});


//Post
	app.post("/post",(req,res)=>{
		console.log(req.body.name);
		res.send("All good ...");
	});

//Defoult

        app.use("/aaa", (req,res)=>{
                res.send("Hi, it is a defoult page ...");
        });
	

	app.listen(8080);

