var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app);


app.use(express.static('views'));

app.get('/', (req, res) => {
	res.redirect('index.html');
})
server.listen(process.env.PORT || 3000 , () => {
	console.log('Server is started!');
});
