var express = require ('express'); 
var app = express(); 
app.use(express.static(__dirname + '/public'));
app.locals.name = process.env.name;
app.locals.color = process.env.color;
app.get ("/", function (req,res) {
	res.render ( "hello.ejs" );	
	} );
app.listen(3000 , function () {
	console.log ("server is listening!!!");
} );
