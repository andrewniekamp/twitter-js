const express = require( 'express' );
const app = express(); // creates an instance of an express application
const PORT = 3000;

//perform some action on every request no matter what
app.use(function(req, res, next){
	console.log('Middleware on all routes: ', req.method + '/' + res.statusCode);
	next();
})

app.get('/', function(req, res){
	res.send('Hello there');
})

app.listen(PORT, function(){
	console.log('server running on port: ' + PORT);
})
