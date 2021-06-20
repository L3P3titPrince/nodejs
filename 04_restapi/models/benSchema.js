const mongoose = require('mongoose');


const benchSchema = mongoose.Schema({
    _id:String,
    Date:String,
    investment_returns:String
});
module.exports = mongoose.model('col_benchmarks', benchSchema)


// // this is used for test schema model
// const PostSchema = mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     description:String,
//     price:Number
// });
// module.exports = mongoose.model('Posts', PostSchema);

// const strategySchema = mongoose.Schema({
//     Date:String,
//     ema_returns:String
// });
// module.exports = mongoose.model('spy_strategy', strategySchema)



// console.log(module.exports.findOne());
// x3 = mongoose.model('spy_strategy', strategySchema)
// console.log(x3.Date);



