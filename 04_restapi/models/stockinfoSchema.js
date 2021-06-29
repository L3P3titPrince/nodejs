const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
    // _id:String,
    date:{
        type:Date,
        dffault:Date.now,
        required:true
    },
    stock_code:String,
    income_plot:String,
    trade_singal:String,
    buy_price:Number,
    stop_price:Number,
    current_price:Number,
    last_price:Number,
    smart_trailing:Number,
    profit_protected:Number
});
module.exports = mongoose.model('col_stockinfos', stockSchema)



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



