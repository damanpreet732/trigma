

var mongo = require('mongodb');
var express = require('express');
var app = express();

var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017";

// MongoClient.connect(url + '/mydb', function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())

app.get('/fetch',  (req, res) => {
    MongoClient.connect(url)
    .then((client) => {
        var db = client.db('mydb');
        var cars = db.collection('cars');
        cars.find({}).limit(10).sort({year:-1}).toArray((err, result) => {
            if (err) throw err;
            console.log("Fetched !!!!!!!!!!!!!!!!!!");
            res.send(result);        
        });
    })
    .catch(err => { throw err })
})

app.post('/add' , (req,res) => {
    // console.log(req.body);
    // res.send('Sucess');
    MongoClient.connect(url)
    .then((client) => {
        var db = client.db('mydb');
        var cars = db.collection('cars');
        cars.insertOne(req.body,(err,result) => {
            if(err) throw err ;
            res.send(result);
            console.log('Added !!!!!!!!!!!!!!!!');
        })
    })
    .catch(err => { throw err })
})

app.post('/delete', (req,res) => {
    // console.log(req.body);
    MongoClient.connect(url)
    .then((client) => {
        var db = client.db('mydb');
        var cars = db.collection('cars');
        cars.deleteOne({_id : new mongo.ObjectId(req.body.id)},(err,obj) => {
            if(err) throw err ;
            console.log("Deleted !!!!!!!!!!!!!!");
            res.send(obj);
        })
    })
    .catch(err => { throw err })
})

// MongoClient.connect(url)
//     .then(client => {
//         var db = client.db('mydb');
//         var cars = db.collection('cars');
//         cars.deleteMany({make : ''}, function(err, obj) {
//             if (err) throw err;
//             console.log("document deleted");
//         })
//     })


var server = app.listen(8001, function () {
    console.log('Server Started')
 })

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

    // dbo.createCollection("cars", function(err, res) {
    //   if (err) throw err;
    //   console.log("Collection created!");
    //   db.close();
    // });

    // var myobj = [] 
    // dbo.collection('cars').insertMany(myobj,(err,res) => {
    //     if(err) throw err ;
    //     console.log(res.insertedCount);
    //     db.close() ;
    // })

    // var myquery = {  };
    // var newvalues = {$set: {name: "Minnie"} };
    // dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.result.nModified + " document(s) updated");
    //     db.close();
    // });

//   });