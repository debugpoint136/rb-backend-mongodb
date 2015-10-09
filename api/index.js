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

var userSchema = new Schema ({
	name: String,
	last_modified_date: Date
})

var geo2trackSchema = new Schema ({
	name: String,
	geo: String
})

var geo2info = dbConnection.model('GEO2INFO', geo2infoSchema, 'geo2info')
var User = dbConnection.model('User', userSchema, 'users')
var geo2track = dbConnection.model('GEO', geo2trackSchema, 'geo2track')

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

function onBulkInsert(err, myDocuments) {
    if (err) {
        return next(err);
    }
    else {
        console.log('%userCount users were inserted!', myDocuments.length)
    }
}

app.post('/batchinsert', function (req, res, next) {
/*
	// This block resets the collection
	  
    User.remove({}, function (err) {
        if (err) {
            return next(err);
        }
    });

    var users = [
        {"_id": mongoose.Types.ObjectId("54f6612bb0e6af1800b5d33d"), "name": "Andy Sandefer", "__v": 0, "last_modified_date": new Date("2015-03-04T01:28:25.935Z")},
        {"_id": mongoose.Types.ObjectId("54f6615fb0e6af1800b5d33e"), "name": "Mike Smith", "__v": 0, "last_modified_date": new Date("2015-03-04T01:28:25.935Z")},
        {"_id": mongoose.Types.ObjectId("54f6616cb0e6af1800b5d33f"), "name": "Bob Jones", "__v": 0, "last_modified_date": new Date("2015-03-04T01:28:25.935Z")},
        {"_id": mongoose.Types.ObjectId("54f66177b0e6af1800b5d340"), "name": "Aaron Baron", "__v": 0, "last_modified_date": new Date("2015-03-04T01:28:25.935Z")},
        {"_id": mongoose.Types.ObjectId("54f66182b0e6af1800b5d341"), "name": "Johnny Javascript", "__v": 0, "last_modified_date": new Date("2015-03-04T01:28:25.935Z")},
        {"_id": mongoose.Types.ObjectId("54f66188b0e6af1800b5d342"), "name": "Paul Pascal", "__v": 0, "last_modified_date": new Date("2015-03-04T01:28:25.935Z")},
        {"_id": mongoose.Types.ObjectId("54f66190b0e6af1800b5d343"), "name": "Joanna Java", "__v": 0, "last_modified_date": new Date("2015-03-04T01:28:25.935Z")},
    ];*/

    /***** something like this works perfectly with the POST body *****/

		/*
		[   
		{"name": "Deepak Purushotham", "last_modified_date": "2015-03-04T01:28:25.935Z"},
		{"name": "Mike Jackson", "last_modified_date": "2015-03-04T01:28:25.935Z"},
		{"name": "Bob Jones", "last_modified_date": "2015-03-04T01:28:25.935Z"},
		{"name": "Aaron Baron",  "last_modified_date": "2015-03-04T01:28:25.935Z"},
		{"name": "Johnny Javascript",  "last_modified_date": "2015-03-04T01:28:25.935Z"},
		{"name": "Paul Pascal",  "last_modified_date": "2015-03-04T01:28:25.935Z"},
		{"name": "Joanna Java",  "last_modified_date": "2015-03-04T01:28:25.935Z"}
		]
		*/
	
    geo2track.collection.insert(req.body);

    res.json({'jobStatus': 'MongoDB Refresh Complete - It\'s All Good!'});
});


app.use(errorHandler())
var server = require('http').createServer(app).listen(3000);