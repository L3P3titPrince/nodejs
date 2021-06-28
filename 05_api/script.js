var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var request = XMLHttpRequest();
// request.open('GET', 'http://hplussport.com/api/products');

// request.onload = function() {
//     var response = request.response;
//     // its shoould be a string type
//     console.log(response);
//     console.log(typeof response);
//     var jsonData = JSON.parse(response);
//     console.log(jsonData);
//     console.log(typeof jsonData);
// };
// request.send();

// const request = require('request');

// request('http://hplussport.com/api/products', function(error, response, body){
//     console.log('error', error);
//     console.log('statusCode', response && response.statusCode);
//     console.log('body', body);
// });






// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var request = new XMLHttpRequest();
// request.open('GET', 'https://hplussport.com/api/products');
// 
// request.onload = function() {
    // use vaiable response
    // var response = request.response;
    // response will get as a string, we convert to a javascrip object\
    // JSON.parse(response);
    // its shoould be a string type
    // console.log(response);
    // console.log(typeof response);
    // var jsonData = JSON.parse(response);
    // console.log(jsonData);
    // console.log(typeof jsonData);
// };
// request.send();




// const request = require('request');
// const document = require('document');

// var url_3 = 'http://hplussport.com/api/products/qty/2/name'
// var url_4 = 'http://hplussport.com/api/products.php?qty=2&order=name'
// request(url_4, function(error, response, body){
//     // JSON.parse(response)
//     console.log('error', error);
//     console.log('statusCode', response && response.statusCode);
//     // console.log('body', body);
//     const info = JSON.parse(body);
//     console.log(info);
//     var desc = info[0].name;
//     console.log(desc);

//     var products = document.createElement('li');
//     products.innnerHTML = name;

// });






// const request = require('request');
// // const document = require('document');

// var url_3 = 'http://hplussport.com/api/products/qty/2/name';
// var url_4 = 'http://hplussport.com/api/products.php?qty=2&order=name';
// var url_5 = 'https://54.196.64.63:8084/posts';
// var url_6 = 'http://54.196.64.63:8083/posts';
// const url_7 = "https://reqres.in/api/products/3";
// request(url_5, function(error, response, body){
//     // JSON.parse(response)
//     console.log('error', error);
//     console.log('statusCode', response && response.statusCode);
//     console.log('body', body);
//     // const info = JSON.parse(body);
//     // console.log(info.length);
//     // for (i=0; i<info.length; i++){
//         // console.log(info[i].Date);
//     // }
//     // console.log(info[2]._id);
//     // var desc = info[0].name;
//     // console.log(desc);
// });


// const http = require('http');
// const url = 'http://54.162.105.99:8083/posts';

// const request = http.request(url, (response)=>{
//     let data = '';
//     response.on('data', (chunk)=>{
//         data = data + chunk.toString();
//     });

//     response.on('end', () =>{
//         const body = JSON.parse(data);
//         console.log(body);
//     });
// });

// request.on('error', (error)=>{
//     console.log('An error', error);
// });

// request.end();




// var request = new XMLHttpRequest();
// url = 'http://54.162.105.99:8083/posts'
// request.open('GET', url);
// // 
// request.onload = function() {
//     // use vaiable response
//     var response = request.response;
//     // response will get as a string, we convert to a javascrip object\
//     // JSON.parse(response);
//     // its shoould be a string type
//     // console.log(response);
//     // console.log(typeof response);
//     // var jsonData = JSON.parse(response);
//     // console.log(jsonData);
//     console.log(typeof jsonData);
// };
// request.send();



// function reqListener () {
//     console.log(this.responseText);
// };
// const url = 'https://54.162.105.99:8083/posts'; 
// const url_1 = 'http://hplussport.com/api/products';
// const url_2 = "https://reqres.in/api/products/3";
// var oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", reqListener);
//     oReq.open("GET", url_2);
//     oReq.send();






// function reqListener () {
//     console.log(this.status)
//     console.log(this.responseText);
// };
// const url_1 = 'https://54.196.64.63:8084/posts'; 
// const url_2 = 'http://54.196.64.63:8083/posts'; 
// const url_3 = 'http://hplussport.com/api/products';
// const url_4 = "https://reqres.in/api/products/3";
// var oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", reqListener);
//     oReq.open("GET", url_2);
//     oReq.send();





// const url_1 = 'https://54.196.64.63:8084/posts'; 
// const url_2 = 'http://54.196.64.63:8083/posts'; 
// const url_3 = 'http://hplussport.com/api/products';
// const url_4 = "https://reqres.in/api/products/3";
// const https = require('https');
// Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" 
// https.get(url_1, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });

// }).on('error', (e) => {
//   console.error(e);
// });



// // jquery
// const url_1 = 'https://54.196.64.63:8084/posts'; 
// const url_4 = "https://reqres.in/api/products/3";
// $.ajax({
//     url: url_4,
//     success : function(response){
//         console.log(reponse);
//     }
// });








// const fetch=require("node-fetch");
// const url_4 = "https://reqres.in/api/products/3";
// const url_1 = 'https://54.196.64.63:8084/posts'; 
// fetch(url_1)
// .then(
//     function(response){
//         return response.json();
//     }
// )
// .then(
//     function(respData){
//         console.log(respData)
//     }
// );


// const mongoose = require('mongoose');


// const benchSchema = mongoose.Schema({
//     Date:String,
//     investment_returns:String
// });
// module.exports = mongoose.model('col_benchmarks', benchSchema)

// const colData = module.exports.find().limit(10);
// console

// var request = require('request');
// var url="https://data136.bubbleapps.io/version-test/api/1.1/obj/test_mongo";
// var requestData={
//     "Date":"2020-08-09",
//     "investment_returns":"44553"
// };
// console.log(requestData);
 
// function httprequest(url,data){
//     request({
//         url: url,
//         method: "POST",
//         json: true,
//         headers: {
//             "content-type": "application/json",
//             "Authorization":"Bearer 44bb385fff2a717d2a437866f42829b3"
//         },
//         body: data
//     }, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body) // 请求成功的处理逻辑
//         }
//     });
// };
// httprequest(url,requestData);






// test for bubble user post 
// const mongoose = require('mongoose');


// const benchSchema = mongoose.Schema({
//     Date:String,
//     investment_returns:String
// });
// module.exports = mongoose.model('col_benchmarks', benchSchema)

// const colData = module.exports.find().limit(10);

// var request = require('request');
// var url="https://data136.bubbleapps.io/version-test/api/1.1/obj/test_user";
// var requestData={
//     "Email":"333@stevens.edu",
//     "Full Name" : "Amddddddolf",
//     "Password":"12212312323"
// };

// // console.log(requestData);
 
// function httprequest(url,data){
//     request({
//         url: url,
//         method: "POST",
//         json: true,
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization":"Bearer 30b65f3e2de2e73fdd685fb35e470f56"
//         },
//         body: data
//     }, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body) // 请求成功的处理逻辑
//         }
//     });
// };
// httprequest(url,requestData);



// {
// "email":"1@1.com",
// "password":"00wasabi00"
// }



// {
// "email":"3@3.com",
// "password":"3",
// "full name":"password is 3"
// }



   



// terminate node 
//  http://nodejs.cn/api/process.html#process_exit_codes
// process.exit(1)

console.log(process.env.NODE_ENV)

