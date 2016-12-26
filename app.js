var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app);


app.use(express.static('views'));

app.get('/', (req, res) => {
	res.redirect('index.html');
})
server.listen(3000 || process.env.PORT, () => {
	console.log('Server is started!');
});
