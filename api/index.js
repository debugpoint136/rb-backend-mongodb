var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var logger = require('morgan')
var errorHandler = require('errorHandler');
var ok = require('okay')

var app = express()
var dbUri = 'mongodb://localhost:27017/api'
var dbConnection = mongoose.createConnection(dbUri)
var Schema = mongoose.Schema
var enumRoles = ['user', 'admin', 'staff']
var positiveNum = function(value) {
	if (value < 0) {
		return false
	} else {
		return true
	}
}

var geo2infoSchema = new Schema ({
	geo: { 
		type : String
	},
	id: { 
		type: String
	},
	label: {
		type: String
	},
	treatment: {
		type: String
	},
	control: {
		type: String
	}
})



var geo2info = dbConnection.model('GEO2INFO', geo2infoSchema, 'geo2info')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
		res.send('ok')
})

app.get('/posts', function(req, res, next) {
	geo2info.find({}, {}, {limit: 100, sort: {_id: 1}}, ok(next, function(posts) {
		res.send(posts)
	})
	)
})
app.post('/posts', function(req, res, next){
	var post = new geo2info (req.body)
	post.validate(ok(next, function(error){
			post.save(ok(next, function(results){
			res.send(results)
		})
	)})
	)
})

app.use(errorHandler())
var server = require('http').createServer(app).listen(3000);