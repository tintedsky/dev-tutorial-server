var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.all('/*', function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header(	"Access-Control-Allow-Headers", 
	           	"X-Requested-With", 
				"Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET");
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var tutorials = [
	{
		id:1,
		title:"Android Studio Tutorial For Beginners",
		description:"Learn how to install Android studio and then go through this tutorial bo build your very first app.",
		iframe:'<iframe width="560" height="315" src="https://www.youtube.com/embed/sZWMPYIkNd8" frameborder="0" allowfullscreen></iframe>',
		thumbnail:"https://cdn.pixabay.com/photo/2015/02/18/11/50/mountain-landscape-640617_1280.jpg"
	},
	{
		id:2,
		title:"landscape",
		description:"Just for test",
		iframe:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hoMaY8Iml2o" frameborder="0" allowfullscreen></iframe>',
		thumbnail:"https://cdn.pixabay.com/photo/2014/02/06/10/43/road-259815_1280.jpg"
	}
];

app.get('/tutorials', function(req, res){
	console.log("Get from server");
	res.send(tutorials);
});

app.listen(6069);