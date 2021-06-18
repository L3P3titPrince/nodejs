// https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
//FileName: index.js

// Import express
let express = require('express')

// Import Body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');
console.log("1111")
var db = mongoose.connection;
// Initial the app
let app = express();

// Import routes 
let apiRoutes = require("./api-routes")
// configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect(
    'mongodb://localhost:27017/local', 
    {useNewUrlParser: true,  useUnifiedTopology: true},
    () => console.log('connect url is correct')
);
    // .then(() => console.log('MongoDB Connected...'))
    // .catch((err) => console.log(err));
// mongoose.connect('mongodb://localhost/db_test_spy', {useNewUrlParser: true});

var db = mongoose.connection;
// console.log("1")

// added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("DB connected successfully")

// Setup server port
var port = process.env.PORT || 8081;

// Send message for default URL
// console.log("2")
app.get('/', (req, res) => res.send('Hellow World with Express and Nodemon'));

// use api routes in the app
app.use('/api', apiRoutes, () =>{
    console.log('Start using api')
});

// Launch app to listen to specified port
app.listen(port, function (){
    console.log("Running RestHub on port " + port);
});




