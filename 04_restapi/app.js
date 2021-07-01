// *******************1.Statement Part****************************
// define http
// use expresss framework to start this api
const express = require('express');
// file system
const fs = require('fs');
const https = require('https');
const app = express();
// declare mongoose
const mongoose = require('mongoose');
//import body parser
const bodyParser = require('body-parser')
// call the ".env" file to get global constant
require('dotenv/config');
//import routes
const apiV1 = require('./routes/version1.js');
// mount to "./routes/version2" path
const apiV2_bench = require('./routes/v2_bench.js');
const apiV2_watch = require('./routes/v2_watch.js');
const apiV2_bubble = require('./routes/v2_bubble_watch.js');
// 06/30/2021 version 3
const apiV3_stock = require('./routes/v3_stock.js');
const apiV3_bubble = require('./routes/v3_bubble.js')
// *******************1.Statement Part****************************



//*****************************2.Routes ******************************
// when we use bodyParser, we will recoginize requests for content-type:application/json
app.use(bodyParser.json());
// we can parse url tpye with parameters
app.use(bodyParser.urlencoded({extended:true}))

// routes, create the root, root directory only provide "GET" request
// this root info is uesd for verification
app.get('/', (req,res) =>{
    // res.send('We have the response and this is the root directory');
    // compared to just response with text, we should response more info
    try{
        console.log("Start a get request:", req.body);
        res.json({
            status:200,
            message:"We have the response and this is the root directory"
        });
    }catch(err){
        res.json({
            status:400,
            message:"Get request error in root dictionry"
        });
    };
});
// use outside api version 1 page
app.use('/api/v1', apiV1);
// use api version 2 page and map outside URL as "/api/v2"
app.use('/api/v2/col_benchmarks', apiV2_bench);
app.use('/api/v2/col_watchlists', apiV2_watch);
app.use('/api/v2/bubble', apiV2_bubble);
app.use('/api/v3/stock_infos', apiV3_stock);
app.use('/api/v3/bubble', apiV3_bubble);
//*******************2.Routes ***************************




// connect to DB, but we use dotenv hide the full url
// mongoose.connect(
//     // 'mongodb://localhost/db_test_spy', 
//     process.env.DB_CONNECTION_LOCAL,
//     // process.env.DB_CONNECTION_AWS,
//     {useNewUrlParser: true, useUnifiedTopology: true },
//     ()=>{
//         // console.log('Connect to DB');
//         console.log('0=disconnected,1=connected. Current Connection is', mongoose.connection.readyState);
//     }
// );
// console.log(mongoose.connection.readyState);

// a better way to monitor   whole connect process
mongoose.connect(
    process.env.DB_CONNECTION_LOCAL,
    // process.env.DB_CONNECTION_SEA,
    {useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
    console.log('0=disconnected,1=connected. Current Connection is', mongoose.connection.readyState, "Success!");
}).catch(err=>{
    console.log("Can't connect to database. Exiting now....", err);
    process.exit();
});
const db = mongoose.connection;
// 将连接与错误事件绑定（以获得连接错误的提示）
// connect error with 
db.on('error', console.error.bind(console, 'MongoDB connection error：'));

// how to we start listensin to the sever? we use port 8083
app.listen(8083, ()=>{
    console.log("APP.JS is listensing on port 8083")
});

// *****************************************HTTPS********************************************
// this part used for https server start, we don't use it due to CA certification, but we reserve it
// set https parameters
const options = {
    key : fs.readFileSync("cert/server.key"),
    cert : fs.readFileSync("cert/server.cert")
};
https.createServer(options, app).listen(8084);
// *****************************************HTTPS********************************************



// *******************************Abandon************************
// create another user route
// app.use('/user', userRoute)
// change to sub directory /posts/
// app.get('/posts', (req,res) =>{
//     res.send('We have the response from posts');
// })
// //middlewears, when you access this /posts sub-directory, you will get server feedback
// // middlewear can be used on Authentication
// app.use('/posts', () =>{
//     console.log('This is a middleware runing')
// })
// *******************************Abandon************************


