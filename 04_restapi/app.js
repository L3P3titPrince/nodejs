// define http
// const http = require('http');

//
const express = require('express');
//
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
const postsRoute = require('./routes/posts');


// set https parameters
const options = {
    key : fs.read
}


app.use(bodyParser.json());
// routes, create the root 
app.get('/', (req,res) =>{
    res.send('We have the response and this is the root directory');
})
// use outside posts page
app.use('/posts', postsRoute);
// create another user route
// app. use('/user', userRoute)


// change to sub directory /posts/
// app.get('/posts', (req,res) =>{
//     res.send('We have the response from posts');
// })
// //middlewears, when you access this /posts sub-directory, you will get server feedback
// app.use('/posts', () =>{
//     console.log('This is a middleware runing')
// })


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
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));

// how to we start listensin to the sever? we use port 8083
app.listen(8083);


