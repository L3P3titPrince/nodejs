// *******************1.Statement Part****************************
// define http
// const http = require('http');
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
const apiV1 = require('./routes/version1');
// mount to "./routes/version2" path
const apiV2 = require('./routes/version2');
// *******************1.Statement Part****************************



//*******************2.Routes *****************
app.use(bodyParser.json());
// routes, create the root, root directory only provide "GET" request
app.get('/', (req,res) =>{
    // res.send('We have the response and this is the root directory');
    // compared to just response with text, we should response more info
    res.json({
        status:200,
        message:"We have the response and this is the root directory"
    })
});
// use outside api version 1 page
app.use('/api/v1', apiV1);
// use api version 2 page and map outside URL as "/api/v2"
app.use('/api/v2', apiV2);
//*******************2.Routes *****************


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




// connect to DB, but we use dotenv hide the full url
mongoose.connect(
    // 'mongodb://localhost/db_test_spy', 
    process.env.DB_CONNECTION_LOCAL,
    // process.env.DB_CONNECTION_AWS,
    {useNewUrlParser: true, useUnifiedTopology: true },
    ()=>console.log('Connect to DB')
);
const db = mongoose.connection;

// 将连接与错误事件绑定（以获得连接错误的提示）
// connect error with 
db.on('error', console.error.bind(console, 'MongoDB connection error：'));

// how to we start listensin to the sever? we use port 8083
app.listen(8083);

// *****************************************HTTPS********************************************
// this part used for https server start, we don't use it due to CA certification, but we reserve it
// set https parameters
const options = {
    key : fs.readFileSync("cert/server.key"),
    cert : fs.readFileSync("cert/server.cert")
};
https.createServer(options, app).listen(8084);
// *****************************************HTTPS********************************************