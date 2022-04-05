

	import {createServer} from "http";
	import fs from "fs";
	//import url from "url";
/*	
	fs.mkdir(path.join(__dirname,"test"),(err)=>{
		if(err){
			return console.error(err);
		}
		console.log('Directory created successfully!');
	});
*/
	const storage = "./storage/";
	
	const server = createServer((req, res)=>{

		//let query = url.parse(req.url,true).query;
		//console.log(query.id)   //5
		//let met = req.method
		//console.log(req.method) //get
		
		let url = req.url.split("?");
		switch(url[0]){
			case "/GET":
				//console.log("Here")
				Get(req,res);
				break;
			case "/save":
				Save(req, res);
				break;
			default:
				Defoult(res);
				break;
		}
	});
	server.listen(3000);
	
	
	 function Defoult(req,res){
                console.log(" Defoult");
                res.writeHeader(200,{"content-type":"text/plain"});
                res.write("Error ...");
                res.end();
        }

				
	function Save(req,res){
		console.log("Save ...");
		let q = req.url.split("?");
		let Qstring = q[1] == undefined ? [] :q[1].split("&");
		let query = PQS(Qstring);
		let id = query.id == undefined ? NewId() : query.id;
		let body = "";
		req.on("data", mas =>{
			body+= mas;
		});
		req.on("end", s =>{
			fs.writeFileSync(`${storage}${id}`, body, "utf8");
			res.writeHeader(200,{"content-type":"text/plain"});
			res.write(`id: ${id}`)
			res.end();
		});
	}

	
	function Get(req, res){
                let q = req.url.split("?");
                console.log ("Get");
                let Qstring = q[1] == undefined ? [] : q[1].split("&");
                let query = PQS(Qstring);
                let body = "";
                if(query.id == undefined){
                        body = "error ...";
                }else{
                        body = readFileSync(`${storage}${query.id}`);
                }
                res.writeHeader(200,{"content-type":"text/plain"});
                res.write(body);
                res.end();
	}


	function NewId(){
		return(Math.ceil(Math.random()*(10**10)));
	}


	function PQS(q){
		let res = {};
		for(let i = 0; i < q.length; i++){
			let spl = q[i].split("=");
			res[spl[0]] = spl[1];
		}
		return res;
	}






