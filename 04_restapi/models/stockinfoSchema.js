const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
    // _id:String,
    date:{
        type:String,
        dffault:Date.now,
        required:true
    },
    tricke:String,
    pivot:Number,
    vol_up1:Number,
    vol_up2:Number,
    vol_up3:Number,
    vol_down1:Number,
    vol_down2:Number,
    vol_down3:Number,
    recent_dip:Number,
    last_peak:Number,
    recent_sup:Number,
    rec_resistance:Number,
    recent_stoploss:Number,
    recent_trailingstoploss:Number,
    strategy_name:String,
    market_trend:Number,
    atr:Number,
    record_id:Number
});
module.exports = mongoose.model('stock_infos', stockSchema)



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



