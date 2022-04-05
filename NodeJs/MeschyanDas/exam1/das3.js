/*
	import pt from "path";
	
	console.log("path gradaran e pt popoxakan ....");

	const cd = pt.resolve();
	console.log(cd veragrel resolv path-ic methody ...);
	
	const fj = pt.join(cd,"das3A.js");
	console.log( miacnel ajs faylin das3A anunov fayly ...);

	console.log(pt.parse(fj));

*/
/*
	import {resolve, join, parse} from "path";

	console.log("jan");

        const cd = resolve();
        console.log(cd);
        
        const fj = join(cd,"das3A.js");
        console.log(fj);

        console.log(parse(fj));
*/
	
	import pat from "path";
	import fs from "fs";
	
	const mek = pat.resolve();
	const erku = pat.join(mek, "package.json");
	
/*
	const first = fs.readFile(erku, "utf8", function(error, text){
		console.log(text);
	});
*/
/*
	fs.promises.readFile(erku, "utf8").then ((text)=>{
		console.log(text);
	});
*/	
	const chors = pat.join(mek, "das3A.js");
	
	const StexcelGrel = fs.promises.writeFile(chors, "Hay everyone ...");

	const jnjelFile = fs.promises.unlink(chors);















