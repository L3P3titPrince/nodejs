const mongoose = require('mongoose');


const strSchema = mongoose.Schema({
    Date:String,
    ema_returns:String
});
// pay attention, this is "col_stra" plural
module.exports = mongoose.model('col_stras', strSchema)


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



