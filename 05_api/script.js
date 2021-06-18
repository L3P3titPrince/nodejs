

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




const request = require('request');
const document = require('document');

var url_3 = 'http://hplussport.com/api/products/qty/2/name'
var url_4 = 'http://hplussport.com/api/products.php?qty=2&order=name'
request(url_4, function(error, response, body){
    // JSON.parse(response)
    console.log('error', error);
    console.log('statusCode', response && response.statusCode);
    // console.log('body', body);
    const info = JSON.parse(body);
    console.log(info);
    var desc = info[0].name;
    console.log(desc);

    var products = document.createElement('li');
    products.innnerHTML = name;

});