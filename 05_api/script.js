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

// var url_3 = 'http://hplussport.com/api/products/qty/2/name'
// var url_4 = 'http://hplussport.com/api/products.php?qty=2&order=name'
// var url_5 = 'https://54.196.64.63:8084/posts'
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






function reqListener () {
    console.log(this.status)
    console.log(this.responseText);
};
const url_1 = 'https://54.196.64.63:8084/posts'; 
const url_2 = 'http://54.196.64.63:8083/posts'; 
const url_3 = 'http://hplussport.com/api/products';
const url_4 = "https://reqres.in/api/products/3";
var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url_2);
    oReq.send();