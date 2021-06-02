

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

app.get('/fetch',  (req, res) => {
    MongoClient.connect(url)
    .then((client) => {
        var db = client.db('mydb');
        var cars = db.collection('cars');
        cars.find({}).limit(10).toArray((err, result) => {
            if (err) throw err;
            console.log("Fetched !!!!!!!!!!!!!!!!!!");
            res.send(result);        
        });
    })
    .catch(err => { throw err })
})

app.post('/add' , (req,res) => {
    console.log(req.body)
    MongoClient.connect(url)
    .then((client) => {
        var db = client.db('mydb');
        var cars = db.collection('cars');
        cars.insertOne(req.obj,(err,result) => {
            if(err) throw err ;
            res.send(result);
            console.log('Added !!!!!!!!!!!!!!!!');
            // console.log(res.insertedCount);
        })
    })
    .catch(err => { throw err })
})

app.post('/delete', (req,res) => {
    MongoClient.connect(url)
    .then((client) => {
        var db = client.db('mydb');
        var cars = db.collection('cars');
        cars.deleteOne(req.id,(err,obj) => {
            if(err) throw err ;
            // console.log(obj);
            console.log(res);
            console.log("Deleted !!!!!!!!!!!!!!");
            res.send(obj);
        })
    })
    .catch(err => { throw err })
})


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

    // dbo.collection("cars").find({}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // var query = { model : 'S4' };
    // dbo.collection("cars").find(query).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // var mysort = { model: 1 };
    // dbo.collection("cars").find().sort(mysort).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // var myquery = {  };
    // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //     if (err) throw err;
    //     console.log("1 document deleted");
    //     db.close();
    // });

    // var myquery = {  };
    // var newvalues = {$set: {name: "Minnie"} };
    // dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.result.nModified + " document(s) updated");
    //     db.close();
    // });

//   });