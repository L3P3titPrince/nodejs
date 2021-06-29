// This is the test version 2, only for verfication process between Bubble and MongoDB
const express = require('express');
// call as function
const router = express.Router();
// import models
const col_ben = require('../models/benSchema');
// const col_stock = require('../models/stockinfoSchema.js');
// const col_user = require('../models/userSchema.js');
// const col_watch = require('../models/watchSchema');

// this function only used for test, if you need get all data, 
// router.get('/', (req, res) =>{
//     res.send('router posts here');
// });

// the input always be string, you need to transfor them to ObjectID type
// any string can be casted in ObjectID now.
String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
};

//*********************GET ALl***************** */
// get all data from collection, root
router.get('/', async (req, res)=>{
    try{
        let data = await col_ben.find();
        res.json(data);
    }catch(err){
        res.json({message:"GET ALL request Error"});
    }
})
//*********************GET ALl***************** */


//*********************GET ONE***************** */
// get a specific by its objectid
router.get('/:id', async (req, res)=>{
    // findOne() equale to findByID() and we need first transofrm ":id" to ObjectID
    let currBen = await col_ben.findOne({_id:req.params.id.toObjectId()});
    console.log(currBen);
    if(currBen){
        res.json(currBen)
    }else{
        res.status(404);
        res.json({message:"Not Found"});
    };
    // try{
    //     let currBen = await col_ben.findOne({_id:req.params.id.toObjectId()});
    //     console.log(currBen);
    // }catch(err){
    //     res.json({message:"Get one request error"})
    // }
});
//*********************GET ONE***************** */


//*************POST************** */
router.post('/', async (req, res) =>{
    // output the request context
    console.log(req.body);
    let data = new col_ben({
        // "id" : "10",
        "Date":req.body.Date,
        "investment_returns":req.body.investment_returns
    });
    try{
        const savedPost = await data.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:"save errdor"});
    };
});
//*************POST************** */


//*****************************DELETE*************************** *//
router.delete('/:id', async (req,res)=>{
    try{
        let removeData = await col_ben.remove({_id:req.params.id.toObjectId()});
        res.json(removeData);
    }catch(err){
        res.json({message:"remove error"});
    }
})
//*****************************DELETE*************************** *//

//**************************UPDATE****************************** */
router.patch('/:id', async (req,res)=>{
    try{
        let updateData = await col_ben.updateOne(
            {_id:req.params.id.toObjectId()},
            {$set:{Date:req.body.Date}}
            // {$set:{investment_returns:req.body.investment_returns}}
        );
        res.json(updateData);
    }catch(err){
        res.json({message:"update error"})
    }
})
//**************************UPDATE****************************** */

//***********************test part *************************
// this is part is test for modifing bubble database from a get request to mongodb
const request = require('request');
router.get('/modifyBubble', async (req,res) =>{
    var url_bubble="https://data136.bubbleapps.io/version-test/api/1.1/obj/test_mongo";
    var requestData={
        "_id":"1212",
        "Date":"sdfasf",
        "investment_returns":"1666633333"
    };
    const colData = await col_ben.find().limit(10);
    // console.log(colData[0]);
    // console.log(colData.length);
    var i;
    for (i=0; i<colData.length; i++){
        httprequest(url_bubble,colData[i]);
        console.log(colData[i]);
    };
    // httprequest(url_bubble,colData[0]);
    // console.log(requestData);
 
    function httprequest(url,data){
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
                "Authorization":"Bearer 30b65f3e2de2e73fdd685fb35e470f56"
            },
            body: data
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // 请求成功的处理逻辑
                console.log("suceess running in here");
            }
        });

    };
    console.log("test hereeeee");
    // res.send("test for modifing Bubble from MongoDB JS");
    res.json({message: "success send psot"});
});
//***********************test part *************************
router.get('/specific', (req,res) =>{
    res.send("Specific post");
})



module.exports = router;



//*******************Abandand********************** */
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

