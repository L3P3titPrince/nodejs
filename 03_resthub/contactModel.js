// contactModel.js
var mongoose = require('mongoose');

// Setup schema
// var contactSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     gender: String,
//     phone: String,
//     create_date: {
//         type: Date,
//         default: Date.now
//     }
// });

var contactSchema = mongoose.Schema({
        hostname: {
            type: String,
            required: true
        },
        pid:String
    });



// Export Contact model
// var Contact = module.exports = mongoose.model('spy_bench', contactSchema);
// module.exports.get = function (callback, limit) {
//     Contact.find(callback).limit(limit);
// }
// Contact(sting)
var Contact = module.exports = mongoose.model('startup_log', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}

// Import Mongoose
// let mongoose = require('mongoose');
// console.log("1111")
// Connect to Mongoose and set connection variable
mongoose.connect(
    'mongodb://localhost:27017/local', 
    {useNewUrlParser: true,  useUnifiedTopology: true},
    () => console.log('connect url is correct')
);


var db = mongoose.connection;
// x = mongoose.model('startup_log', contactSchema)
// x.find().limit(5)



