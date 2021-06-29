const mongoose = require('mongoose');


const watchSchema = mongoose.Schema({
    // _id:String,
    date:String,
    stock_code:String
});
// pay attention, this is "col_stra" plural
module.exports = mongoose.model('col_watchlists', watchSchema)


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



