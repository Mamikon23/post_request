


	import express from "express";
	import session from "express-session";

	const app = express();

	app.use(session({secret: "keybord a cat", cookie: {maxAge: 60000}}));

	app.use(express.static("public"));

	app.use(express.json());

	app.get("/",(req, res)=>{
		if(req.session.view === undefined){
			req.session.view = 1;
		}else{
			req.session.view++; // + 1
		}
		res.send(`qani angam e ejy nayvel ${req.session.view}`);
	});


	app.listen(3001);
