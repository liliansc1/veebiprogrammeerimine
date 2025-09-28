const http = require("http");
const fs = require("fs");
const dateEt = require("./src/dateTimeET");
const textRef = "txt/vanasonad.txt";
const pageHead = '<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>Lilian Schönberg, veebiprogrammeerimine</title></head><body>';
const pageBody = '\t<h1>Lilian Schönberg, veebiprogrammeerimine</h1><p>See leht on loodud veebiprogrammeerimise kursusel<a href="https://www.tlu.ee"> Tallinna Ülikoolis</a> ning ei sisalda tõsiseltvõetavat sisu!</p><p>See lause on hiljem lisatud, täpsemalt pühapäeval 07.09.2025.</p><p>Me kasutame kodutööde esitamiseks <a href="https://moodle.tlu.ee">Moodle keskkonda</a>.</p>';
const pageFoot = '\n</body></html>';

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	fs.readFile(textRef, "utf8", (err, data)=>{
		if(err){
			res.write(pageHead);
			res.write(pageBody);
			res.write("\n\t<p>Täna on " + dateEt.weekDay() + " " + dateEt.fullDate() + ".</p><p>Kahjuks tänaseks ühtki vanasõna välja pakkuda pole!</p>");
			res.write(pageFoot);
			return res.end();
		} else {
			let folkWisdom = data.split(";");
			let folkWisdomOutput = "\n\t<ol>";
			for (let i = 0; i < folkWisdom.length; i ++){
				folkWisdomOutput += "\n\t\t<li>" + folkWisdom[i] + "</li>";
			}
			folkWisdomOutput += "\n\t</ol>";
			res.write(pageHead);
			res.write(pageBody);
			res.write("\n\t<p>Täna on " + dateEt.weekDay() + " " + dateEt.fullDate() + ".</p>");
			res.write("\n\t<h2>Valik Eesti vanasõnu</h2>")
			res.write(folkWisdomOutput);
			res.write(pageFoot);
			return res.end();
		}
		});
}).listen(5127);
 