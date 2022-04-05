

	import express from "express";
	import session from "express-session";
	import path from "path";
	import bcrypt from "bcrypt";
	import passport from "passport";
	import passportLocal from "passport-local"; 

	let Users = [];
	
	const app = express();
//11
	app.use(session({
		secret:process.env.SESSION_SECRET,
		resave:false,
		saveUninitialized:false
	}));

	app.use(express.json());
	app.use(express.urlencoded({extended:true}));
//19
	app.use(passport.initialize());
	app.use(passport.session());
	
	passport.use(new passportLocal.Strategy({
		usernameField:"email"
	},async(email,password, done)=>{
		const User = Users.find((User)=> User.email === email);

		if(User === undefined){
			return done(null,null,{message:"inncorect email..."});
		}
//30
		if(await bcrypt.compare(password,User.password)){
			return done(null, User);
		}
		done(null,null,{message:"inncorect password ..."});
	}));	 
	
	passport.serializeUser((User, done)=>{
		done(null, User.id);
	});
//40
	passport.deserializeUser((id, done)=>{
		done(null,Users.find((User)=>User.id === id));
	});
	
	app.get("/register",checkNotAuthentication,(req,res)=>{
		res.sendFile(path.resolve("views/register.html"));
	});
//48	
	app.post("/register",async(req, res)=>{
                const {name,email,password} = req.body;
                const hashedPwd = await bcrypt.hash(password, 10);
                Users.push({
                        id:`${Date.new()}_${Math.random()}`,
                        name:"name",
                        email:"email",
                        password:hashedPwd
                });
                res.redirect("/Login");
        });
//59
	app.get("/login",checkNotAuthentication,(req,res)=>{
                res.sendFile(path.resolve("views/login.html"));
        });
	
	app.post("/login",passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login"
	}));
//67
	app.use(checkAuthentication);

	app.get("/",(req, res)=>{
		res.sendFile(path.resolve("views/app.html"));
	});

	app.get("/logOut",(req, res)=>{
                req.logOut();
                res.redirect("/login");
        });

	function checkAuthentication(req,res, next){
                 if(req.isAuthenticated() === false){
                        return res.redirect("/login")
                }
                next();
        }

	function checkNotAuthentication(req,res, next){
                 if(req.isAuthenticated() === true){
                        return res.redirect("/")
                }
                next();
        }	

	app.get("/",(req,res)=>{
		if(req.isAuthenticated() === false){
			return res.redirect("/login")
		}
		res.send("hi...");
	});


	app.listen(3001);


