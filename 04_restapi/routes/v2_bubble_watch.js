// This is the test version 2, only for verfication process between Bubble and MongoDB
const express = require('express');
// call as function
const router = express.Router();
// import models
// const col_ben = require('../models/benSchema');
const col_watch = require('../models/watchSchema');
// const col_stock = require('../models/stockinfoSchema.js');
// const col_user = require('../models/userSchema.js');


// the input always be string, you need to transfor them to ObjectID type
// any string can be casted in ObjectID now.
String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
};

router.get('/', (req, res) =>{
    res.send('This is GET nested POST to modify Bubble Database');
});
router.get('/specific', (req,res) =>{
    res.send("Specific post");
})


//***********************test part *************************
// this is part is test for modifing bubble database from a get request to mongodb
const request = require('request');
router.get('/modifyBubble', async (req,res) =>{
    var url_bubble="https://data136.bubbleapps.io/version-test/api/1.1/obj/watchlists";
    // var requestData={
    //     "_id":"1212",
    //     "Date":"sdfasf",
    //     "stock_code":"1666633333"
    // };
    // due to different format, we need to change a little here.
    // when we post new, we only provide "date" and "stock_code", but mongoDB will generate "_v" due to mongoose
    // in the target bubble database, we only need "date" and "stock_code",
    // default, it will inculde objectID when you use find, so you need to specify which one will contain
    const colData = await col_watch.find({}).select({"_id":0, "date":1,"stock_code":1});
    console.log(colData[0]);
    // console.log(colData.length);
    var i;
    // using for loop to send each records into bubble database
    for (i=0; i<colData.length; i++){
        httprequest(url_bubble,colData[i]);
        console.log(colData[i]);
    };
    // httprequest(url_bubble,requestData);
    // console.log(requestData);
    // create a 
    function httprequest(url,data){
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
                "Authorization":"Bearer f00a192fc2d7786a5f2e4153f43d82bc"
            },
            body: data
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json({status:response.statusCode})
                console.log(body); // 请求成功的处理逻辑
                console.log("suceess running in here");
            }
        });

    };
    // console.log("test hereeeee");
    // res.send("test for modifing Bubble from MongoDB JS");
    res.json({status:"Success send data from MongoDB to Bubble"});
});
//***********************test part *************************







module.exports = router;



//*******************Abandand********************** */
// this function only used for test, if you need get all data, 
// router.get('/', (req, res) =>{
//     res.send('router posts here');
// });

// router.post('/', (req, res) =>{
//     // output the request context
//     // console.log(req.body);
//     const post = new Post({
//         title:req.body.title,
//         description:req.body.description
//     });

//     post.save()
//     .then(data =>{
//         res.json(data);
//     })
//     .catch(err=>{
//         res.json({message:error});
//     });
// });

