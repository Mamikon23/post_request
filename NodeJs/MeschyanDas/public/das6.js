

	import http from "http";
	import fs from "fs";
	import path from "path";

	
	const ContentType = { 
		".html":"text/html",
		".css":"text/css",
		".js":"text/javascript"
	};

	function Func(req, res, next){
		let mutq = req.url;
		if(mutq === "/"){
			mutq = "/das6A.html";
		}
	
		const filePath = path.resolve("public" + mutq);
		fs.promises.access(filePath)
			.then(()=>{
				const form = path.extname(filePath);
				res.writeHead(200,{"content-text":ContentType[form]});
				fs.createReadStream(filePath).pipe(res);
			})
			.catch(()=>{
				next();
			})

	}
	
	
	const Server = http.createServer((req, res)=>{
		Func(req,res,()=>{
			if(req.url === "/asa"){
				res.writeHeader(404,{"content-text":"text/plain"});
				res.end("Page not found ...");
			}
		});
		/*
		if(req.url === "/"){
			res.writeHeader(200,{"content-text":"text/http"});
			fs.createReadStream(path.resolve("das6A.html")).pipe(res);
		}
		else if(req.url === "/das6B.css"){
			res.writeHeader(200,{"content-text":"text/css"});
			fs.createReadStream(path.resolve("das6B.css")).pipe(res);
		}
		*/
	});
	Server.listen(3001);



