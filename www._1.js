const http = require("http");
const dateEt = require("./dateTimeET");
const pageHead = '<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>Lilian Schönberg, veebiprogrammeerimine</title></head><body>';
const pageBody = '\t<h1>Lilian Schönberg, veebiprogrammeerimine</h1><p>See leht on loodud veebiprogrammeerimise kursusel<a href="https://www.tlu.ee"> Tallinna Ülikoolis</a> ning ei sisalda tõsiseltvõetavat sisu!</p><p>See lause on hiljem lisatud, täpsemalt pühapäeval 07.09.2025.</p><p>Me kasutame kodutööde esitamiseks <a href="https://moodle.tlu.ee">Moodle keskkonda</a>.</p>';
const pageFoot = '\n</body></html>';
<ol>   //lisa vanasõnu kuvama kodus
	<li>Vanasõna</li>
	<li>Vanasõna</li>
	<li>Vanasõna</li>
</ol>
http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	//res.write("Ongi nii!");
	res.write(pageHead);
	res.write(pageBody);
	res.write("\n\t<p>Täna on " + dateEt.weekOfDay() + ".</p>");
	res.write(pageFoot);
	return res.end();
}).listen(5127);